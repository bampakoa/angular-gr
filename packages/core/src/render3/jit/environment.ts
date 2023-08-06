/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {forwardRef, resolveForwardRef} from '../../di/forward_ref';
import {ɵɵinject, ɵɵinvalidFactoryDep} from '../../di/injector_compatibility';
import {ɵɵdefineInjectable, ɵɵdefineInjector} from '../../di/interface/defs';
import {registerNgModuleType} from '../../linker/ng_module_registration';
import * as iframe_attrs_validation from '../../sanitization/iframe_attrs_validation';
import * as sanitization from '../../sanitization/sanitization';
import * as r3 from '../index';


/**
 * A mapping of the @angular/core API surface used in generated expressions to the actual symbols.
 *
 * This should be kept up to date with the public exports of @angular/core.
 */
export const angularCoreEnv: {[name: string]: Function} =
    (() => ({
       'ɵɵattribute': r3.ɵɵattribute,
       'ɵɵattributeInterpolate1': r3.ɵɵattributeInterpolate1,
       'ɵɵattributeInterpolate2': r3.ɵɵattributeInterpolate2,
       'ɵɵattributeInterpolate3': r3.ɵɵattributeInterpolate3,
       'ɵɵattributeInterpolate4': r3.ɵɵattributeInterpolate4,
       'ɵɵattributeInterpolate5': r3.ɵɵattributeInterpolate5,
       'ɵɵattributeInterpolate6': r3.ɵɵattributeInterpolate6,
       'ɵɵattributeInterpolate7': r3.ɵɵattributeInterpolate7,
       'ɵɵattributeInterpolate8': r3.ɵɵattributeInterpolate8,
       'ɵɵattributeInterpolateV': r3.ɵɵattributeInterpolateV,
       'ɵɵdefineComponent': r3.ɵɵdefineComponent,
       'ɵɵdefineDirective': r3.ɵɵdefineDirective,
       'ɵɵdefineInjectable': ɵɵdefineInjectable,
       'ɵɵdefineInjector': ɵɵdefineInjector,
       'ɵɵdefineNgModule': r3.ɵɵdefineNgModule,
       'ɵɵdefinePipe': r3.ɵɵdefinePipe,
       'ɵɵdirectiveInject': r3.ɵɵdirectiveInject,
       'ɵɵgetInheritedFactory': r3.ɵɵgetInheritedFactory,
       'ɵɵinject': ɵɵinject,
       'ɵɵinjectAttribute': r3.ɵɵinjectAttribute,
       'ɵɵinvalidFactory': r3.ɵɵinvalidFactory,
       'ɵɵinvalidFactoryDep': ɵɵinvalidFactoryDep,
       'ɵɵtemplateRefExtractor': r3.ɵɵtemplateRefExtractor,
       'ɵɵresetView': r3.ɵɵresetView,
       'ɵɵHostDirectivesFeature': r3.ɵɵHostDirectivesFeature,
       'ɵɵNgOnChangesFeature': r3.ɵɵNgOnChangesFeature,
       'ɵɵProvidersFeature': r3.ɵɵProvidersFeature,
       'ɵɵCopyDefinitionFeature': r3.ɵɵCopyDefinitionFeature,
       'ɵɵInheritDefinitionFeature': r3.ɵɵInheritDefinitionFeature,
       'ɵɵInputTransformsFeature': r3.ɵɵInputTransformsFeature,
       'ɵɵStandaloneFeature': r3.ɵɵStandaloneFeature,
       'ɵɵnextContext': r3.ɵɵnextContext,
       'ɵɵnamespaceHTML': r3.ɵɵnamespaceHTML,
       'ɵɵnamespaceMathML': r3.ɵɵnamespaceMathML,
       'ɵɵnamespaceSVG': r3.ɵɵnamespaceSVG,
       'ɵɵenableBindings': r3.ɵɵenableBindings,
       'ɵɵdisableBindings': r3.ɵɵdisableBindings,
       'ɵɵelementStart': r3.ɵɵelementStart,
       'ɵɵelementEnd': r3.ɵɵelementEnd,
       'ɵɵelement': r3.ɵɵelement,
       'ɵɵelementContainerStart': r3.ɵɵelementContainerStart,
       'ɵɵelementContainerEnd': r3.ɵɵelementContainerEnd,
       'ɵɵelementContainer': r3.ɵɵelementContainer,
       'ɵɵpureFunction0': r3.ɵɵpureFunction0,
       'ɵɵpureFunction1': r3.ɵɵpureFunction1,
       'ɵɵpureFunction2': r3.ɵɵpureFunction2,
       'ɵɵpureFunction3': r3.ɵɵpureFunction3,
       'ɵɵpureFunction4': r3.ɵɵpureFunction4,
       'ɵɵpureFunction5': r3.ɵɵpureFunction5,
       'ɵɵpureFunction6': r3.ɵɵpureFunction6,
       'ɵɵpureFunction7': r3.ɵɵpureFunction7,
       'ɵɵpureFunction8': r3.ɵɵpureFunction8,
       'ɵɵpureFunctionV': r3.ɵɵpureFunctionV,
       'ɵɵgetCurrentView': r3.ɵɵgetCurrentView,
       'ɵɵrestoreView': r3.ɵɵrestoreView,
       'ɵɵlistener': r3.ɵɵlistener,
       'ɵɵprojection': r3.ɵɵprojection,
       'ɵɵsyntheticHostProperty': r3.ɵɵsyntheticHostProperty,
       'ɵɵsyntheticHostListener': r3.ɵɵsyntheticHostListener,
       'ɵɵpipeBind1': r3.ɵɵpipeBind1,
       'ɵɵpipeBind2': r3.ɵɵpipeBind2,
       'ɵɵpipeBind3': r3.ɵɵpipeBind3,
       'ɵɵpipeBind4': r3.ɵɵpipeBind4,
       'ɵɵpipeBindV': r3.ɵɵpipeBindV,
       'ɵɵprojectionDef': r3.ɵɵprojectionDef,
       'ɵɵhostProperty': r3.ɵɵhostProperty,
       'ɵɵproperty': r3.ɵɵproperty,
       'ɵɵpropertyInterpolate': r3.ɵɵpropertyInterpolate,
       'ɵɵpropertyInterpolate1': r3.ɵɵpropertyInterpolate1,
       'ɵɵpropertyInterpolate2': r3.ɵɵpropertyInterpolate2,
       'ɵɵpropertyInterpolate3': r3.ɵɵpropertyInterpolate3,
       'ɵɵpropertyInterpolate4': r3.ɵɵpropertyInterpolate4,
       'ɵɵpropertyInterpolate5': r3.ɵɵpropertyInterpolate5,
       'ɵɵpropertyInterpolate6': r3.ɵɵpropertyInterpolate6,
       'ɵɵpropertyInterpolate7': r3.ɵɵpropertyInterpolate7,
       'ɵɵpropertyInterpolate8': r3.ɵɵpropertyInterpolate8,
       'ɵɵpropertyInterpolateV': r3.ɵɵpropertyInterpolateV,
       'ɵɵpipe': r3.ɵɵpipe,
       'ɵɵqueryRefresh': r3.ɵɵqueryRefresh,
       'ɵɵviewQuery': r3.ɵɵviewQuery,
       'ɵɵloadQuery': r3.ɵɵloadQuery,
       'ɵɵcontentQuery': r3.ɵɵcontentQuery,
       'ɵɵreference': r3.ɵɵreference,
       'ɵɵclassMap': r3.ɵɵclassMap,
       'ɵɵclassMapInterpolate1': r3.ɵɵclassMapInterpolate1,
       'ɵɵclassMapInterpolate2': r3.ɵɵclassMapInterpolate2,
       'ɵɵclassMapInterpolate3': r3.ɵɵclassMapInterpolate3,
       'ɵɵclassMapInterpolate4': r3.ɵɵclassMapInterpolate4,
       'ɵɵclassMapInterpolate5': r3.ɵɵclassMapInterpolate5,
       'ɵɵclassMapInterpolate6': r3.ɵɵclassMapInterpolate6,
       'ɵɵclassMapInterpolate7': r3.ɵɵclassMapInterpolate7,
       'ɵɵclassMapInterpolate8': r3.ɵɵclassMapInterpolate8,
       'ɵɵclassMapInterpolateV': r3.ɵɵclassMapInterpolateV,
       'ɵɵstyleMap': r3.ɵɵstyleMap,
       'ɵɵstyleMapInterpolate1': r3.ɵɵstyleMapInterpolate1,
       'ɵɵstyleMapInterpolate2': r3.ɵɵstyleMapInterpolate2,
       'ɵɵstyleMapInterpolate3': r3.ɵɵstyleMapInterpolate3,
       'ɵɵstyleMapInterpolate4': r3.ɵɵstyleMapInterpolate4,
       'ɵɵstyleMapInterpolate5': r3.ɵɵstyleMapInterpolate5,
       'ɵɵstyleMapInterpolate6': r3.ɵɵstyleMapInterpolate6,
       'ɵɵstyleMapInterpolate7': r3.ɵɵstyleMapInterpolate7,
       'ɵɵstyleMapInterpolate8': r3.ɵɵstyleMapInterpolate8,
       'ɵɵstyleMapInterpolateV': r3.ɵɵstyleMapInterpolateV,
       'ɵɵstyleProp': r3.ɵɵstyleProp,
       'ɵɵstylePropInterpolate1': r3.ɵɵstylePropInterpolate1,
       'ɵɵstylePropInterpolate2': r3.ɵɵstylePropInterpolate2,
       'ɵɵstylePropInterpolate3': r3.ɵɵstylePropInterpolate3,
       'ɵɵstylePropInterpolate4': r3.ɵɵstylePropInterpolate4,
       'ɵɵstylePropInterpolate5': r3.ɵɵstylePropInterpolate5,
       'ɵɵstylePropInterpolate6': r3.ɵɵstylePropInterpolate6,
       'ɵɵstylePropInterpolate7': r3.ɵɵstylePropInterpolate7,
       'ɵɵstylePropInterpolate8': r3.ɵɵstylePropInterpolate8,
       'ɵɵstylePropInterpolateV': r3.ɵɵstylePropInterpolateV,
       'ɵɵclassProp': r3.ɵɵclassProp,
       'ɵɵadvance': r3.ɵɵadvance,
       'ɵɵtemplate': r3.ɵɵtemplate,
       'ɵɵtext': r3.ɵɵtext,
       'ɵɵtextInterpolate': r3.ɵɵtextInterpolate,
       'ɵɵtextInterpolate1': r3.ɵɵtextInterpolate1,
       'ɵɵtextInterpolate2': r3.ɵɵtextInterpolate2,
       'ɵɵtextInterpolate3': r3.ɵɵtextInterpolate3,
       'ɵɵtextInterpolate4': r3.ɵɵtextInterpolate4,
       'ɵɵtextInterpolate5': r3.ɵɵtextInterpolate5,
       'ɵɵtextInterpolate6': r3.ɵɵtextInterpolate6,
       'ɵɵtextInterpolate7': r3.ɵɵtextInterpolate7,
       'ɵɵtextInterpolate8': r3.ɵɵtextInterpolate8,
       'ɵɵtextInterpolateV': r3.ɵɵtextInterpolateV,
       'ɵɵi18n': r3.ɵɵi18n,
       'ɵɵi18nAttributes': r3.ɵɵi18nAttributes,
       'ɵɵi18nExp': r3.ɵɵi18nExp,
       'ɵɵi18nStart': r3.ɵɵi18nStart,
       'ɵɵi18nEnd': r3.ɵɵi18nEnd,
       'ɵɵi18nApply': r3.ɵɵi18nApply,
       'ɵɵi18nPostprocess': r3.ɵɵi18nPostprocess,
       'ɵɵresolveWindow': r3.ɵɵresolveWindow,
       'ɵɵresolveDocument': r3.ɵɵresolveDocument,
       'ɵɵresolveBody': r3.ɵɵresolveBody,
       'ɵɵsetComponentScope': r3.ɵɵsetComponentScope,
       'ɵɵsetNgModuleScope': r3.ɵɵsetNgModuleScope,
       'ɵɵregisterNgModuleType': registerNgModuleType,

       'ɵɵsanitizeHtml': sanitization.ɵɵsanitizeHtml,
       'ɵɵsanitizeStyle': sanitization.ɵɵsanitizeStyle,
       'ɵɵsanitizeResourceUrl': sanitization.ɵɵsanitizeResourceUrl,
       'ɵɵsanitizeScript': sanitization.ɵɵsanitizeScript,
       'ɵɵsanitizeUrl': sanitization.ɵɵsanitizeUrl,
       'ɵɵsanitizeUrlOrResourceUrl': sanitization.ɵɵsanitizeUrlOrResourceUrl,
       'ɵɵtrustConstantHtml': sanitization.ɵɵtrustConstantHtml,
       'ɵɵtrustConstantResourceUrl': sanitization.ɵɵtrustConstantResourceUrl,
       'ɵɵvalidateIframeAttribute': iframe_attrs_validation.ɵɵvalidateIframeAttribute,

       'forwardRef': forwardRef,
       'resolveForwardRef': resolveForwardRef,
     }))();
