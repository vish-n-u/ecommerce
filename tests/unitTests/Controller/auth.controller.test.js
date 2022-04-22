
const Models = require('../../../models');
const User = Models.user;
const Role = Models.role;
const authController = require("../../../Controller/auth.controller")
const {mockRequest, mockResponse} = require('../interceptor');
const newUser = require('../mockData/newUser.json');
const newUserWithoutRole = require("../mockData/newUserR.json")


/**
 * Tests for sign up method
 * 
 * 1.1 Successful sign up when user provides the role
 * 1.2 successful sign up when user doesn't provide any role
 * 2 Failed sign up when user is providing wrong role (i.e. role which doesn't exists)
 */
let req, res;
//  beforeEach(() =>{
     req = mockRequest();
    res = mockResponse();
//  });

describe("Tests for sign up method of auth controller", ()=>{

    // it("Successful sign up when user provides the role", async()=>{
    //     req.body = newUser;
    //     const resFromCreate = {
    //         setRoles:async() => Promise.resolve()
    //     }

    //     const spyOnCreate = jest.spyOn(User, 'create').mockImplementation(() => Promise.resolve(resFromCreate));
    //     const spyOnFindAll = jest.spyOn(Role, 'findAll').mockImplementation(() => Promise.resolve());

    //     await authController.signup(req, res); //we need to wait for signup function to complete
        
    //     //Validating if the test is passing successfully or not

    //     await expect(spyOnCreate).toHaveBeenCalled();
    //     await expect(spyOnFindAll).toHaveBeenCalled();
    //     await expect(User.create).toHaveBeenCalled();
    //     await expect(Role.findAll).toHaveBeenCalled();
    //     console.log(res.status);
    //     expect(res.status).toHaveBeenCalled();
        
    //     expect(res.status).toHaveBeenCalledWith(200);
    //     expect(res.send).toHaveBeenCalledWith("Response");

    // });

    // it("Role if not present",async()=>{
        
    //     req.body = newUserWithoutRole;
    //     const resFromCreate = {
    //         setRoles:async() => Promise.resolve()
    //     }

    //     const spyOnCreate = jest.spyOn(User, 'create').mockImplementation(() => Promise.resolve(resFromCreate));
    //     const spyOnFindAll = jest.spyOn(Role, 'findAll').mockImplementation(() => Promise.resolve());

    //     await authController.signup(req, res); //we need to wait for signup function to complete
        
    //     //Validating if the test is passing successfully or not

    //     await expect(spyOnCreate).toHaveBeenCalled();
    //     await expect(spyOnFindAll).toHaveBeenCalled();
    //     await expect(User.create).toHaveBeenCalled();
    //     await expect(Role.findAll).toHaveBeenCalled();
      
    //     expect(res.status).toHaveBeenCalled();
        
    //     expect(res.status).toHaveBeenCalledWith(200);
    //     expect(res.send).toHaveBeenCalledWith("val");

    // })

it("successful sign up when user doesn't provide any role", async()=>{
    req.body = newUserWithoutRole;
    const resFromCreate = {
        setRoles:async() => Promise.resolve()
    }

    const spyOnCreate = jest.spyOn(User, 'create').mockImplementation(() => Promise.resolve(resFromCreate));
    const spyOnFindAll = jest.spyOn(Role, 'findAll').mockImplementation(() => Promise.resolve());

    await authController.signup(req, res); //we need to wait for signup function to complete
    
    //Validating if the test is passing successfully or not

    await expect(spyOnCreate).toHaveBeenCalled();
    await expect(spyOnFindAll).toHaveBeenCalled();
    await expect(User.create).toHaveBeenCalled();
    await expect(Role.findAll).toHaveBeenCalled();
    console.log(res.status);
    expect(res.status).toHaveBeenCalled();
    
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith("Response");

})
})