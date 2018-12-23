var poolData = {
    UserPoolId : 'us-east-1_Bdjyk2zjw',
    ClientId : '4k9knsf4cdaqgkq306mkm1nfj7'
};
var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
var attributeList = [];


document.getElementById('signup-form').onsubmit = function (event) {
    event.preventDefault();
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#pwd').value;
    var name = document.querySelector('#name').value;


    var dataEmail = {
        Name : 'email',
        Value : email
    };
    var dataGender = {
        Name:'gender',
        value:gender
    };
    var dataPersonalName = {
        Name : 'name',
        Value : name
    };

    var username  = email;



    var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
    var attributePersonalName = new AmazonCognitoIdentity.CognitoUserAttribute(dataPersonalName);
    var attributeGender = new AmazonCognitoIdentity.CognitoUserAttribute(dataGender);



    attributeList.push(attributeEmail);
    attributeList.push(attributePersonalName);
    attributeList.push(attributeGender);


    userPool.signUp(username, password, attributeList, null, function(err, result){
    if (err) {
        console.error(err);
        alert(err.message);
        return;
    }
    let cognitoUser = result.user;
    console.log(cognitoUser);
    alert('User Created, please login now');
    window.location.href = '/'
});

};

