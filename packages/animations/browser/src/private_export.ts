/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export {Animation as ɵAnimation} from './dsl/animation';
export {AnimationStyleNormalizer as ɵAnimationStyleNormalizer, NoopAnimationStyleNormalizer as ɵNoopAnimationStyleNormalizer} from './dsl/style_normalization/animation_style_normalizer';
export {WebAnimationsStyleNormalizer as ɵWebAnimationsStyleNormalizer} from './dsl/style_normalization/web_animations_style_normalizer';
export {NoopAnimationDriver as ɵNoopAnimationDriver} from './render/animation_driver';
export {AnimationEngine as ɵAnimationEngine} from './render/animation_engine_next';
export {CssKeyframesDriver as ɵCssKeyframesDriver} from './render/css_keyframes/css_keyframes_driver';
export {CssKeyframesPlayer as ɵCssKeyframesPlayer} from './render/css_keyframes/css_keyframes_player';
export {containsElement as ɵcontainsElement, invokeQuery as ɵinvokeQuery, validateStyleProperty as ɵvalidateStyleProperty} from './render/shared';
export {supportsWebAnimations as ɵsupportsWebAnimations, WebAnimationsDriver as ɵWebAnimationsDriver} from './render/web_animations/web_animations_driver';
export {WebAnimationsPlayer as ɵWebAnimationsPlayer} from './render/web_animations/web_animations_player';
export {allowPreviousPlayerStylesMerge as ɵallowPreviousPlayerStylesMerge} from './util';
