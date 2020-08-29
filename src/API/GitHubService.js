import axios from 'axios'

class GitHubService{
    //Yes the person wanted to watch/Read it
    yesWasClicked(id){
        return axios({
                    method: 'post',
                    url: 'https://api.lib.byu.edu/leaflet/users/dylan/ratings',
                    data: {
                        "itemId": id,
                        "rating": true
                    }
                    });
    }

    //No they didn't want it
    noWasClicked(id){
        return axios({
            method: 'post',
            url: 'https://api.lib.byu.edu/leaflet/users/dylan/ratings',
            data: {
                "itemId": id,
                "rating": false
            }
            });
    }


    //Organization Calls
    getNewItemToRate(){
        return axios.get(`https://api.lib.byu.edu/leaflet/item`);
    }

}

export default new GitHubService()