/**
* This is an autogenerated file created by the Stencil compiler.
* It contains typing information for all components that exist in this project.
*/
/* tslint:disable */

import { JSXElements } from '@stencil/core';




declare namespace StencilComponents {

  interface AppRoot {}
  interface AppRootAttributes extends JSXElements.HTMLAttributes {}

  interface CmpA {}
  interface CmpAAttributes extends JSXElements.HTMLAttributes {}

  interface CmpB {}
  interface CmpBAttributes extends JSXElements.HTMLAttributes {}

  interface CmpC {}
  interface CmpCAttributes extends JSXElements.HTMLAttributes {}

  interface CmpD {
    'uniqueId': string;
  }
  interface CmpDAttributes extends JSXElements.HTMLAttributes {
    'uniqueId'?: string;
  }

  interface CmpScopedA {}
  interface CmpScopedAAttributes extends JSXElements.HTMLAttributes {}

  interface CmpScopedB {}
  interface CmpScopedBAttributes extends JSXElements.HTMLAttributes {}
}

export interface LocalIntrinsicElements {
  'app-root': StencilComponents.AppRootAttributes;
  'cmp-a': StencilComponents.CmpAAttributes;
  'cmp-b': StencilComponents.CmpBAttributes;
  'cmp-c': StencilComponents.CmpCAttributes;
  'cmp-d': StencilComponents.CmpDAttributes;
  'cmp-scoped-a': StencilComponents.CmpScopedAAttributes;
  'cmp-scoped-b': StencilComponents.CmpScopedBAttributes;
}

declare global {

  interface HTMLAppRootElement extends StencilComponents.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLCmpAElement extends StencilComponents.CmpA, HTMLStencilElement {}
  var HTMLCmpAElement: {
    prototype: HTMLCmpAElement;
    new (): HTMLCmpAElement;
  };

  interface HTMLCmpBElement extends StencilComponents.CmpB, HTMLStencilElement {}
  var HTMLCmpBElement: {
    prototype: HTMLCmpBElement;
    new (): HTMLCmpBElement;
  };

  interface HTMLCmpCElement extends StencilComponents.CmpC, HTMLStencilElement {}
  var HTMLCmpCElement: {
    prototype: HTMLCmpCElement;
    new (): HTMLCmpCElement;
  };

  interface HTMLCmpDElement extends StencilComponents.CmpD, HTMLStencilElement {}
  var HTMLCmpDElement: {
    prototype: HTMLCmpDElement;
    new (): HTMLCmpDElement;
  };

  interface HTMLCmpScopedAElement extends StencilComponents.CmpScopedA, HTMLStencilElement {}
  var HTMLCmpScopedAElement: {
    prototype: HTMLCmpScopedAElement;
    new (): HTMLCmpScopedAElement;
  };

  interface HTMLCmpScopedBElement extends StencilComponents.CmpScopedB, HTMLStencilElement {}
  var HTMLCmpScopedBElement: {
    prototype: HTMLCmpScopedBElement;
    new (): HTMLCmpScopedBElement;
  };

  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement
    'cmp-a': HTMLCmpAElement
    'cmp-b': HTMLCmpBElement
    'cmp-c': HTMLCmpCElement
    'cmp-d': HTMLCmpDElement
    'cmp-scoped-a': HTMLCmpScopedAElement
    'cmp-scoped-b': HTMLCmpScopedBElement
  }

  interface ElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'cmp-a': HTMLCmpAElement;
    'cmp-b': HTMLCmpBElement;
    'cmp-c': HTMLCmpCElement;
    'cmp-d': HTMLCmpDElement;
    'cmp-scoped-a': HTMLCmpScopedAElement;
    'cmp-scoped-b': HTMLCmpScopedBElement;
  }
}


import { DefaultIntrinsicElements } from '@stencil/core';

declare global {
  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends LocalIntrinsicElements, DefaultIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends JSXElements.HTMLAttributes {}
}

