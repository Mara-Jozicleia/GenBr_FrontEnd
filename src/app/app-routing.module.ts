import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [

  {path:'', redirectTo: 'entrar', pathMatch: 'full'},
  {path:'entrar', component: EntrarComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'rodape', component: RodapeComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'tema', component: TemaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
