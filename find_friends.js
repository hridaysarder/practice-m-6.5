function findLongestName(friends) {
    let longestName = "";
    for (let i = 0; i < Math.min(5, friends.length); i++) {
        if (friends[i].length > longestName.length) {
            longestName = friends[i];
        }
    }
    return longestName;
}

const friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
console.log(findLongestName(friends)); 
