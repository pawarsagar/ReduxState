export default (state, action) => {

    switch (action.type) {
        case "ADD": {
            console.log(action)
            return {

                user: [
                    ...state.user,
                    {
                        Name: action.Name, Age: action.Age, Marks: action.Marks
                    }


                ]
            }
        }
        case "UPDATE": {

            var temp = state

            console.log(temp)
            temp.user[action.id].Name = action.Name
            temp.user[action.id].Age = action.Age
            temp.user[action.id].Marks = action.Marks
            console.log(temp)

            return {

                ...temp
            }
        }

        case "DELETE": {
            console.log("deleted Data of", action.id)
            var temp = state
            temp.user.splice(action.id, 1)
            console.log(temp)
            return {
                ...temp
            }
        }

        default: return state
    }



}