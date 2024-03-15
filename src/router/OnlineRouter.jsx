import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../screens/ErrorScreens/ErrorPage";
import Home from "../screens/OnlineScreens/Home";
import Search from "../screens/OnlineScreens/Search";
import Library from "../screens/OnlineScreens/Library";
import Playlist from "../screens/OnlineScreens/Playlist";
import Wishlist from "../screens/OnlineScreens/Wishlist";
import Details from "../screens/OnlineScreens/Details";
import DetailArtist from "../components/DetailArtist";

const OnlineRouter = createBrowserRouter([
    {
        element:(
         <>
            <App />
         </>
        ),
        errorElement: <ErrorPage />,
        // on déclare les route avvec leurs vues
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/search",
                element: <Search />,
            },
            {
                path: "/library",
                element: <Library />,
            },
            {
                path: "/add-playlist",
                element: <Playlist />,
            },
            {
                path: "/wishlist",
                element: <Wishlist />,
            },
            {
                path: "/details/:id",
                element: <Details />,
            },
            {
                path: "/artist-detail/:id",
                element: <DetailArtist />
            }
        ]
    }
])

export default OnlineRouter