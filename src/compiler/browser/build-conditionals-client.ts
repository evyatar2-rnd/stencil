import * as d from '../../declarations';

export const BUILD: Required<d.Build> = {
  allRenderFn: false,
  cmpDidLoad: true,
  cmpDidUnload: true,
  cmpDidUpdate: true,
  cmpDidRender: true,
  cmpWillLoad: true,
  cmpWillUpdate: true,
  cmpWillRender: true,
  cmpShouldUpdate: true,
  connectedCallback: true,
  cssAnnotations: true,
  disconnectedCallback: true,
  element: true,
  event: true,
  hasRenderFn: true,
  lifecycle: true,
  hostListener: true,
  hostListenerTargetWindow: true,
  hostListenerTargetDocument: true,
  hostListenerTargetBody: true,
  hostListenerTargetParent: true,
  hostListenerTarget: true,
  member: true,
  method: true,
  mode: true,
  noVdomRender: true,
  observeAttribute: true,
  prop: true,
  propMutable: true,
  propBoolean: true,
  propNumber: true,
  propString: true,
  reflect: true,
  scoped: true,
  shadowDom: true,
  slot: true,
  state: true,
  style: true,
  svg: true,
  updatable: true,
  vdomAttribute: true,
  vdomXlink: true,
  vdomClass: true,
  vdomFunctional: true,
  vdomKey: true,
  vdomListener: true,
  vdomRef: true,
  vdomRender: true,
  vdomStyle: true,
  vdomText: true,
  watchCallback: true,
  taskQueue: true,

  hotModuleReplacement: false,
  isDebug: false,
  isDev: false,
  cssVarShim: false,
  constructableCSS: true,
  initializeNextTick: false,
  hydrateServerSide: false,
  hydrateClientSide: false,
  lifecycleDOMEvents: false,
  lazyLoad: false,
  profile: false,
  slotRelocation: true
};

export const NAMESPACE = 'app';