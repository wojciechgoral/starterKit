sap.ui.define([], function (){
        "use-strict"
        return {
            formatName: function (sFirstName, sLastName) {
                let lastName = sLastName
                if(sLastName.includes("-")){
                    const breakPoint = sLastName.indexOf("-")
                    lastName = sLastName.slice(0, breakPoint)
                }
                return sFirstName[0] + ". " + lastName
            }
        }
})