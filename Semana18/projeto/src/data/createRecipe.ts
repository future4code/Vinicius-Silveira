import { connection } from "../dbConnection/dbConnection"
import { recipes } from "../types/types"

export const createRecipe = async (recipe:recipes):Promise<void> =>{
    await connection
        .insert({
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            createdAt: recipe.createdAt,
            user_id: recipe.user_id
        })
        .into("cookenu_Recipes")
}