import * as d from '.';

export interface Hyperscript {
  (sel: any): VNode;
  (sel: Node, data: VNodeData): VNode;
  (sel: any, data: VNodeData): VNode;
  (sel: any, text: string): VNode;
  (sel: any, children: Array<VNode | undefined | null>): VNode;
  (sel: any, data: VNodeData, text: string): VNode;
  (sel: any, data: VNodeData, children: Array<VNode | undefined | null>): VNode;
  (sel: any, data: VNodeData, children: VNode): VNode;
}

declare global {
  export var h: Hyperscript;
}

export interface VNode {
  // using v prefixes largely so closure has no issue property renaming
  vtag?: string | number | Function;
  vkey?: string | number;
  vtext?: string;
  vchildren?: VNode[];
  vattrs?: any;
  vname?: string;
  elm?: d.RenderNode;
  ishost?: boolean;
  isSlotFallback?: boolean;
  isSlotReference?: boolean;
}


export interface VNodeData {
  class?: {[className: string]: boolean};
  style?: any;
  [attrName: string]: any;
}

export interface ChildNode {
  vtag?: string | number | Function;
  vkey?: string | number;
  vtext?: string;
  vchildren?: VNode[];
  vattrs?: any;
  vname?: string;
}


export type PropsType = VNodeProdData | number | string | null;
export type ChildType = VNode | number | string;

export interface FunctionalUtilities {
  forEach: (children: VNode[], cb: (vnode: ChildNode, index: number, array: VNode[]) => void) => void;
  map: (children: VNode[], cb: (vnode: ChildNode, index: number, array: VNode[]) => ChildNode) => VNode[];
}

export interface FunctionalComponent<T = {}> {
  (props: T, children: VNode[], utils: FunctionalUtilities): VNode | VNode[];
}


/**
 * used by production compiler
 */
export interface VNodeProdData {
  key?: string | number;
  class?: {[className: string]: boolean} | string;
  className?: {[className: string]: boolean} | string;
  style?: any;
  [key: string]: any;
}
