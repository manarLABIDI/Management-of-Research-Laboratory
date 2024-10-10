
import { Evenement } from "./Event"
import { Enseignant } from "./enseignant"
import { Article } from "./pub"
import { Tool } from "./tool"


export interface Member
{
  id:number,
  cin:string,
  nom:string,
  prenom:string,
  cv:string,
  type: String
  email:string,
  password:string,
  dateNaissance:Date,
  role:string,
  sujet?: string,
  diplome?: string,
  dateInscription?: Date,
  encadrant?: Enseignant,
  grade?: string,
  etablissement?: string
  pubs : Article[],
  outils : Tool[],
  events : Evenement[]


}
