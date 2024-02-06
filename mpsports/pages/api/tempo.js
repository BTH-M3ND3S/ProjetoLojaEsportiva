function tempo (request, reponse){
    const dynamicdate = new Date();

    reponse.json({
        date:dynamicdate.toGMTString()
    });

}

export default tempo;