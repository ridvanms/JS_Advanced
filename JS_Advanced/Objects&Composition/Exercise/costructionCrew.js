function constructionCrew(obj) {
    // const obj = JSON.parse(JSON.stringify(obj))
    if (obj.dizziness) {
        return {
            ...obj,
            dizziness: false,
            levelOfHydrated: 0.1 * obj.weight * obj.experience
        }
    }
    return obj
    // console.log(newObj);
}
console.log(constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}));
// {
//     weight: 80,
//         experience: 1,
//             levelOfHydrated: 8,
//                 dizziness: false
// }
constructionCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}
);
// {
//     weight: 120,
//         experience: 20,
//             levelOfHydrated: 440,
//                 dizziness: false
// }