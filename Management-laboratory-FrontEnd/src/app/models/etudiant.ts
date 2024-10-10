import { Enseignant } from "./enseignant";
import { Member } from "./Member";

export interface Etudiant extends Member
{
  sujet: string,
  diplome: string,
  dateInscription: Date,
  encadrant: Enseignant
}
