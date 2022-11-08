'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">crm documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-35638f21734190cc58f31e324f65e27550d2c583527941ab497260132c08332e48e9294beb110dc3f93fec9cf3b307d212741a81207d5bff67faeee2882c0f3d"' : 'data-target="#xs-components-links-module-AppModule-35638f21734190cc58f31e324f65e27550d2c583527941ab497260132c08332e48e9294beb110dc3f93fec9cf3b307d212741a81207d5bff67faeee2882c0f3d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-35638f21734190cc58f31e324f65e27550d2c583527941ab497260132c08332e48e9294beb110dc3f93fec9cf3b307d212741a81207d5bff67faeee2882c0f3d"' :
                                            'id="xs-components-links-module-AppModule-35638f21734190cc58f31e324f65e27550d2c583527941ab497260132c08332e48e9294beb110dc3f93fec9cf3b307d212741a81207d5bff67faeee2882c0f3d"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterCrmComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterCrmComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TestComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TestComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClientsModule.html" data-type="entity-link" >ClientsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClientsModule-ad1a14bab202cbc9c842aa725ba51d36ec89497c1e697500cae37c1393434b61fa5bc90d7e2f3acf4a29cdfdd5656d08655a6decb4e18cf05425ba8a1e25bf9c"' : 'data-target="#xs-components-links-module-ClientsModule-ad1a14bab202cbc9c842aa725ba51d36ec89497c1e697500cae37c1393434b61fa5bc90d7e2f3acf4a29cdfdd5656d08655a6decb4e18cf05425ba8a1e25bf9c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClientsModule-ad1a14bab202cbc9c842aa725ba51d36ec89497c1e697500cae37c1393434b61fa5bc90d7e2f3acf4a29cdfdd5656d08655a6decb4e18cf05425ba8a1e25bf9c"' :
                                            'id="xs-components-links-module-ClientsModule-ad1a14bab202cbc9c842aa725ba51d36ec89497c1e697500cae37c1393434b61fa5bc90d7e2f3acf4a29cdfdd5656d08655a6decb4e18cf05425ba8a1e25bf9c"' }>
                                            <li class="link">
                                                <a href="components/PageAddClientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageAddClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageEditClientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageEditClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageListClientsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageListClientsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientsRoutingModule.html" data-type="entity-link" >ClientsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-09b3992bffbb1604fc99dcf773ab34265687f89a1bcfe5719281fdf87c9dd354dd93e702721eeda86e05c8ff079839fe6295b87e3e35ed3e761b0cf63e0699ba"' : 'data-target="#xs-components-links-module-CoreModule-09b3992bffbb1604fc99dcf773ab34265687f89a1bcfe5719281fdf87c9dd354dd93e702721eeda86e05c8ff079839fe6295b87e3e35ed3e761b0cf63e0699ba"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-09b3992bffbb1604fc99dcf773ab34265687f89a1bcfe5719281fdf87c9dd354dd93e702721eeda86e05c8ff079839fe6295b87e3e35ed3e761b0cf63e0699ba"' :
                                            'id="xs-components-links-module-CoreModule-09b3992bffbb1604fc99dcf773ab34265687f89a1bcfe5719281fdf87c9dd354dd93e702721eeda86e05c8ff079839fe6295b87e3e35ed3e761b0cf63e0699ba"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IconsModule.html" data-type="entity-link" >IconsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IconsModule-0a2a881382a068d891356c54b9bf9b75b009e6b0ebc8341929797a357e3cef1caf78f3a85e513c7f71f9740affbe384c1a3b3f35de13b14b3f69939a28b31c0f"' : 'data-target="#xs-components-links-module-IconsModule-0a2a881382a068d891356c54b9bf9b75b009e6b0ebc8341929797a357e3cef1caf78f3a85e513c7f71f9740affbe384c1a3b3f35de13b14b3f69939a28b31c0f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IconsModule-0a2a881382a068d891356c54b9bf9b75b009e6b0ebc8341929797a357e3cef1caf78f3a85e513c7f71f9740affbe384c1a3b3f35de13b14b3f69939a28b31c0f"' :
                                            'id="xs-components-links-module-IconsModule-0a2a881382a068d891356c54b9bf9b75b009e6b0ebc8341929797a357e3cef1caf78f3a85e513c7f71f9740affbe384c1a3b3f35de13b14b3f69939a28b31c0f"' }>
                                            <li class="link">
                                                <a href="components/IconCloseComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconCloseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconNavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconNavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-4fedb303ff203af5c6194ffc4d36a15f96e52305dfe203b5dcbcd55f8c75cf80c024e8e7fa777b728e6eed10e3faef0c9020b4ba7b9194e8e597d3a18554e1f4"' : 'data-target="#xs-components-links-module-LoginModule-4fedb303ff203af5c6194ffc4d36a15f96e52305dfe203b5dcbcd55f8c75cf80c024e8e7fa777b728e6eed10e3faef0c9020b4ba7b9194e8e597d3a18554e1f4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-4fedb303ff203af5c6194ffc4d36a15f96e52305dfe203b5dcbcd55f8c75cf80c024e8e7fa777b728e6eed10e3faef0c9020b4ba7b9194e8e597d3a18554e1f4"' :
                                            'id="xs-components-links-module-LoginModule-4fedb303ff203af5c6194ffc4d36a15f96e52305dfe203b5dcbcd55f8c75cf80c024e8e7fa777b728e6eed10e3faef0c9020b4ba7b9194e8e597d3a18554e1f4"' }>
                                            <li class="link">
                                                <a href="components/PageForgotPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageForgotPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageResetPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageResetPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageSignInComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageSignInComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageSignUpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageSignUpComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginRoutingModule.html" data-type="entity-link" >LoginRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersModule.html" data-type="entity-link" >OrdersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrdersModule-ea8855393469395a060c39a494f4c337aa2cc5111c17c9b780d233108cb4d095251a9d7df9913490dc609091555ec1404df2feb34b79c23ef62e78e4335f632d"' : 'data-target="#xs-components-links-module-OrdersModule-ea8855393469395a060c39a494f4c337aa2cc5111c17c9b780d233108cb4d095251a9d7df9913490dc609091555ec1404df2feb34b79c23ef62e78e4335f632d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrdersModule-ea8855393469395a060c39a494f4c337aa2cc5111c17c9b780d233108cb4d095251a9d7df9913490dc609091555ec1404df2feb34b79c23ef62e78e4335f632d"' :
                                            'id="xs-components-links-module-OrdersModule-ea8855393469395a060c39a494f4c337aa2cc5111c17c9b780d233108cb4d095251a9d7df9913490dc609091555ec1404df2feb34b79c23ef62e78e4335f632d"' }>
                                            <li class="link">
                                                <a href="components/PageAddOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageAddOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageEditOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageEditOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageListOrdersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageListOrdersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersRoutingModule.html" data-type="entity-link" >OrdersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundModule.html" data-type="entity-link" >PageNotFoundModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PageNotFoundModule-70eb4464866934c04751721ca5e2ebd5da7f41455a69f8ef9d0107aa2affb6e4a49ca93b52a787bc825106b3cf6a8358f1005fafa65e1914e1d7d7cc5c66094b"' : 'data-target="#xs-components-links-module-PageNotFoundModule-70eb4464866934c04751721ca5e2ebd5da7f41455a69f8ef9d0107aa2affb6e4a49ca93b52a787bc825106b3cf6a8358f1005fafa65e1914e1d7d7cc5c66094b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageNotFoundModule-70eb4464866934c04751721ca5e2ebd5da7f41455a69f8ef9d0107aa2affb6e4a49ca93b52a787bc825106b3cf6a8358f1005fafa65e1914e1d7d7cc5c66094b"' :
                                            'id="xs-components-links-module-PageNotFoundModule-70eb4464866934c04751721ca5e2ebd5da7f41455a69f8ef9d0107aa2affb6e4a49ca93b52a787bc825106b3cf6a8358f1005fafa65e1914e1d7d7cc5c66094b"' }>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundRoutingModule.html" data-type="entity-link" >PageNotFoundRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-df3f0891a4c5d7c06a9698d38bced649451e57f48909ac5544a573be7e1b76470692ca85b331d23f328f3f7c7c5643c8bde749bb49d046cfa266b3b5ba78e3ab"' : 'data-target="#xs-components-links-module-SharedModule-df3f0891a4c5d7c06a9698d38bced649451e57f48909ac5544a573be7e1b76470692ca85b331d23f328f3f7c7c5643c8bde749bb49d046cfa266b3b5ba78e3ab"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-df3f0891a4c5d7c06a9698d38bced649451e57f48909ac5544a573be7e1b76470692ca85b331d23f328f3f7c7c5643c8bde749bb49d046cfa266b3b5ba78e3ab"' :
                                            'id="xs-components-links-module-SharedModule-df3f0891a4c5d7c06a9698d38bced649451e57f48909ac5544a573be7e1b76470692ca85b331d23f328f3f7c7c5643c8bde749bb49d046cfa266b3b5ba78e3ab"' }>
                                            <li class="link">
                                                <a href="components/TableLightComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableLightComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-df3f0891a4c5d7c06a9698d38bced649451e57f48909ac5544a573be7e1b76470692ca85b331d23f328f3f7c7c5643c8bde749bb49d046cfa266b3b5ba78e3ab"' : 'data-target="#xs-pipes-links-module-SharedModule-df3f0891a4c5d7c06a9698d38bced649451e57f48909ac5544a573be7e1b76470692ca85b331d23f328f3f7c7c5643c8bde749bb49d046cfa266b3b5ba78e3ab"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-df3f0891a4c5d7c06a9698d38bced649451e57f48909ac5544a573be7e1b76470692ca85b331d23f328f3f7c7c5643c8bde749bb49d046cfa266b3b5ba78e3ab"' :
                                            'id="xs-pipes-links-module-SharedModule-df3f0891a4c5d7c06a9698d38bced649451e57f48909ac5544a573be7e1b76470692ca85b331d23f328f3f7c7c5643c8bde749bb49d046cfa266b3b5ba78e3ab"' }>
                                            <li class="link">
                                                <a href="pipes/TotalPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TotalPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TemplatesModule.html" data-type="entity-link" >TemplatesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TemplatesModule-0568e9be7f70e757663c22742f28b83cd20c67a0dcb907d33c317e349955abd2085afd2df04353d828c7d024a46bd41f5ef848374d09ed33bd0b8764e0d290e7"' : 'data-target="#xs-components-links-module-TemplatesModule-0568e9be7f70e757663c22742f28b83cd20c67a0dcb907d33c317e349955abd2085afd2df04353d828c7d024a46bd41f5ef848374d09ed33bd0b8764e0d290e7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TemplatesModule-0568e9be7f70e757663c22742f28b83cd20c67a0dcb907d33c317e349955abd2085afd2df04353d828c7d024a46bd41f5ef848374d09ed33bd0b8764e0d290e7"' :
                                            'id="xs-components-links-module-TemplatesModule-0568e9be7f70e757663c22742f28b83cd20c67a0dcb907d33c317e349955abd2085afd2df04353d828c7d024a46bd41f5ef848374d09ed33bd0b8764e0d290e7"' }>
                                            <li class="link">
                                                <a href="components/TemplateContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemplateContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TemplateFullWidthComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemplateFullWidthComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link" >UiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiModule-94705d956c0378aa0cd55011ac10d36e6ed2f04962d8aba97b8fafee5daf15c2762545b2708aedad168c297bff61f2489394bccf570ac8f83b994df6b5d804e7"' : 'data-target="#xs-components-links-module-UiModule-94705d956c0378aa0cd55011ac10d36e6ed2f04962d8aba97b8fafee5daf15c2762545b2708aedad168c297bff61f2489394bccf570ac8f83b994df6b5d804e7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiModule-94705d956c0378aa0cd55011ac10d36e6ed2f04962d8aba97b8fafee5daf15c2762545b2708aedad168c297bff61f2489394bccf570ac8f83b994df6b5d804e7"' :
                                            'id="xs-components-links-module-UiModule-94705d956c0378aa0cd55011ac10d36e6ed2f04962d8aba97b8fafee5daf15c2762545b2708aedad168c297bff61f2489394bccf570ac8f83b994df6b5d804e7"' }>
                                            <li class="link">
                                                <a href="components/UiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/OrdersService.html" data-type="entity-link" >OrdersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VersionService.html" data-type="entity-link" >VersionService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/OrderI.html" data-type="entity-link" >OrderI</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});