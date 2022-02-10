
export interface navesInterface { 

   
        name: string,
        model: string,
        MGLT: string,
        cargo_capacity: string,
        consumables: string,
        cost_in_credits: string,
        created: string,
        crew: string,
        edited: string,
        hyperdrive_rating: string,
        length: string,
        manufacturer: string,
        max_atmosphering_speed: string,
        passengers: string,
        starship_class: string,
        url: string
    
  
}

export interface Naves extends navesInterface { 
    results: [navesInterface];
}