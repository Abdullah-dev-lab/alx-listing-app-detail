
export interface PropertyProps {
    name: string;
    address: {
        state: string;
        city: string;
        country: string;
        description: string;
    }
    rating: number;
    category: string[];
    price: number;
    offers: {
        bed: String;
        shower: String;
        occupants: String;
    }
    image: string;
    discount: string;
}

export interface Review {
    id: string;
    name: string;
    year: number;
    avatarr: string;
    rating: number;
    comment: string;
    date: string;
}

export interface Host {
    name: string;
    avatar: string;
    joinedDate: string;
    responseRate: number;
    responseTime: string;
}

export interface Amenity {
    name: string;
    available: boolean;
}



export interface PropertyDetailProps {
    property: PropertyProps;
    description: string;
    amenities: Amenity[];
    reviews: Review[];
    host: {
        name: string;
        avatar: string;
        joinedDate: string;
        responseRate: number;
        responseTime: string;
    };
}