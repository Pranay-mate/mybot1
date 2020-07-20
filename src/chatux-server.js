const express = require('express');

const app = express();

const port = 8080;

if (app.get('env') === 'production') {
    app.set('trust proxy', 1); // trust first proxy
    sess.cookie.secure = true; // serve secure cookies
}


// set mddielware for CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
});

//provide json api
app.set('json spaces', 2);
app.get('/chat', function (req, res) {

    //Get "text" parameter from request
    const userInputText = req.query.text;
    //get callback parameter for jsonp response
    const callback = req.query.callback;


    //create response object
    const response = {
        output: []
    };
    const menu = [];
    const star = [];
    star.push({label: '*', value: "*"});

    const msg = response.output;

    if (!userInputText) {

        //if inputText is empty
        msg.push({
            type: "text",
            value: "Hey, please say something."
        });

    } else {

        /*if (userInputText == "show buttons") {
            //show text and buttons
            msg.push({
                type: "text",
                value: "Ok, I'll show you buttons!",
                delayMs: 500 // wait(milliseconds)
            });
            const opts = [];
            opts.push({label: 'label1', value: 'value1'});
            opts.push({label: 'label2', value: 'value2'});
            opts.push({label: 'label3', value: 'value3'});
            msg.push({type: "option", options: opts});
        } else if (userInputText == "show image") {
            //show text and image
            msg.push({
                type: "text",
                value: "Ok, I'll show you an image!",
                delayMs: 500
            });
            msg.push({
                type: "image",
                value: " https://upload.wikimedia.org/wikipedia/commons/a/a3/Aptenodytes_forsteri_-Snow_Hill_Island%2C_Antarctica_-adults_and_juvenile-8.jpg"
            });
        }
        */

        if (userInputText == "Hi"|| userInputText=="Hello" || userInputText=="Hey" || userInputText=="hi" || userInputText=="hello" || userInputText=="*"){

           // if (userInputText){
           msg.push({
               type: "text",
               value: "Hello!, how may I help you?"
           });
           msg.push({
               type: "text",
               value: "Choose any one:"
           });

            console.log(req.query.text);
           // menu();
           //function menu(){

            menu.push({label: 'IP', value: "Menu_IP"});
            menu.push({label: 'Bitrix 24', value: "Bitrix_24"});
            menu.push({label: 'LP1', value: "Menu_LP1"});
            menu.push({label: 'LP2', value: "Menu_LP2"});
            menu.push({label: 'LP3', value: "Menu_LP3"});
            menu.push({label: 'Live project', value: "Live_Project"});
            menu.push({label: 'General Queries', value: "General_Queries"});


            msg.push({
                type: "option",
                options: menu
            });
        }


            if(userInputText){

                //echo inputText
                //console.log(userInputText);
                if(userInputText=="Menu_IP"){
                //alert(userInputText);
                msg.push({
                    type: "text",
                    value: "Choose any one:"
                });

                    const IP = [];
                    IP.push({label: 'Workgroups', value: "workgroups"});
                    IP.push({label: 'Letters/Induction', value: "Letters/Induction"});
                    IP.push({label: 'Application', value: "Application"});
                    IP.push({label: 'College Related', value: "College Related"});
                    IP.push({label: '*', value: "*" });

                    msg.push({
                        type: "option",
                        options: IP
                    });

                    }
                    if(userInputText=="workgroups"){
                        const workgroup = [];
                        workgroup.push({label: 'Q. How many workgroups will an intern be a part of?/ How many workgroups should I be in?', value: "w1"});
                        workgroup.push({label: 'Q. Not able to see the task as not part of the IP workgroup.', value: "w2"});
                        workgroup.push({label: 'Q. What is the job profile? Will we be able to work only in the tech we have chosen for the internship?', value: "w3"});
                        workgroup.push({label: 'Q) I am having trouble finding the workgroup ( no workgroup is visible)', value: "w4"});
                        workgroup.push({label: 'Q) I am not added into my technology workgroup./ actually there are n no of tokens and every token I entered it is showing user no found or redirecting to the same page', value: "w5"});
                        workgroup.push({label: 'Q) I have not been added to the technology I preferred to work on? ', value: "w6"});

                        workgroup.push({label: '*', value: "*" });

                        msg.push({
                            type: "text",
                            value: "Choose any one:"
                        });
                        msg.push({
                            type: "option",
                            options: workgroup
                        })

                    }



                        if (userInputText=="w1"){
                            msg.push({
                                type: "text",
                                value: "A) Every intern should be a part of 2 workgroup "
                            })
                            msg.push({
                                type: "text",
                                value:
                                "1. 202003-IP: This is a general workgroup. Everyone who is enrolled in IP should be a part of this workgroup2."
                            })
                            msg.push({
                                type: "text",
                                value:
                                "202003-IP-Technology: This is a technology-specific workgroup. You will be added to the technology you had enrolled for. For example 202003-IP-Python for students who enrolled for p. If anyone has not been added to any of these workgroups, kindly message Cloud Counselage HR  regarding the same over bitrix24 platform."
                            })


                            msg.push({
                                type: "option",
                                options: star
                            })
                        }
                        else if(userInputText=="w2"){
                            msg.push({
                                type: "text",
                                value: "A) Please message ‘Cloud Counselage HR’ in Bitrix24."
                            })

                            msg.push({
                                type: "option",
                                options: star
                            })
                        }
                        else if(userInputText=="w3"){
                            msg.push({
                                type: "text",
                                value: "A) Your job profile is 'Technology - Intern'; if you're in cloud computing technology to update in your LinkedIn or resume, you can write as 'Cloud Computing - Intern'. Yes, you'll only work in the technology you're selected for but you can take the training of other technologies."
                            })

                            msg.push({
                                type: "option",
                                options: star
                            })
                        }
                        else if(userInputText=="w4"){
                            msg.push({
                                type: "text",
                                value: "A) Please go through the mail from which you have accepted the invite and check the task section as well."
                            })

                            msg.push({
                                type: "option",
                                options: star
                            })
                        }
                        else if(userInputText=="w5"){
                            msg.push({
                                type: "text",
                                value: "A) Please ensure that you have connected to the drive of that workgroup by going to your notification and connecting to the drive of that workgroup. If that is done, please try to search for your workgroup in the search bar at the top of your screen. To search, use the keywords, 202003-IP-TechnologyName."
                            })
                            msg.push({
                                type: "text",
                                value: "Ex 202003-IP-DevOps. In case there is no invitation to you, please message Cloud Counselage HR. You will be added to 2 groups “202003-IP” which is a general workgroup and the other one is “202003-IP-Technology” which is a technology-specific workgroup."
                            })
                            msg.push({
                                type: "option",
                                options: star
                            })
                        }
                        else if(userInputText=="w6"){
                            msg.push({
                                type: "text",
                                value: "A) Please follow the instructions given in the videos or the one in the Bitrix24 mail (these are the same videos share in the task), the tokens are given to you. Ensure that you are putting the right token on the right page."
                            })

                            msg.push({
                                type: "option",
                                options: star
                            })
                        }
                        else if(userInputText=="w7"){
                            msg.push({
                                type: "text",
                                value: "A) We do understand that you might be interested in other technologies and are eager to learn more, but we have prescribed the technologies based on your first inputs and cannot change your base technology. Nevertheless, you do have the opportunity to go through the training of all the technologies."
                            })

                            msg.push({
                                type: "option",
                                options: star
                            })
                        }

                        if(userInputText=="Letters/Induction"){
                            const Letters = [];
                            Letters.push({label: 'Q) When will we get a joining letter? ', value: "L1"});
                            Letters.push({label: 'Q) When will we get an internship completion letter? ', value: "L2"});
                            Letters.push({label: 'Q) I could not attend the induction last time, can I get an online induction again?/ I want some points said in the introduction, where can I get them.', value: "L3"});
                            Letters.push({label: 'Q) Can I just finish the task that you have just uploaded as I have attended the live induction session on 22nd of march', value: "L4"});
                            Letters.push({label: 'Q) I have got another attachment called ‘noname’ or ‘win.dat’ with my Appointment letter, what should I do about it? Will it cause any harm?', value: "L5"});
                            Letters.push({label: 'Q) I did not get my appointment letter yet.', value: "L6"});

                            Letters.push({label: '*', value: "*" });

                            msg.push({
                                type: "text",
                                value: "Choose any one:"
                            });
                            msg.push({
                                type: "option",
                                options: Letters
                            })

                        }



                            if (userInputText=="L1"){
                                msg.push({
                                    type: "text",
                                    value: "A) Joining letter to all the interns will be provided on or before the 31st of March 2020."
                                })



                                msg.push({
                                    type: "option",
                                    options: star
                                })
                            }
                            else if(userInputText=="L2"){
                                msg.push({
                                    type: "text",
                                    value: "A) This is a three (3) month internship conducted in the month of March, June & July 2020. You will receive your internship experience letter in August during the convocation only if you successfully submit your Live Project."
                                })

                                msg.push({
                                    type: "option",
                                    options: star
                                })
                            }
                            else if(userInputText=="L3"){
                                msg.push({
                                    type: "text",
                                    value: "A) We have created a separate page with a pre-recorded induction, please visit it; https://www.cloudcounselage.co.in/ipinduction"
                                })

                                msg.push({
                                    type: "option",
                                    options: star
                                })
                            }
                            else if(userInputText=="L4"){
                                msg.push({
                                    type: "text",
                                    value: "A) Yes. Although, you can always revisit the induction so that you can review what has been said in it."
                                })

                                msg.push({
                                    type: "option",
                                    options: star
                                })
                            }
                            else if(userInputText=="L5"){
                                msg.push({
                                    type: "text",
                                    value: "A) We have observed that there is such an attachment for a few mailing service providers like Gmail and yahoo, please ignore this attachment. It won’t cause any harm to your system."
                                })

                                msg.push({
                                    type: "option",
                                    options: star
                                })
                            }
                            else if(userInputText=="L6"){
                                msg.push({
                                    type: "text",
                                    value: "A) If you had not attended the live induction and have registered in the pre-recorded session after 4 PM, 31st March. Then you'll get your joining letter by 30th April 2020. If you have otherwise, please a mail to hrsupport@cloudcounselage.in or ping 'Cloud Counselage HR' in B24."
                                })

                                msg.push({
                                    type: "option",
                                    options: star
                                })
                            }
                            if(userInputText=="Application"){
                                const Application = [];
                                Application.push({label: "Q) One of my friends had applied for the IP but she didn't receive any further updates.", value: "a1"});
                                Application.push({label: "Q) What are the company policies for IP interns?", value: "a2"});
                                Application.push({label: "Q) Can we extend this internship? ", value: "a3"});
                                Application.push({label: "Q) Can we visit the office? How many times do we have to visit the office for this internship?", value: "a4"});
                                Application.push({label: "Q) Can we do another internship with IP?", value: "a5"});
                                Application.push({label: "Q) Can my friends still apply for the Internship Program (IP) - Maharashtra? Can we create awareness about this internship? Can we be the representative for Cloud Counselage in our college?", value: "a6"});

                                Letters.push({label: '*', value: "*" });

                                msg.push({
                                    type: "text",
                                    value: "Choose any one:"
                                });
                                msg.push({
                                    type: "option",
                                    options: Application
                                })

                            }



                                if (userInputText=="a1"){
                                    msg.push({
                                        type: "text",
                                        value: "A) Please ask them to send a mail to hrsupport@cloudcounselage.in and wait till 30th April 2020 for a reply."
                                    })



                                    msg.push({
                                        type: "option",
                                        options: star
                                    })
                                }
                                else if(userInputText=="a2"){
                                    msg.push({
                                        type: "text",
                                        value: "A) The company policies will be published on www.cloudcounselage.co.in/ippolicies"
                                    })

                                    msg.push({
                                        type: "option",
                                        options: star
                                    })
                                }
                                else if(userInputText=="a3"){
                                    msg.push({
                                        type: "text",
                                        value: "A) Yes, you can extend your internship by being part of our other online programs like, ‘Online Career Program’."
                                    })

                                    msg.push({
                                        type: "option",
                                        options: star
                                    })
                                }
                                else if(userInputText=="L4"){
                                    msg.push({
                                        type: "text",
                                        value: "A) Yes. Although, you can always revisit the induction so that you can review what has been said in it."
                                    })

                                    msg.push({
                                        type: "option",
                                        options: star
                                    })
                                }
                                else if(userInputText=="L5"){
                                    msg.push({
                                        type: "text",
                                        value: "A) Yes, you can do another internship outside of Cloud Counselage but please ensure to provide 1 hour a day or 7 hours a week for IP."
                                    })

                                    msg.push({
                                        type: "option",
                                        options: star
                                    })
                                }
                                else if(userInputText=="L6"){
                                    msg.push({
                                        type: "text",
                                        value: "A) Yes, your friends can apply till the 30th of March 2020; https://www.cloudcounselage.com/ipmaharashtra/. To be a student representative of Cloud Counselage, please contact Cloud Counselage HR."
                                    })

                                    msg.push({
                                        type: "option",
                                        options: star
                                    })
                                }
                                if(userInputText=="College Related"){
                                    const CollegeR = [];
                                    CollegeR.push({label: "Q) What to do when our university exams start?", value: "cr1"});
                                    CollegeR.push({label: " Q) Is it okay to mention this internship as ongoing for college records?", value: "cr2"});

                                    CollegeR.push({label: '*', value: "*" });

                                    msg.push({
                                        type: "text",
                                        value: "Choose any one:"
                                    });
                                    msg.push({
                                        type: "option",
                                        options: CollegeR
                                    })

                                }



                                    if (userInputText=="cr1"){
                                        msg.push({
                                            type: "text",
                                            value: "A) We have provided our interns with preparatory leave from the exam season, nevertheless, you are free to work on your LP3 assignment, but we suggest to concentrate on your exams first."
                                        })



                                        msg.push({
                                            type: "option",
                                            options: star
                                        })
                                    }
                                    else if(userInputText=="cr2"){
                                        msg.push({
                                            type: "text",
                                            value: "A) Yes, we'll provide every intern a joining letter as soon as all interns are inducted."
                                        })

                                        msg.push({
                                            type: "option",
                                            options: star
                                        })
                                    }


    /////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////Bitrix_24/////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////
                                    if(userInputText=="Bitrix_24"){
                                        //alert(userInputText);

                                            const Bitrix24 = [];
                                            Bitrix24.push({label: 'Log in', value: "Log in"});
                                            Bitrix24.push({label: 'Tasks/Work report', value: "Tasks/Work report"});
                                            Bitrix24.push({label: 'Clock in/out', value: "Clock in/out"});
                                            Bitrix24.push({label: '*', value: "*" });

                                            msg.push({
                                                type: "text",
                                                value: "Choose any one:"
                                            });
                                            msg.push({
                                                type: "option",
                                                options: Bitrix24
                                            });

                                            }
                                            if(userInputText=="Tasks/Work report"){
                                                const TaskR = [];
                                                TaskR.push({label: " Q) I am not able to see my tasks.", value: "TaskR1"});
                                                TaskR.push({label: " Q) Not able to see the task as not part of the IP workgroup.", value: "TaskR2"});
                                                TaskR.push({label: "  Q) What do we do in the work report? ", value: "TaskR3"});
                                                TaskR.push({label: " Q) My Efficiency is 0% what should I do?", value: "TaskR4"});
                                                TaskR.push({label: "Q) When will my review on social media update task be done?", value: "TaskR5"});
                                                TaskR.push({label: "Q) I am trying to complete social media tasks. I completed that day and clicked finish but it didn't show finished in the task menu. What should I do?", value: "TaskR6"});

                                                TaskR.push({label: '*', value: "*" });

                                                msg.push({
                                                    type: "text",
                                                    value: "Choose any one:"
                                                });
                                                msg.push({
                                                    type: "option",
                                                    options: TaskR
                                                })

                                            }
                                            if (userInputText=="TaskR1"){
                                                msg.push({
                                                    type: "text",
                                                    value: "A) Please remove the default In Progress from your filter of the task section and try."
                                                })



                                                msg.push({
                                                    type: "option",
                                                    options: star
                                                })
                                            }
                                            else if(userInputText=="TaskR2"){
                                                msg.push({
                                                    type: "text",
                                                    value: "A) Please message ‘Cloud Counselage HR’ in Bitrix24"
                                                })

                                                msg.push({
                                                    type: "option",
                                                    options: star
                                                })
                                            }
                                            else if(userInputText=="TaskR3"){
                                                msg.push({
                                                    type: "text",
                                                    value: "A) As mentioned in the video, please write what you have done this week and request approval from your supervisor by clicking on send to supervisor."
                                                })

                                                msg.push({
                                                    type: "option",
                                                    options: star
                                                })
                                            }
                                            else if(userInputText=="TaskR4"){
                                                msg.push({
                                                    type: "text",
                                                    value: "A) Ensure that you have clicked ‘Start’ when you resume a task, the ‘Finish’ button gets active only after the task is started. Once you complete the task you can then click on ‘Finish’ and then the efficiency is updated in the system. However, please raise this issue with the Cloud Counselage HR, as they will look at it on a case to case basis"
                                                })

                                                msg.push({
                                                    type: "option",
                                                    options: star
                                                })
                                            }
                                            else if(userInputText=="TaskR5"){
                                                msg.push({
                                                    type: "text",
                                                    value: "A) We will review this task in May 2020."
                                                })

                                                msg.push({
                                                    type: "option",
                                                    options: star
                                                })
                                            }
                                            else if(userInputText=="TaskR6"){
                                                msg.push({
                                                    type: "text",
                                                    value: "A) Our team will verify and then only your task shall be accepted as completed. Please wait till the verification's complete."
                                                })

                                                msg.push({
                                                    type: "option",
                                                    options: star
                                                })
                                            }
                                            if(userInputText=="Log in"){
                                                const Login = [];
                                                Login.push({label: " Q) I m not able to access my Bitrix24 account?", value: "Log1"});
                                                Login.push({label: " Q) Can we be online after 1 hr in a day?", value: "Log2"});
                                                Login.push({label: " Q) By when will we receive access to Bitrix24? ", value: "Log3"});
                                                Login.push({label: "Q) I am not able to view a page/ I am logged in the training and still the website asks me to login", value: "Log4"});

                                                Login.push({label: '*', value: "*" });

                                                msg.push({
                                                    type: "text",
                                                    value: "Choose any one:"
                                                });
                                                msg.push({
                                                    type: "option",
                                                    options: Login
                                                })

                                            }
                                            if (userInputText=="Log1"){
                                                msg.push({
                                                    type: "text",
                                                    value: "A) Go to https://cloudcounselage24.bitrix24.com/ On the Login page, In the, ‘Enter the phone number or email’, type in your email id that you have registered with Cloud Counselage and Click ‘Forgot Password’ In case the problem persists, please write a mail to hrsupport@cloudcounselage.in"
                                                })



                                                msg.push({
                                                    type: "option",
                                                    options: star
                                                })
                                            }
                                            else if(userInputText=="Log2"){
                                                msg.push({
                                                    type: "text",
                                                    value: "A) Yes, you can be."
                                                })

                                                msg.push({
                                                    type: "option",
                                                    options: star
                                                })
                                            }
                                            else if(userInputText=="Log3"){
                                                msg.push({
                                                    type: "text",
                                                    value: "A) If you have submitted the ‘New Joinee Form’ after the 1st of March, please wait till the 31st of March to receive your access."
                                                })

                                                msg.push({
                                                    type: "option",
                                                    options: star
                                                })
                                            }
                                            else if(userInputText=="Log4"){
                                                msg.push({
                                                    type: "text",
                                                    value: "A) This could be because of some issue in the cookies or extension in your browser. Please try again with a different browser or open the tab with incognito mode.Also, you don't need to record your results, the quizzes are only for your knowledge check and not a metric to score you."
                                                })

                                                msg.push({
                                                    type: "option",
                                                    options: star
                                                })
                                            }
                                            if(userInputText=="Clock in/out"){
                                                const Clock = [];
                                                Clock.push({label: "  Q) I forgot to clock in for a few days, will this affect my internship?", value: "Clock1"});
                                                Clock.push({label: "  Q) In my work time I can see one exclamation mark?/ What does the remaining time mean?", value: "Clock2"});
                                                Clock.push({label: " Q) Is it necessary to clock-in if I am done with my tasks? ", value: "Clock3"});
                                                Clock.push({label: " Q) Is it ok to clock-out before an hour is completed if the tasks are completed? Do we need to clock-in and compulsorily complete 7 hours a week even if the tasks are completed?", value: "Clock4"});

                                                Clock.push({label: '*', value: "*" });

                                                msg.push({
                                                    type: "text",
                                                    value: "Choose any one:"
                                                });
                                                msg.push({
                                                    type: "option",
                                                    options: Clock
                                                })

                                            }
                                            if (userInputText=="Clock1"){
                                                msg.push({
                                                    type: "text",
                                                    value: "A) This could have an adverse effect on your internship, please contact Cloud Counsealge HR and provide a genuine reason to miss clock in/ clock out. Also, please start performing your clock in/ clock out now."
                                                })



                                                msg.push({
                                                    type: "option",
                                                    options: star
                                                })
                                            }
                                            else if(userInputText=="Clock2"){
                                                msg.push({
                                                    type: "text",
                                                    value: "A) It is showing the remaining time because it's configured for 8 working hours per day. Our interns need to only make sure that they are online for 1 hour per day or 7 hours a week."
                                                })

                                                msg.push({
                                                    type: "option",
                                                    options: star
                                                })
                                            }
                                            else if(userInputText=="Clock3"){
                                                msg.push({
                                                    type: "text",
                                                    value: "A) Yes, it is mandatory to do, we are trying to include some more tasks due to the current scenarios, but adherence to clock-in/ clock-out policy is utterly important."
                                                })

                                                msg.push({
                                                    type: "option",
                                                    options: star
                                                })
                                            }
                                            else if(userInputText=="Clock4"){
                                                msg.push({
                                                    type: "text",
                                                    value: "A) If the tasks are completed, there is no need to clock-in and clock-out unnecessarily for hours.However, you should keep a track of all the updates of the internship being posted on the groups"
                                                })

                                                msg.push({
                                                    type: "option",
                                                    options: star
                                                })
                                            }


        /////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////Menu_LP1////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////

                                            if(userInputText=="Menu_LP1"){
                                            //alert(userInputText);


                                                const LP1 = [];
                                                LP1.push({label: 'Training', value: "Training_LP1"});
                                                LP1.push({label: 'Quiz', value: "Quiz_LP1"});
                                                LP1.push({label: 'Token usage', value: "Token_LP1"});
                                                LP1.push({label: 'Others', value: "Others_LP1"});
                                                LP1.push({label: '*', value: "*" });

                                                msg.push({
                                                    type: "text",
                                                    value: "Choose any one:"
                                                });
                                                msg.push({
                                                    type: "option",
                                                    options: LP1
                                                });

                                                }
                                                if(userInputText=="Training_LP1"){
                                                    const Training_LP1 = [];
                                                    Training_LP1.push({label: 'Q) Login issues with training/ for every module of LP1/ LP2, do we have to register again for access to the content?', value: "Training_LP1-1"});
                                                    Training_LP1.push({label: 'Q) If my technology is IOT/ AI/ ML/ etc., do I still have to complete the mandatory training for LP1 "Cloud Computing"?', value: "Training_LP1-2"});
                                                    Training_LP1.push({label: 'Q) What to do after completing LP1/ LP2/ LP3?', value: "Training_LP1-3"});
                                                    Training_LP1.push({label: 'Q) Is it necessary to attend LP1 for other domains as well if we want to take its training. ', value: "Training_LP1-4"});
                                                    Training_LP1.push({label: 'Q) Resource links not working. What to do? Should we skip?', value: "Training_LP1-5"});
                                                    Training_LP1.push({label: 'Q) Can we skip any training if we are already clear with the basics?', value: "Training_LP1-6"});
                                                    Training_LP1.push({label: 'Q) Could I have done this training from other websites/ resources?', value: "Training_LP1-7"});
                                                    Training_LP1.push({label: 'Q) I have complete one training, I didn not find any options to continue my training.', value: "Training_LP1-8"});
                                                    Training_LP1.push({label: 'Q) I am not getting results of the training.', value: "Training_LP1-9"});

                                                    Training_LP1.push({label: '*', value: "*" });

                                                    msg.push({
                                                        type: "text",
                                                        value: "Choose any one:"
                                                    });
                                                    msg.push({
                                                        type: "option",
                                                        options: Training_LP1
                                                    })

                                                }



                                                    if (userInputText=="Training_LP1-1"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) Yes, you need to register for every module of training. Some of you are facing login issues, we have kept the training visible without login. Even then, to post a comment and give a quiz you'll have to login. In case you face difficulty to do so, please try to perform your quiz or post a comment by using a different browser or incognito mode."
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    else if(userInputText=="Training_LP1-2"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) Yes, you'll need to complete the mandatory training as cloud computing is fundamental to many technologies and this additional knowledge will help you in your career."
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    else if(userInputText=="Training_LP1-3"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) Mark your task as finished and wait for the next instructions."
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    else if(userInputText=="Training_LP1-4"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) LP1 training is common across all the technologies"
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    else if(userInputText=="Training_LP1-5"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) Please do not skip any piece of training, in case you're not able to access any link please message to Cloud Counselage HR and drop an email to hrsupport@cloudcounselage.in regarding the same."
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    else if(userInputText=="Training_LP1-6"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) No, these pieces of training will cover basics and there is no harm in brushing up your skills before you start with the assignments later."
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    else if(userInputText=="Training_LP1-7"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) Yes, you could have but the reason to have these videos is to keep an enclosed environment for you to watch these tutorials without distractions with quizzes and forums for you to discuss in. As mentioned earlier, our main aim is to provide you with a starting point and baseline for the technology of your choice."
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    else if(userInputText=="Training_LP1-8"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) Go back to the technology Page. Enter the respective tokens and then work. follow the same process every time."
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    else if(userInputText=="Training_LP1-9"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) They are just for your practice and not for our record, so you don't need the results of LP1 and LP2 training."
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }

                                                    if(userInputText=="Quiz_LP1"){
                                                        const Quiz_LP1 = [];
                                                        Quiz_LP1.push({label: "Q) What do I do after completing the quiz? how to complete the entire lp1", value: "Quiz_LP1-1"});
                                                        Quiz_LP1.push({label: "Q) How do I access my quiz?", value: "Quiz_LP1-2"});
                                                        Quiz_LP1.push({label: "Q) Unable to access the quiz", value: "Quiz_LP1-3"});

                                                        Quiz_LP1.push({label: '*', value: "*" });

                                                        msg.push({
                                                            type: "text",
                                                            value: "Choose any one:"
                                                        });
                                                        msg.push({
                                                            type: "option",
                                                            options: Quiz_LP1
                                                        })

                                                    }
                                                    if (userInputText=="Quiz_LP1-1"){

                                                        msg.push({
                                                            type: "text",
                                                            value: "A) There are tokens for each training in the task, if this learning path is done, please wait for the next learning path to begin and then please try to finish it. If you are done with LP3 please wait for Live Projects to begin."
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    else if(userInputText=="Quiz_LP1-2"){
                                                      msg.push({
                                                          type: "text",
                                                          value: "A) As mentioned in the video: -"
                                                      })
                                                      msg.push({
                                                          type: "text",
                                                          value: "Step1: Go to lp1 module"
                                                      })
                                                      msg.push({
                                                          type: "text",
                                                          value: "Step2: Select module"
                                                      })
                                                      msg.push({
                                                          type: "text",
                                                          value: "Step3: Put token (it will direct you to the home screen if the token is correct)"
                                                      })
                                                      msg.push({
                                                          type: "text",
                                                          value: "Step4: Again go to lp1 module n select that module"
                                                      })

                                                      msg.push({
                                                          type: "text",
                                                          value: "Step5: You will get the access by now"
                                                      })
                                                      msg.push({
                                                          type: "text",
                                                          value: "Step6: Register there (each time for every module)"
                                                      })

                                                        msg.push({
                                                            type: "text",
                                                            value: "Step7: Give the quiz"
                                                        })
                                                        msg.push({
                                                            type: "text",
                                                            value: "Step8: Logout"
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    if(userInputText=="Token_LP1"){
                                                        const Token_LP1 = [];
                                                        Token_LP1.push({label: "Q) I am applying my 2nd token that is the LP1 then it shows invalid user but the first token was accepted. What should I do?/ Tokens not working", value: "Token_LP1-1"});
                                                        Token_LP1.push({label: "Q) I did follow the instructions given in the video, but still, I'm not able to log in for the LP1 task", value: "Token_LP1-2"});
                                                        Token_LP1.push({label: "Q) Do I need to register every time I do different tasks of lp1?", value: "Token_LP1-3"});
                                                        Token_LP1.push({label: "Q) I had press finished button of LP1 task but want to resume the task, how to do that?", value: "Token_LP1-4"});
                                                        Token_LP1.push({label: "Q) I tried it 3-4 times and have to enter token each time I visit it.", value: "Token_LP1-5"});
                                                        Token_LP1.push({label: "Q) Can you help me by telling how can I get to know about my progress of LP 1", value: "Token_LP1-6"});

                                                        Token_LP1.push({label: '*', value: "*" });

                                                        msg.push({
                                                            type: "text",
                                                            value: "Choose any one:"
                                                        });
                                                        msg.push({
                                                            type: "option",
                                                            options: Token_LP1
                                                        })

                                                    }
                                                    if (userInputText=="Token_LP1-1"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) For each training of LP1, there are different tokens. Please read the tasks or watch the videos again meticulously. Try accessing it in incognito mode."
                                                        })


                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    else if(userInputText=="Token_LP1-2"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) Ensure you're using the right token."
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    else if(userInputText=="Token_LP1-3"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) There are codes in the LP1 assignment, and each time you have to register also, please check your task description."
                                                        })


                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    else if(userInputText=="Token_LP1-4"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) You can go back to that task and then click on 'More' and then 'resume' to restart that task."
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    else if(userInputText=="Token_LP1-5"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) We understand that it sometimes becomes tedious to access the training and we highly appreciate your support in making the training possible. We only do this for security reasons and we're trying to find a way to minimise the token use. For now, please note that in LP1 there are 3 types tokens:"
                                                        })

                                                          msg.push({
                                                              type: "text",
                                                              value: "1. One for each technology, you're a part of."
                                                          })
                                                          msg.push({
                                                              type: "text",
                                                              value: "2. The lp1 home page."
                                                          })
                                                          msg.push({
                                                              type: "text",
                                                              value: "3. The 6 tokens (one for each step)"
                                                          })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    else if(userInputText=="Token_LP1-6"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) There is no metric to score your progress in any learning paths as it will be at a different pace for every individual."
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    if(userInputText=="Others_LP1"){
                                                        const Others_LP1 = [];
                                                        Others_LP1.push({label: "Q) When does the LP1/ LP2/ LP3 begin dates and deadline/ end date?", value: "Others-LP1-1"});
                                                        Others_LP1.push({label: "Q) Are LP1/ LP2/ LP3 a part of the Live Project?", value: "Others-LP1-2"});
                                                        Others_LP1.push({label: "Q) Do we need to complete all the six steps within 14 hours as you mentioned that we have to complete all the 6 steps within 2 weeks so it becomes 14 hours?", value: "Others-LP1-3"});

                                                        Others_LP1.push({label: '*', value: "*" });

                                                        msg.push({
                                                            type: "text",
                                                            value: "Choose any one:"
                                                        });
                                                        msg.push({
                                                            type: "option",
                                                            options: Others_LP1
                                                        })

                                                    }
                                                    if (userInputText=="Others-LP1-1"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) The dates to begin the learning paths (LP) are: - "
                                                        })
                                                        msg.push({
                                                            type: "text",
                                                            value: "LP1 - 01/03/2020"
                                                        })
                                                        msg.push({
                                                            type: "text",
                                                            value: "LP2 - 18/03/2020"
                                                        })
                                                        msg.push({
                                                            type: "text",
                                                            value: "LP3 - 02/04/2020 "
                                                        })
                                                        msg.push({
                                                            type: "text",
                                                            value: "All learning Paths (LP) are expected to be completed by the interns before the first   week of June as Live Projects will begin in that time frame. "
                                                        })
                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    else if(userInputText=="Others-LP1-2"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) LP1/ LP2/ LP3 is your preparation for the Live Project. All the phases LP1/ LP2/ LP3/ Live Project are a part of this internship."
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    else if(userInputText=="Others-LP1-3"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) It's preferred if you complete the LP1 training in 2 weeks but not mandatory. LP1, LP2, and LP3 are expected to be completed before the live projects start in July; but that doesn't mean you should give anything less than 1 hour a day or 7 hours a week towards the learning paths (LP)."
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }


        /////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////Menu_LP2////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////

                                            if(userInputText=="Menu_LP2"){
                                            //alert(userInputText);


                                                const LP2 = [];
                                                LP2.push({label: 'Training', value: "Training_LP2"});
                                                LP2.push({label: 'Quiz', value: "Quiz_LP2"});
                                                LP2.push({label: 'Others', value: "Others_LP2"});
                                                LP2.push({label: '*', value: "*" });

                                                msg.push({
                                                    type: "text",
                                                    value: "Choose any one:"
                                                });
                                                msg.push({
                                                    type: "option",
                                                    options: LP2
                                                });

                                                }
                                                if(userInputText=="Training_LP2"){
                                                    const Training_LP2 = [];
                                                    Training_LP2.push({label: 'Q) Login issues with training/ for every module of LP1/ LP2, do we have to register again for access to the content?', value: "Training_LP2-1"});
                                                    Training_LP2.push({label: 'Q) What happens in LP2? What kind of training can we expect? Is it a Basic/Advance level?', value: "Training_LP2-2"});
                                                    Training_LP2.push({label: 'Q) Why only this training for LP2?', value: "Training_LP2-3"});
                                                    Training_LP2.push({label: 'Q) Can I do certification for the training provided in LP2? ', value: "Training_LP2-4"});
                                                    Training_LP2.push({label: 'Q) The videos of LP2 are taking too much time to load.', value: "Training_LP2-5"});
                                                    Training_LP2.push({label: 'Q) Can we skip any training if we are already clear with the basics?', value: "Training_LP2-6"});
                                                    Training_LP2.push({label: 'Q) Could I have done this training from other websites/ resources?', value: "Training_LP2-7"});
                                                    Training_LP2.push({label: 'Q) Resource links not working. What to do? Should we skip?', value: "Training_LP2-8"});
                                                    Training_LP2.push({label: 'Q) I have complete one training, I didn not find any options to continue my training.', value: "Training_LP2-9"});
                                                    Training_LP2.push({label: 'Q) I am not getting results of the training.', value: "Training_LP2-10"});

                                                    Training_LP2.push({label: '*', value: "*" });

                                                    msg.push({
                                                        type: "text",
                                                        value: "Choose any one:"
                                                    });
                                                    msg.push({
                                                        type: "option",
                                                        options: Training_LP2
                                                    })

                                                }



                                                    if (userInputText=="Training_LP2-1"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) Yes, you need to register for every module of training. Some of you are facing login issues, we have kept the training visible without login. Even then, to post a comment and give a quiz you'll have to login. In case you face difficulty to do so, please try to perform your quiz or post a comment by using a different browser or incognito mode."
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    else if(userInputText=="Training_LP2-2"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) The main focus of LP2 is to provide you with a basic foundation of the technology you're interested in. The training is also handpicked in such a way that they enable you to work on LP3 assignments which interim gives you the beginning to start your study for the selected technology and in no terms is the only/ final training you should look into."
                                                        })

                                                        msg.push({
                                                            type: "text",
                                                            value: " Please keep learning after your LP2 is complete, that is the only way to grow in your technology of choice."
                                                        })
                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    else if(userInputText=="Training_LP2-3"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) They are our training partners and we have handpicked this training to cover a certain topic for you. These training cover from the very basic to intermediate level and is the perfect medium for you to have a starting point."
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    else if(userInputText=="Training_LP2-4"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) Yes, Cloud Counselage has purposefully partnered with Edureka so as to enable our interns to get the advantage of the corporate benefits at 'no profit no loss' basis for Cloud Counselage, that we receive from the partnership. Being our interns, you can get huge discounts on the certifications you choose to enrol for through Cloud Counselage and Edureka. In case you want to know more about the discounts offered, please reach out to ‘Cloud Counselage HR’ or write to hrsupport@cloudcounselage.in."
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    else if(userInputText=="Training_LP2-5"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) We have uploaded the videos of the highest quality and best resolution which has resulted in some videos being over 1 GB as they are of hours in duration. To experience these high definition videos we request you to wait at least 5 minutes or more; depending on your computer's RAM and internet connection."
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    else if(userInputText=="Training_LP2-6"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) No, these pieces of training will cover basics and there is no harm in brushing up your skills before you start with the assignments later."
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    else if(userInputText=="Training_LP2-7"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) Yes, you could have but the reason to have these videos is to keep an enclosed environment for you to watch these tutorials without distractions with quizzes and forums for you to discuss in. As mentioned earlier, our main aim is to provide you with a starting point and baseline for the technology of your choice."
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    else if(userInputText=="Training_LP2-8"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) Please do not skip any piece of training, in case you're not able to access any link please message to Cloud Counselage HR and drop an email to hrsupport@cloudcounselage.in regarding the same."
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    else if(userInputText=="Training_LP2-9"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) Go back to the technology Page. Enter the respective tokens and then work. follow the same process every time."
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    else if(userInputText=="Training_LP2-10"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) They are just for your practice and not for our record, so you don't need the results of LP1 and LP2 training."
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    if(userInputText=="Quiz_LP2"){
                                                        const Quiz_LP2 = [];
                                                        Quiz_LP2.push({label: "Q) How do I access my quiz?", value: "Quiz_LP2-1"});
                                                        Quiz_LP2.push({label: "Q) Unable to access the quiz", value: "Quiz_LP2-2"});

                                                        Quiz_LP2.push({label: '*', value: "*" });

                                                        msg.push({
                                                            type: "text",
                                                            value: "Choose any one:"
                                                        });
                                                        msg.push({
                                                            type: "option",
                                                            options: Quiz_LP2
                                                        })

                                                    }
                                                    if (userInputText=="Quiz_LP2-1"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) As mentioned in the video: -"
                                                        })
                                                        msg.push({
                                                            type: "text",
                                                            value: "Step1: Go to lp1 module"
                                                        })
                                                        msg.push({
                                                            type: "text",
                                                            value: "Step2: Select module"
                                                        })
                                                        msg.push({
                                                            type: "text",
                                                            value: "Step3: Put token (it will direct you to the home screen if the token is correct)"
                                                        })
                                                        msg.push({
                                                            type: "text",
                                                            value: "Step4: Again go to lp1 module n select that module"
                                                        })
                                                        msg.push({
                                                            type: "text",
                                                            value: "Step5: You will get the access by now"
                                                        })
                                                        msg.push({
                                                            type: "text",
                                                            value: "Step6: Register there (each time for every module)"
                                                        })
                                                        msg.push({
                                                            type: "text",
                                                            value: "Step7: Give the quiz"
                                                        })
                                                        msg.push({
                                                            type: "text",
                                                            value: "Step8: Logout"
                                                        })


                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    else if(userInputText=="Quiz_LP2-2"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) Please retry after some time in an incognito window"
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }

                                                    if(userInputText=="Others_LP2"){
                                                        const Others_LP2 = [];
                                                        Others_LP2.push({label: "Q) When does the LP1/ LP2/ LP3 begin dates and deadline/ end date?", value: "Others-LP2-1"});
                                                        Others_LP2.push({label: "Q) Are LP1/ LP2/ LP3 a part of the Live Project?", value: "Others-LP2-2"});
                                                        Others_LP2.push({label: "Q) Do we need to complete all the six steps within 14 hours as you mentioned that we have to complete all the 6 steps within 2 weeks so it becomes 14 hours?", value: "Others-LP2-3"});
                                                        Others_LP2.push({label: "Q) What to do after completing LP1/ LP2/ LP3?", value: "Others-LP2-4"});
                                                        Others_LP2.push({label: "Q) I have opted for a blockchain internship, can I also learn about AI and do an internship in both? ", value: "Others-LP2-5"});

                                                        Others_LP2.push({label: '*', value: "*" });

                                                        msg.push({
                                                            type: "text",
                                                            value: "Choose any one:"
                                                        });
                                                        msg.push({
                                                            type: "option",
                                                            options: Others_LP2
                                                        })

                                                    }
                                                    if (userInputText=="Others-LP2-1"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) The dates to begin the learning paths (LP) are: - "
                                                        })
                                                        msg.push({
                                                            type: "text",
                                                            value: "LP1 - 01/03/2020"
                                                        })
                                                        msg.push({
                                                            type: "text",
                                                            value: "LP2 - 18/03/2020"
                                                        })
                                                        msg.push({
                                                            type: "text",
                                                            value: "LP3 - 02/04/2020 "
                                                        })
                                                        msg.push({
                                                            type: "text",
                                                            value: "All learning Paths (LP) are expected to be completed by the interns before the first   week of June as Live Projects will begin in that time frame. "
                                                        })
                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    else if(userInputText=="Others-LP2-2"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) LP1/ LP2/ LP3 is your preparation for the Live Project. All the phases LP1/ LP2/ LP3/ Live Project are a part of this internship."
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    else if(userInputText=="Others-LP2-3"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) It's preferred if you complete the LP1 training in 2 weeks but not mandatory. LP1, LP2, and LP3 are expected to be completed before the live projects start in July; but that doesn't mean you should give anything less than 1 hour a day or 7 hours a week towards the learning paths (LP)."
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    else if(userInputText=="Others-LP2-4"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) Mark your task as finished and wait for the next instructions."
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    else if(userInputText=="Others-LP2-5"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) You can learn both the technologies using Learning Path 2 (LP2) which will begin after the 2nd week of March, but your internship will only be continuing with the one you are selected for."
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }


            /////////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////Menu_LP3////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////////////

                                            if(userInputText=="Menu_LP3"){
                                            //alert(userInputText);


                                                const LP3 = [];
                                                LP3.push({label: 'Dates', value: "Dates"});
                                                LP3.push({label: 'What is in LP3?', value: "What is in LP3?"});
                                                LP3.push({label: 'Assignment', value: "Assignment"});
                                                LP3.push({label: 'Others', value: "Others_LP3"});
                                                LP3.push({label: '*', value: "*" });

                                                msg.push({
                                                    type: "text",
                                                    value: "Choose any one:"
                                                });
                                                msg.push({
                                                    type: "option",
                                                    options: LP3
                                                });

                                                }
                                                if(userInputText=="Dates"){
                                                    const Dates = [];
                                                    Dates.push({label: 'Q) When does the LP1/ LP2/ LP3 begin dates and deadline/ end date?', value: "date1"});
                                                    Dates.push({label: 'Q) When will the step 3 of the internship program start?', value: "date2"});

                                                    Dates.push({label: '*', value: "*" });

                                                    msg.push({
                                                        type: "text",
                                                        value: "Choose any one:"
                                                    });
                                                    msg.push({
                                                        type: "option",
                                                        options: Dates
                                                    })

                                                }



                                                    if (userInputText=="date1"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "The dates to begin the learning paths (LP) are: -"
                                                        })
                                                        msg.push({
                                                            type: "text",
                                                            value:
                                                            "LP1 - 01/03/2020"
                                                        })
                                                        msg.push({
                                                            type: "text",
                                                            value:
                                                            "LP2 - 18/03/2020"
                                                        })
                                                        msg.push({
                                                            type: "text",
                                                            value:
                                                            "LP3 - 02/04/2020"
                                                        })
                                                        msg.push({
                                                            type: "text",
                                                            value:
                                                            "All learning Paths (LP) are expected to be completed by the interns before the first week of June as Live Projects will begin in that time frame. "
                                                        })
                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    else if(userInputText=="date2"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "Hope you and your family are in the best of health given the current scenario and you are making the most of your time through the 'Internship Program' by Cloud Counselage."
                                                        })
                                                        msg.push({
                                                            type: "text",
                                                            value: "According to the schedule of this internship program, some of you must have completed steps 1 and 2 of your internship and some of you must be in the process of completing step 2."
                                                        })
                                                        msg.push({
                                                            type: "text",
                                                            value: "Please note that as per the program schedule (https://www.cloudcounselage.com/ipmaharashtra/), the following are the dates for entering step 3, wherein interns take preparatory leaves for exams:a) 16th April 2020 - access given before 31st March 2020"
                                                        })
                                                        msg.push({
                                                            type: "text",
                                                            value: "b) 01st May 2020 - access given after 31st March 2020"
                                                        })
                                                        msg.push({
                                                            type: "text",
                                                            value: "Kindly note that we are in touch with the DTE - Maharashtra for the exam schedules of various universities in Maharashtra and the start of step 4 will be announced accordingly via individual email and our social media pages.While step 3 is in progress, you do not need to login to Bitrix24 or submit your timesheet until you are in step 4.All the best and please stay safe! See you soon in step 4."
                                                        })
                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    if(userInputText=="Assignment"){
                                                        const Assignment = [];
                                                        Assignment.push({label: "Q) Where do we push the code in LP3?", value: "Assignment-1"});
                                                        Assignment.push({label: "Q) Where should we share our hacker rank id/ where should we share the link/ anything relate to LP3 assignment submission?", value: "Assignment-2"});
                                                        Assignment.push({label: "Q)  I am stuck in LP3/ Live project with a technical issue, Is there any technical person who can help in this?", value: "Assignment-3"});
                                                        Assignment.push({label: "Q) I have a query with respect to LP3, what should I do and whom should I ask?", value: "Assignment-4"});
                                                        Assignment.push({label: "Q) For some reason, I'm unable to download my LP3 assignment problem statement document shared on LP3 page, is there any other way I can get it?", value: "Assignment-5"});
                                                        Assignment.push({label: "Q) What to do after LP3?", value: "Assignment-6"});

                                                        Assignment.push({label: '*', value: "*" });

                                                        msg.push({
                                                            type: "text",
                                                            value: "Choose any one:"
                                                        });
                                                        msg.push({
                                                            type: "option",
                                                            options: Assignment
                                                        })

                                                    }
                                                    if (userInputText=="Assignment-1"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) Please push you to code in a public repo of your GitHub account if required by your LP3 assignment."
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    else if(userInputText=="Assignment-2"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) For now, please concentrate on completing the task. We will ask all the interns to submit their work in the first week of June. Ensure you make it up to the mark till then as there would be no extension given that time."
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    else if(userInputText=="Assignment-3"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) As mentorship/ hand-holding is not part of an internship by definition, we would not provide any technical help. Nevertheless, feel free to ask your doubt in your respective workgroup chat/ in the community or Google it :)"
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    else if(userInputText=="Assignment-4"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) As mentioned in the '202003-IP' workgroup, please ask all queries related to LP3 in your technology workgroup only and tag Jayanth G S  in your message."
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }

                                                    else if(userInputText=="Assignment-5"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) Since some of you are not able to download, please find the same document in your technology drive in the folder LP3. We have made an announcement in your respective technology workgroup as well, please check."
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    else if(userInputText=="Assignment-6"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) You'll be given preparatory leave (PL) from April to June after that your Live Projects will be given after the first week of June."
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    if(userInputText=="Others_LP3"){
                                                        const Others_LP3 = [];
                                                        Others_LP3.push({label: "Q) Will these training be enough for us to complete the LP3 and Live Project.", value: "Others-LP3-1"});
                                                        Others_LP3.push({label: "Q) Will I get LP3 and Live project of technology other than what I am selected for?", value: "Others-LP3-2"});
                                                        Others_LP3.push({label: "Q) Do we need to complete all the six steps within 14 hours as you mentioned that we have to complete all the 6 steps within 2 weeks so it becomes 14 hours?", value: "Others-LP3-3"});

                                                        Others_LP3.push({label: '*', value: "*" });

                                                        msg.push({
                                                            type: "text",
                                                            value: "Choose any one:"
                                                        });
                                                        msg.push({
                                                            type: "option",
                                                            options: Others_LP3
                                                        })

                                                    }
                                                    if (userInputText=="Others-LP3-1"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) The set of training is not exhaustive and you are required to keep learning about the technology on your own to excel in your Live Project."
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    else if(userInputText=="Others-LP3-2"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) No, you will receive LP3 and Live Projects of your respective technology."
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }
                                                    else if(userInputText=="Others-LP3-3"){
                                                        msg.push({
                                                            type: "text",
                                                            value: "A) It's preferred if you complete the LP1 training in 2 weeks but not mandatory. LP1, LP2, and LP3 are expected to be completed before the live projects start in July; but that doesn't mean you should give anything less than 1 hour a day or 7 hours a week towards the learning paths (LP)."
                                                        })

                                                        msg.push({
                                                            type: "option",
                                                            options: star
                                                        })
                                                    }


          /////////////////////////////////////////////////////////////////////////////////////////
          /////////////////////////////////////Live_Project////////////////////////////////////////////////
          /////////////////////////////////////////////////////////////////////////////////////////////

                                                    if(userInputText=="Live_Project"){
                                                    //alert(userInputText);

                                                        const LiveProject = [];
                                                        LiveProject.push({label: 'Q) Live project is use case will be provided or can we have our own use case?', value: "LiveProject-1"});
                                                        LiveProject.push({label: 'Q)  I am stuck in LP3/ Live project with a technical issue, Is there any technical person who can help in this?', value: "LiveProject-2"});
                                                        LiveProject.push({label: 'Q) Live Project/ LP3 has to be submitted individually or it will be a group project?', value: "LiveProject-3"});
                                                        LiveProject.push({label: 'Q) Will these training be enough for us to complete the LP3 and Live Project. ', value: "LiveProject-4"});
                                                        LiveProject.push({label: 'Q) Will Live Projects have only one technology or a mixture of technologies?', value: "LiveProject-5"});
                                                        LiveProject.push({label: '*', value: "*" });

                                                        msg.push({
                                                            type: "text",
                                                            value: "Choose any one:"
                                                        });
                                                        msg.push({
                                                            type: "option",
                                                            options: LiveProject
                                                        });

                                                        }
                                                        if (userInputText=="LiveProject-1"){
                                                            msg.push({
                                                                type: "text",
                                                                value: "A) Live project's use case will strictly be provided by Cloud Counselage and you cannot choose your own use case."
                                                            })



                                                            msg.push({
                                                                type: "option",
                                                                options: star
                                                            })
                                                        }
                                                        else if(userInputText=="LiveProject-2"){
                                                            msg.push({
                                                                type: "text",
                                                                value: "A) As mentorship/ hand-holding is not part of an internship by definition, we would not provide any technical help. Nevertheless, feel free to ask your doubt in your respective workgroup chat/ in the community or Google it :)"
                                                            })

                                                            msg.push({
                                                                type: "option",
                                                                options: star
                                                            })
                                                        }
                                                        else if(userInputText=="LiveProject-3"){
                                                            msg.push({
                                                                type: "text",
                                                                value: "A) All the LP3/  Live Projects are on an individual scale."
                                                            })

                                                            msg.push({
                                                                type: "option",
                                                                options: star
                                                            })
                                                        }
                                                        else if(userInputText=="LiveProject-4"){
                                                            msg.push({
                                                                type: "text",
                                                                value: "A) The set of training is not exhaustive and you are required to keep learning about the technology on your own to excel in your Live Project."
                                                            })

                                                            msg.push({
                                                                type: "option",
                                                                options: star
                                                            })
                                                        }
                                                        else if(userInputText=="LiveProject-5"){
                                                            msg.push({
                                                                type: "text",
                                                                value: "A) Live Projects will have only your part of technology even if there are multiple technologies that are a part of the project, you will be working only on the part that covers your technology."
                                                            })

                                                            msg.push({
                                                                type: "option",
                                                                options: star
                                                            })
                                                        }

              /////////////////////////////////////////////////////////////////////////////////////////
              /////////////////////////////////////General_Queries////////////////////////////////////////////////
              /////////////////////////////////////////////////////////////////////////////////////////////

                                                        if(userInputText=="General_Queries"){
                                                        //alert(userInputText);

                                                  
                                                            const GeneralQueries = [];
                                                            GeneralQueries.push({label: 'Q) I  am getting an error:: Exception: SQLSTATE[HY000]: General error: 1 no such table: layout, what should I do?', value: "GeneralQueries-1"});
                                                            GeneralQueries.push({label: 'Q) I have not got the acknowledgment from you regarding the weekly report.', value: "GeneralQueries-2"});
                                                            GeneralQueries.push({label: 'Q) If we are working on more than one technology, are those technologies added to the certificate? ', value: "GeneralQueries-3"});
                                                            GeneralQueries.push({label: 'Q) Will you provide mentorship or doubt clearing sessions in this internship? ', value: "GeneralQueries-4"});
                                                            GeneralQueries.push({label: 'Q) Problem statements of the Live Project will be chosen by the intern or will be provided by Cloud Counselage?', value: "GeneralQueries-5"});
                                                            GeneralQueries.push({label: 'Q) Can we be a part of your future development team?/ Can we be hired by Cloud Counselage after this internship? ', value: "GeneralQueries-6"});
                                                            GeneralQueries.push({label: 'Q) Can we visit the office? How many times do we have to visit the office for this internship?', value: "GeneralQueries-7"});
                                                            GeneralQueries.push({label: 'Q) Do I need to pass with the certificate in training.', value: "GeneralQueries-8"});
                                                            GeneralQueries.push({label: 'Q) Which Browser I should use?', value: "GeneralQueries-9"});
                                                            GeneralQueries.push({label: '*', value: "*" });

                                                            msg.push({
                                                                type: "text",
                                                                value: "Choose any one:"
                                                            });
                                                            msg.push({
                                                                type: "option",
                                                                options: GeneralQueries
                                                            });

                                                            }
                                                            if (userInputText=="GeneralQueries-1"){
                                                                msg.push({
                                                                    type: "text",
                                                                    value: "A) This is due to many webpages opened, please close your browser and try again or you can open a new incognito tab and try again."
                                                                })



                                                                msg.push({
                                                                    type: "option",
                                                                    options: star
                                                                })
                                                            }
                                                            else if(userInputText=="GeneralQueries-2"){
                                                                msg.push({
                                                                    type: "text",
                                                                    value: "A) Once you submit your weekly report, your supervisor and the HR team shall take the cognizance. They would reach out to you in case of discrepancies, so you need not worry about the confirmation."
                                                                })

                                                                msg.push({
                                                                    type: "option",
                                                                    options: star
                                                                })
                                                            }
                                                            else if(userInputText=="GeneralQueries-3"){
                                                                msg.push({
                                                                    type: "text",
                                                                    value: "A) You are not restricted from doing the training of other technologies but you will only be given an internship certificate of the technology you’re selected for."
                                                                })

                                                                msg.push({
                                                                    type: "option",
                                                                    options: star
                                                                })
                                                            }
                                                            else if(userInputText=="GeneralQueries-4"){
                                                                msg.push({
                                                                    type: "text",
                                                                    value: "A) As this is an internship you’re expected to do self-learning, mentorship is not part of an internship. However, we have created forums to resolve your doubts in the form of workgroups. As an intern ensure that you are part of relevant workgroups, i.e. ‘202003 - IP’ and your resp. Technology workgroup. In case, you are not a part of these workgroups, please reach out to ‘Cloud Counselage HR’ on Bitrix24 Chat."
                                                                })

                                                                msg.push({
                                                                    type: "option",
                                                                    options: star
                                                                })
                                                            }
                                                            else if(userInputText=="GeneralQueries-5"){
                                                                msg.push({
                                                                    type: "text",
                                                                    value: "A) Live Projects will be provided by Cloud Counselage as these are the ongoing projects of Cloud Counselage and your opportunity to create an impact in the organisation."
                                                                })

                                                                msg.push({
                                                                    type: "option",
                                                                    options: star
                                                                })
                                                            }
                                                            else if(userInputText=="GeneralQueries-6"){
                                                                msg.push({
                                                                    type: "text",
                                                                    value: "A) All our current interns if performing well in our internship programs can be offered an opportunity to interview for various positions in Cloud Counsealge. Many of our now full-time employees were interns in Cloud Counselage."
                                                                })

                                                                msg.push({
                                                                    type: "option",
                                                                    options: star
                                                                })
                                                            }
                                                            else if(userInputText=="GeneralQueries-7"){
                                                                msg.push({
                                                                    type: "text",
                                                                    value: "A) As this is an online internship you do not need to visit the offices in the duration of this internship. You will be requested to visit the Vikhroli office only once; i.e. on your internship convocation day which will be in July 2020. Nevertheless, you can visit our offices with an appointment."
                                                                })

                                                                msg.push({
                                                                    type: "option",
                                                                    options: star
                                                                })
                                                            }
                                                            else if(userInputText=="GeneralQueries-8"){
                                                                msg.push({
                                                                    type: "text",
                                                                    value: "A) No, but please ensure you complete the training."
                                                                })

                                                                msg.push({
                                                                    type: "option",
                                                                    options: star
                                                                })
                                                            }
                                                            else if(userInputText=="GeneralQueries-9"){
                                                                msg.push({
                                                                    type: "text",
                                                                    value: "A) Google Chrome is recommended"
                                                                })

                                                                msg.push({
                                                                    type: "option",
                                                                    options: star
                                                                })
                                                            }



                }

        }






    if (callback) {
        //generate response for JSONP
        const responseText = callback + "(" + JSON.stringify(response) + ")";

        //Set content-type to "application/javascript"
        res.set('Content-Type', 'application/javascript');
        res.send(responseText)

    } else {
        //generate response for JSON

        res.json(response);
    }


});


app.listen(port, () => {
    console.log('chat server started on port:' + port);
});
