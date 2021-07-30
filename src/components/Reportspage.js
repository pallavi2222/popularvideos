import React from 'react'
import PopularVideos from './PopularVideos'
import Videopage from './Videopage'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function Reportspage() {
    return (
        <div>
                <Router>
                <Switch>
                    <Route path="/" exact component={PopularVideos}/>
                    <Route path="/Videopage" exact component={Videopage} />
                </Switch>
                </Router>    
        </div>
    )
}

export default Reportspage
