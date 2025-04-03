import { playersGetByGroupe } from "./playersGetByGroupe";



export async function playersGetByGroupeAndTeam (groupe: string, team: string){



    try{

            const storage = await playersGetByGroupe(groupe);

            const players = storage.filter(player => player.time === team);

        
            return players;




    } catch(error){

            throw error;



    }






}