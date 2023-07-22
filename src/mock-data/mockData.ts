import FooBarstein from "../../public/media/mock-users/foo-barstein/foo-barstein.png";
import Seylou from "../../public/media/mock-users/foo-barstein/dc-family-trip/seylou-bakery.png"
import Smithsonian from "../../public/media/mock-users/foo-barstein/dc-family-trip/smithsonian.png"
import WhiteHouse from "../../public/media/mock-users/foo-barstein/dc-family-trip/white-house.png"
import Ethiopian from "../../public/media/mock-users/foo-barstein/dc-family-trip/ethiopian-restaurant.png"
import Lincoln from "../../public/media/mock-users/foo-barstein/dc-family-trip/lincoln-memorial.png"
import Espita from "../../public/media/mock-users/foo-barstein/dc-family-trip/espita-mezcaleria.png"
import LeslieRez from "../../public/media/mock-users/leslie-rez/leslie-rez.png"
import FlowingMilk from "../../public/media/mock-users/leslie-rez/vermeer/flowing-milk.png"
import MichaelBrown from "../../public/media/mock-users/michael-brown/michael-brown.png"

const users =
    [{ // user - 1
        "userID": "1",
        "userName": "foo.barstein",
        "userPic": FooBarstein,
        "maps": [
            {
                "mapID": "1",
                "mapType": "Geo",
                "mapTitle": "Washington D.C. Family Trip",
                // need marker array ?
                "mapData": {
                    "centerX": 51.505,
                    "centerY": -0.09,
                    "markerX": 51.505,
                    "markerY": -0.09
                },
                "posts": [
                    {
                        "postID": "1",
                        "postTitle": "Found a hidden gem!",
                        "posted": 1,
                        "postMedia": [Seylou, Seylou],
                        "location": "Seylou Bakery",
                        "caption": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co!",
                        "comments": [
                            {
                                "commentText": "Great trip!",
                            }
                        ]
                    },
                    {
                        "postID": "2",
                        "postTitle": "My kids loved this place",
                        "posted": 1,
                        "postMedia": [Smithsonian, Smithsonian],
                        "location": "Smithsonian Museum of National History",
                        "caption": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co!",
                        "comments": [
                            {
                                "commentText": "Great trip!",
                            }
                        ]
                    },
                    {
                        "postID": "3",
                        "postTitle": "Our White House tour experience",
                        "posted": 1,
                        "postMedia": [WhiteHouse, WhiteHouse],
                        "location": "The White House",
                        "caption": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co!",
                        "comments": [
                            {
                                "commentText": "Great trip!",
                            }
                        ]
                    },
                    {
                        "postID": "4",
                        "postTitle": "Great Ethiopian food here!",
                        "posted": 1,
                        "postMedia": [Ethiopian, Ethiopian],
                        "location": "Ethiopian family restaurant",
                        "caption": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co!",
                        "comments": [
                            {
                                "commentText": "Great trip!",
                            }
                        ]
                    },
                    {
                        "postID": "5",
                        "postTitle": "Fun memories in Lincoln Memorial",
                        "posted": 1,
                        "postMedia": [Lincoln, Lincoln],
                        "location": "Lincoln Memorial",
                        "caption": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co!",
                        "comments": [
                            {
                                "commentText": "Great trip!",
                            }
                        ]
                    }, {
                        "postID": "6",
                        "postTitle": "Awesome food and cocktails",
                        "posted": 1,
                        "postMedia": [Espita, Espita],
                        "location": "Espita Mezcaleria",
                        "caption": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co!",
                        "comments": [
                            {
                                "commentText": "Great trip!",
                            }
                        ]
                    },

                ]
            },
            {
                "mapID": "2",
                "mapType": "Geo",
                "mapTitle": "School Walking Routes",
                "mapData": {
                    "centerX": 51.505,
                    "centerY": -0.09,
                    "markerX": 51.505,
                    "markerY": -0.09
                },
                "posts": [
                    {
                        "postID": "1",
                        "postTitle": "Route A!",
                        "posted": 1,
                        "postMedia": [],
                        "location": "Croton Elementary School",
                        "caption": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co!",
                        "comments": [
                            {
                                "commentText": "Great trip!",
                            }
                        ]
                    }
                ]
            }
        ],
        // "saved": [
        //     {
        //         "saveMapId": "" // and so on..
        //     }
        // ]
    },
    { // user - 2
        "userID": "2",
        "userName": "leslie.rez",
        "userPic": LeslieRez,
        "maps": [
            {
                "mapID": "1",
                "mapType": "Image",
                "mapTitle": "Anatomy of Vermeer's Milkmaid",
                "mapData": {
                    "centerX": 51.505,
                    "centerY": -0.09,
                    "markerX": 51.505,
                    "markerY": -0.09
                },
                "posts": [
                    {
                        "postID": "1",
                        "postTitle": "Flowing milk",
                        "posted": 1,
                        "postMedia": [FlowingMilk, FlowingMilk],
                        "caption": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co!",
                        "comments": [
                            {
                                "commentText": "Great trip!",
                            }
                        ]
                    },
                ]
            }
        ]

    },
    { // user - 3
        "userID": "3",
        "userName": "michael.brown",
        "userPic": MichaelBrown,
        "maps": [
            {
                "mapID": "1",
                "mapType": "Geo",
                "mapTitle": "Day Trip to Australia",
                "mapData": {
                    "centerX": 51.505,
                    "centerY": -0.09,
                    "markerX": 51.505,
                    "markerY": -0.09
                },
                "posts": [
                    {
                        "postID": "1",
                        "postTitle": "Cool architecture",
                        "posted": 1,
                        "postMedia": [],
                        "location": "Pitt Street Mall, Sydney New South Wales, Australia",
                        "caption": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co!",
                        "comments": [
                            {
                                "commentText": "Great trip!",
                            }
                        ]
                    },
                ]
            }
        ]
    }]


export default users;