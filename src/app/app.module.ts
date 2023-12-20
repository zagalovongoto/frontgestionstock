import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { PageArticleComponent } from './pages/article/page-article/page-article.component';
import { DetailArticleComponent } from './components/detail-article/detail-article.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { BoutonActionComponent } from './components/bouton-action/bouton-action.component';
import { NouvelArticleComponent } from './pages/article/nouvel-article/nouvel-article.component';
import { PageMvtstkComponent } from './pages/mvtstk/page-mvtstk/page-mvtstk.component';
import { DetailMvtStkArticleComponent } from './components/detail-mvt-stk-article/detail-mvt-stk-article.component';
import { DetailMvtStkComponent } from './components/detail-mvt-stk/detail-mvt-stk.component';
import { DetailCltFrsComponent } from './components/detail-clt-frs/detail-clt-frs.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { PageFournisseurComponent } from './pages/fournisseur/page-fournisseur/page-fournisseur.component';
import { NouveauCltFrsComponent } from './components/nouveau-clt-frs/nouveau-clt-frs.component';
import { DetailCmdCltFrsComponent } from './components/detail-cmd-clt-frs/detail-cmd-clt-frs.component';
import { DetailCmdComponent } from './components/detail-cmd/detail-cmd.component';
import { PageCmdCltFrsComponent } from './pages/commande/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { NouvelleCmdCltFrsComponent } from './components/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component';
import { PageCategorieComponent } from './pages/categorie/page-categorie/page-categorie.component';
import { NouvelleCategorieComponent } from './pages/categorie/nouvelle-categorie/nouvelle-categorie.component';
import { PageUtilisateurComponent } from './pages/utilisateur/page-utilisateur/page-utilisateur.component';
import { DetailUtilisateurComponent } from './components/detail-utilisateur/detail-utilisateur.component';
import { NouvelUtilisateurComponent } from './pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { ChangerMotDePasseComponent } from './pages/profil/changer-mot-de-passe/changer-mot-de-passe.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    PageDashboardComponent,
    PageStatistiquesComponent,
    MenuComponent,
    HeaderComponent,
    PageArticleComponent,
    DetailArticleComponent,
    PaginationComponent,
    BoutonActionComponent,
    NouvelArticleComponent,
    PageMvtstkComponent,
    DetailMvtStkArticleComponent,
    DetailMvtStkComponent,
    DetailCltFrsComponent,
    PageClientComponent,
    PageFournisseurComponent,
    NouveauCltFrsComponent,
    DetailCmdCltFrsComponent,
    DetailCmdComponent,
    PageCmdCltFrsComponent,
    NouvelleCmdCltFrsComponent,
    PageCategorieComponent,
    NouvelleCategorieComponent,
    PageUtilisateurComponent,
    DetailUtilisateurComponent,
    NouvelUtilisateurComponent,
    PageProfilComponent,
    ChangerMotDePasseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
