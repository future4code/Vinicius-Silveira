import { POST_TYPES } from "../../business/entities/post";

export const convertPostTypeToString = (
    postType:POST_TYPES
): string =>{
    return postType === POST_TYPES.EVENT? "event":"normal"
}

export const convertStringToPostType = (
    postType:string
): POST_TYPES =>{
    if(postType === "event"){
        return POST_TYPES.EVENT
    }else if(postType === "normal"){
        return POST_TYPES.NORMAL
    }
    throw new Error("Invalid Post Type")
}

export const getDateNow = ():Date =>{
    const now = new Date
    const day = String(now.getDate())
    const month = String(now.getMonth()+1).padStart(2,'0')
    const year = String(now.getFullYear())
    const today: Date = new Date(`${year}-${month}-${day}`)
    
    return today
}
