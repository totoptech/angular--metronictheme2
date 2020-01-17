import { Component, OnInit, Injectable } from '@angular/core';
import {CollectionViewer, SelectionChange} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {BehaviorSubject, merge, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

// Services
// Widgets model
import {
	LayoutConfigService,
} from "../../../core/_base/layout";

/** Flat node with expandable and level information */
export class DynamicFlatNode {
  constructor(public item: string, public level = 1, public expandable = false,
    public isLoading = false) {}
  }

  /**
  * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
  * the descendants data from the database.
  */
  export class DynamicDatabase {
    dataMap = new Map<string, string[]>([
      [
        "T-shirts",
        [
          'Short Sleeve T-Shirts',
          'Long Sleeve T-Shirts',
          'Everyday T-Shirts',
          'Sleeveless T-shirts & Tanks',
          'Performance T-Shirts',
          'Fashion T-Shirts'
        ]
      ],
      [
        "Sweaters & Hoodies",
        [
          'Sweaters',
          'Hoodies'
        ]
      ],
      [
        "Golf Shirts & Polos",
        [
          'Golf Shirts',
          'Polos',
        ]
      ],
      [
        "Jackets",
        [
          'Fashion Jackets',
        ]
      ],
      [
        "Bottoms",
        [
          'Fashion Bottoms',
        ]
      ]
    ]);

    rootLevelNodes: string[] = [
      "T-shirts",
      "Sweaters & Hoodies",
      "Golf Shirts & Polos",
      "Jackets",
      "Bottoms"
    ];
    /** Initial data from database */
    initialData(): DynamicFlatNode[] {
    return this.rootLevelNodes.map(name => new DynamicFlatNode(name, 0, true));
  }

  getChildren(node: string): string[] | undefined {
    return this.dataMap.get(node);
  }

  isExpandable(node: string): boolean {
    return this.dataMap.has(node);
  }
}

/**
* File database, it can build a tree structured Json object from string.
* Each node in Json object represents a file or a directory. For a file, it has filename and type.
* For a directory, it has filename and children (a list of files or directories).
* The input will be a json object string, and the output is a list of `FileNode` with nested
* structure.
*/
@Injectable()
export class DynamicDataSource {

  dataChange = new BehaviorSubject<DynamicFlatNode[]>([]);

  get data(): DynamicFlatNode[] { return this.dataChange.value; }
  set data(value: DynamicFlatNode[]) {
    this.treeControl.dataNodes = value;
    this.dataChange.next(value);
  }

  constructor(private treeControl: FlatTreeControl<DynamicFlatNode>,
    private database: DynamicDatabase) {}

  connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]> {
    this.treeControl.expansionModel.onChange!.subscribe(change => {
    if ((change as SelectionChange<DynamicFlatNode>).added ||
      (change as SelectionChange<DynamicFlatNode>).removed) {
        this.handleTreeControl(change as SelectionChange<DynamicFlatNode>);
      }
    });

    return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
  }


  /** Handle expand/collapse behaviors */
  handleTreeControl(change: SelectionChange<DynamicFlatNode>) {
    if (change.added) {
      change.added.forEach(node => this.toggleNode(node, true));
    }
    if (change.removed) {
      change.removed.slice().reverse().forEach(node => this.toggleNode(node, false));
    }
  }


  /**
  * Toggle the node, remove from display list
  */
  toggleNode(node: DynamicFlatNode, expand: boolean) {
    const children = this.database.getChildren(node.item);
    const index = this.data.indexOf(node);
    if (!children || index < 0) { // If no children, or cannot find the node, no op
      return;
    }


    node.isLoading = true;

    setTimeout(() => {
      if (expand) {
        const nodes = children.map(name =>
          new DynamicFlatNode(name, node.level + 1, this.database.isExpandable(name)));
          this.data.splice(index + 1, 0, ...nodes);
      } else {
        let count = 0;
        for (let i = index + 1; i < this.data.length
          && this.data[i].level > node.level; i++, count++) {}
          this.data.splice(index + 1, count);
        }


        // notify the change
        this.dataChange.next(this.data);
        node.isLoading = false;
    }, 1000);
  }
}


@Component({
  selector: 'kt-browsing',
  templateUrl: './browsing.component.html',
  styleUrls: ['./browsing.component.scss'],
  providers: [DynamicDatabase]
})
export class BrowsingComponent implements OnInit {
  panelOpenState: boolean = false;
  category_list: string[];
  constructor(
      private layoutconfigService: LayoutConfigService,
      database: DynamicDatabase
    )
  {
      this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
      this.dataSource = new DynamicDataSource(this.treeControl, database);

	  this.dataSource.data = database.initialData();
	  this.category_list = [
		"Men's Clothing",
		"Women's Clothing",
		"Team Wear",
		"Hats",
		"Accessories",
	  ]
  }
  treeControl: FlatTreeControl<DynamicFlatNode>;

  dataSource: DynamicDataSource;
  rootLevelNodes: string[] = [
    "Men's Clothing",
    "Women's Clothing",
    "Team Wear",
    "Hats",
    "Accessories"
  ];
  getLevel = (node: DynamicFlatNode) => node.level;

  isExpandable = (node: DynamicFlatNode) => node.expandable;

  hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;

  ngOnInit(): void {

  }

}
