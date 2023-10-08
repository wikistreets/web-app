export interface Geometry {
    type: string;
    coordinates: [number, number];
}

export interface Photo {
    _id: string;
    filename: string;
    path: string;
    mimetype: string;
    encoding: string;
    width: number;
    height: number;
    size: number;
}

export interface Properties {
    bbox: number[];
    center: any;
    title: string;
    body: string;
    address: string;
    zoom: number;
    photos: Photo[];
    comments: any[];
}


export interface Feature {
    geometry: Geometry;
    properties: Properties;
    type: string;
    subscribers: string[];
    _id: string;
    user: string;
    updatedAt: string;
    createdAt: string;
}


export interface FeatureCollection {
    _id: string;
    publicId: string;
    __v: number;
    contributors: string[];
    createdAt: string;
    features: Feature[];
    type: "Point" | "MultiPoint" | "LineString" | "MultiLineString" | "Polygon" | "MultiPolygon" | "GeometryCollection" | "Feature" | "FeatureCollection";
    subscribers: string[],
    updatedAt: string,
    title: string,
    limitContributors: boolean,
    // bbox: number[],
    forks: string[],
    mapType: "geographic" | "image",
    underlyingImages: any[]
}
