
export interface navesInterface { 

    name: string,
    model: string,
    
}

export interface naves extends navesInterface { 
    results: [navesInterface];
}