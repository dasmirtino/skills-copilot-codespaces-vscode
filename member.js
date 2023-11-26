function skillsMember(memberName, skillsArray) {
    console.log(`${memberName}'s skills:`);
    for (let i = 0; i < skillsArray.length; i++) {
        console.log(`- ${skillsArray[i]}`);
    }
}