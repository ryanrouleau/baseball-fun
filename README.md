# Adjusted Slugging Percentage (ASLG)

## Website: [ryanrouleau.com/baseball](https://ryanrouleau.com/baseball)

## Repo Contents
* [Jupyter notebook to calculate and export ASLG for a specific season](https://github.com/ryanrouleau/baseball-fun/blob/master/ASLG.ipynb)
* Exported json data for each season (2016, 2017, 2018) are called 20xx\_ASLG\_results.json at the root of the repo
* [The React app that consumes the json data](https://github.com/ryanrouleau/baseball-fun/tree/master/frontend)
* [The video demonstration](https://youtu.be/PwtIVWbV808)

## Explanation

Slugging Percentage, or SLG, is a relatively simple calculation designed to measure the batting productivity of a hitter.  The calculation is as follows: (1 * Single + 2 * Double + 3 * Triple + 4 * Home Run) / # total at bats.  What makes SLG special is that it takes into account the quality of hits and not just if the batter made a hit or not such as in Batting Average (BA).

The problem with this statistic is that it does not account for differences in ball parks.  For example, a batter who plays most frequently at Coors Stadium (a mile high) will have a higher SLG than a similarly skilled player the plays more often at Marlin's stadium (sea level) (it is significantly easier to make higher scoring hits such as home runs at Coors).   

As a result of this, if players are compared to each other across an entire season to determine who are good hitters, it will be unfairly skewed to those who play most often at stadiums that are good for hitting.

Luckily, people have also seen this issue and have created Park Factors for different stadiums for different stats - in this case, SLG.  The resource we use in this project is: [https://swishanalytics.com/mlb/mlb-park-factors](https://swishanalytics.com/mlb/mlb-park-factors).

Looking around online, it doesn't appear that anyone has actually applied park factors on a large number of batters across entire seasons - this is what this project accomplishes.

Using data from Statcast, we can calculate individual player's SLG scores as well as adjust this with individual Park Factors for SLG.  We do this by breaking down the data by each game, calculating the total bases hit by each player and their number of at bats for that game and multiply their total bases for that game by the respective Park Factor.  We then combine these scores across all games for each season (2016, 2017, 2018) to get a final Adjusted SLG (ASLG) for each player for each season.

This calculation for each player is as follows: 

(Park Factor for Game n * Total bases for game n + ...) / (total at bats for season)

It's important to note that we also take into account **left and right handed hitters** and adjust the park factor applied as needed since for many stadiums, the park factor for SLG heavily depends on which way the ball flies. 

The development of ASLG will be very useful for anyone trying to directly compare player's hitting abilities across a season in a fair fashion.  

