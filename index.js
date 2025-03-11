// Code your solution here
function findMatching(array,name){
    return array.filter(function(driver){
        return driver.toLowerCase() === name.toLowerCase()
    })
}


function fuzzyMatch(array,firstLetter){
return array.filter(function(driver){
    return driver.toLowerCase().startsWith(firstLetter.toLowerCase())
})
}

function matchName(array,hometown){
    return array.filter(function (driver){
        return driver.name === hometown
    })
}