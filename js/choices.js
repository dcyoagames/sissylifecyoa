var choices = {
  housing: {
    title: "Housing",
    description: "This is where you will be living for the next two months. Choose well. A little comfort goes a long way when you have to work all day.",
    optionsets: {
      rooming: {
        title: "Housing",
        choices: 1,
        minimum: 1,
        options: {
          jail: {
            name: "Jail Cell",
            description: "Your first choice is an old abandoned jail cell. There is very little room, and everything is rusted over. There are multiple beds, but no sheets nor blankets. The lock for the door is also broken so be wary of strangers being able to break in.",
            credits: 0,
            replace: {
            	type: "house",
            	descriptors: ["jail cell"]
            }
          },
          dorm: {
            name: "Dorm Room",
            description: "This is a modern small dorm room. There is little space, but you have a window, desk, and a decent bed with a single pillow and sheet. You can place anything you might buy later with cost on your desk. Unfortunately, there's no air unit, so you're at the whim of the weather.",
            credits: -10,
            replace: {
            	type: "house",
            	descriptors: ["dorm room"]
            }
          },
          girly: {
            name: "Girly Room",
            description: "An all-pink girly single room apartment with a full-wall window that has no blinds. The couch turns into a bed only at night. All lights in the room also have a pink tint. The room comes with all necessiries a budding artist needs, including paper and art supplies. You'll need to keep it clean at all times, though, or else.",
            credits: -25,
            replace: {
            	type: "house",
            	descriptors: ["girly apartment"]
            }
          },
          padded: {
            name: "Padded Cell",
            description: "You will live in a completely padded room. There's no desk, so you won't have anywhere to put things other than on the ground. There is a nice bed, but you'll be required to sleep on the floor at night, although you can rest on the bed during the day. There's no window, but there is a single light that changes color based on the time of the day.",
            credits: -5,
            replace: {
            	type: "house",
            	descriptors: ["padded cell"]
            }
          },
          penthouse: {
            name: "Penthouse",
            description: "You choose to live in a new single-room high-rise penthouse with a beautiful view of downtown Austin, Texas. This comes with a very basic built-in bathroom, including a sink, toilet, and a bathtub, but no shower. There are really no downsides to this option other than the light and the noise of the city below.",
            credits: -50,
            replace: {
            	type: "house",
            	descriptors: ["penthouse room"]
            }
          }
        }
      }
    }
  },
  hygiene: {
    title: "Bathroom and Hygiene",
    description: "Here you will be able to select a bathroom for your apartment, and what kids of hygienic products will be available to you over the next two months.",
    optionsets: {
      bathroom: {
        title: "Bathroom",
        choices: 1,
        minimum: 1,
        options: {
          shithole: {
            name: "Shithole",
            description: "You get a shit hole. That's it. No sink or shower. You'll need to clean out your shit at some point or another.",
            credits: 5,
            replace: {
            	type: "bathroom",
            	descriptors: ["shithole room"]
            }
          },
          low: {
            name: "Simple Bathroom",
            description: "All-in-one bathroom. Nothing fancy, and has no cabinet space. Good luck trying to fit anything in here.",
            credits: -5,
            replace: {
            	type: "bathroom",
            	descriptors: ["simple bathroom"]
            }
          },
          medium: {
            name: "Average Bathroom",
            description: "Basic bathroom with a small sink and a shower. It also has a low-power toilet, so be careful with your shits.",
            credits: -10,
            replace: {
            	type: "bathroom",
            	descriptors: ["average bathroom"]
            }
          },
          high: {
            name: "Nice Bathroom",
            description: "A very nice bathroom. Granite counters with lots of space. Has both hot and cold water.",
            credits: -20,
            replace: {
            	type: "bathroom",
            	descriptors: ["nice bathroom"]
            }
          }
        }
      },
      hygiene: {
        title: "Hygiene",
        choices: 1,
        minimum: 0,
        options: {
          hygienebasics: {
            name: "Basics for Hygiene",
            description: "All the basics you need, including soap, shampoo, tooth brush, toothpaste, and a sharp razor. Everything in this kit is replaced when necessary.",
            credits: -10,
            flags: ["clean"]
          }
        }
      },
      makeup: {
        title: "Makeup",
        choices: 1,
        minimum: 0,
        options: {
          basic: {
            name: "Lipstick and Lipgloss",
            description: "All shades of lipstick and lipgloss that any good sissy would ever need.",
            credits: -5,
            options: {
            	lipstick: {
            		name: "Apply lipstick",
            		replace: {
            			type: "lips",
            			descriptors: ["luscious lips"]
            		}
            	}
            }
          },
          advanced: {
            name: "Full Makeup Kit",
            description: "All the makeup you will ever need to be pretty for all of your viewers. You'll receive the proper training in using it to make you look like a real girl, too.",
            credits: -10,
            options: {
            	makeup: {
            		name: "Apply makeup",
            		flags: ["makeup"]
            	}
            }
          }
        }
      },
      other: {
        title: "Other Hygiene-related choices",
        choices: -1,
        minimum: 0,
        options: {
          wash: {
            name: "Washed by a Beautiful Woman",
            description: "Every day, you'll be washed by a beautiful woman who won't stop until every single inch of your body is clean.",
            credits: -5,
            flags: ["wash"]
          },
          futamaid: {
            name: "Futanari Maid",
            description: "A very shy futanari will clean your house once a week, as long as you promise to clean her cute dick each time.",
            credits: -5,
            flags: ["futamaid"]
          },
          enema: {
            name: "Enema",
            description: "You'll have to wake up an hour early every other day for a water enema to clean you out.",
            credits: 5,
          	flags: ["enema"]
          }
        }
      }
    }
  },
  fun: {
    title: "Fun and Games",
    description: "Here is where you get to pick out a few games and things to keep you entertained over the next two months.",
    optionsets:{
      fun: {
        title: "Fun and Games",
        choices: -1,
        minimum: 0,
        options: {
          toys: {
            name: "Sex Toys",
            description: "All of the sex toys you could ever hope for. New ones will be provided to you upon request.",
            credits: -10,
            options: {
            	sextoys: {
            		name: "Play with your toys"
            	}
            }
          },
          art: {
            name: "Art Supplies",
            description: "You will be given unlimited art supplies and a tablet to draw on for a computer. The computer will not be provided.",
            credits: -10,
            options: {
            	art: {
            		name: "Draw"
            	}
            }
          },
          aphrodisiac: {
            name: "Aphrodesiac",
            description: "You will be given an aphrodisiac that will enhance all pleasure and make everything that touches you cause you to nearly orgasm, for a short duration",
            credits: -15,
            options: {
            	sextoys: {
            		name: "Play with your toys",
            		flags: ["horny"]
            	}
            }
          },
          catboy: {
            name: "Catboy",
            description: "A pet catboy is provided to you so that you can have some fun. It will do anything you want, and you can teach it tricks. Just remember to feed it.",
            credits: -15,
            options: {
            	catboy: {
            		name: "Play with your kittyboy"
            	}
            }
          },
          tabletop: {
            name: "Games",
            description: "Whenever you want, you can request to play a board/card game, although it'll be a strip version of the game, played with some cute friends of your choice.",
            credits: -5,
            options: {
            	stripgame: {
            		name: "Play a strip game"
            	}
            }
          },
          drugs: {
            name: "Drugs",
            description: "You are provided with anything and everything that is classified as a drug, ranging from advil to heroin. May come in handy if you get sick. This includes weed.",
            credits: -10,
            options: {
            	drugs: {
            		name: "Do drugs",
            		flags: ["drugged"]
            	}
            }
          },
          exercise: {
            name: "Exercise",
            description: "We want all contestants to be able to get some exercise, so we'll allow you to go outside for an hour every day. Just remember what side of town you live on. Also, have something decent to wear.",
            credits: -5,
            options: {
            	exercise: {
            		name: "Get some exercise"
            	}
            }
          },
          computer: {
            name: "Computer",
            description: "A brand new computer, built to your specifications. It will come with a complete Steam game library and a free $500 universal giftcard. Internet is included, but I wouldn't recommend pirating on T.V.",
            credits: -25,
            options: {
            	computer: {
            		name: "Screw around on your computer"
            	}
            }
          },
          headphones: {
            name: "Headphones",
            description: "A pair of wireless bluetooth headphones so you can listen to your music from anywhere. This is useless without a computer, though.",
            credits: -3
          }
        }
      }
    }
  },
  food: {
    title: "Food",
    description: "This section will provide you with everything you will be allowed to eat over the next two months.",
    optionsets: {
      food: {
        title: "Food",
        choices: -1,
        minimum: 1,
        options: {
          fastfood: {
            name: "Fast Food",
            description: "You will be able to order a meal from any local fast food chain every day at no cost.",
            credits: -15
          },
          steak: {
            name: "Steak Meal",
            description: "Every meal is the same. An 11oz steak and some vegetables. This will get old quickly if it's all you have.",
            credits: -9
          },
          pill: {
            name: "Pill",
            description: "You will insert a pill anally that will provide you with all nutrients you need. You'll miss food after a while.",
            credits: -10
          },
          girl: {
            name: "Chocolate-covered Girl",
            description: "For dessert, you will be presented with a girl dipped in melted chocolate that needs to be cleaned up.",
            credits: -10
          },
          sundae: {
            name: "Sundae",
            description: "A plain old sundae for dessert. You can't really go wrong with the classics.",
            credits: -7
          },
          deli: {
            name: "Deli",
            description: "You can go to the local deli to get food. I hope you can figure out a way to pay them.",
            credits: -12
          },
          beer: {
            name: "Beer",
            description: "For drinks, a cute bar maid will bring you a pint of beer.",
            credits: -10
          },
          soda: {
            name: "Soda",
            description: "Plain old soda. You get to choose between Coke, Dr. Pepper, and Root Beer.",
            credits: -7
          }
        }
      }
    }
  },
  clothing: {
    title: "Clothing",
    description: "This will be your entire wardrobe while you're here. All of your worn clothing will be replaced every other day in order to keep you looking cute.",
    optionsets: {
      clothing: {
        title: "Clothing",
        choices: -1,
        minimum: 0,
        options: {
          bras: {
            name: "Bras",
            description: "2 months' supply of girly bras. They come in all colors and styles.",
            credits: -2
          },
          panties: {
            name: "Panties",
            description: "2 months' suppy of cute panties. You will be given a new pair each morning.",
            credits: -2
          },
          closet: {
            name: "Walk-in Closet",
            description: "Your house gets a full walk-in closet fully stocked with all the cute, girly clothes you could need.",
            credits: -15
          },
          dresses: {
            name: "Dresses",
            description: "You will receive some dresses chosen by popular demand. You can wear them whenever you wish.",
            credits: -5
          },
          costumes: {
            name: "Costumes",
            description: "Costumes will be provided to you for holidays and special events. These are up to viewer discretion, although there will be a theme for the options in voting.",
            credits: -5
          },
          maid: {
            name: "Maid Outfits",
            description: "You are given a few skimpy maid outfits to wear. Try not to reveal too much on live television, of course.",
            credits: -3
          },
          latex: {
            name: "Bondage Outfits",
            description: "You're given a couple full-latex outfits and some rope-bondage outfits.",
            credits: -5
          },
          pajamas: {
            name: "Cute Pajamas",
            description: "Every night, you get to put on the most adorable pajamas ever. They're soft as silk, but are loose.",
            credits: -3
          },
          bikini: {
            name: "Bikini",
            description: "A bikini, chosen by the viewers. You must have a bikini if you wish to go to the pool.",
            credits: -1
          },
          shoes: {
            name: "Shoes",
            description: "You're given a shoe rack full of shoes, from sneakers to thigh-high boots.",
            credits: -3
          },
          accessories: {
            name: "Jewelry and Accessories",
            description: "You will get to choose pretty jewelry and accessories for all of your outfits.",
            credits: -4
          }
        }
      }
    }
  },
  masters: {
    title: "Masters and Owners",
    description: "Here you will be allowed to choose up to two Owners. Each one is very different, and will occupy your time whenever you're free.",
    optionsets: {
      masters: {
        title: "Masters/Owners",
        choices: 2,
        minimum: 1,
        options: {
          hypno: {
            name: "Hypno",
            description: "With the Pok\xE8mon Hypno as your master, time will fly by quickly. He will take control of you as soon as he gets the chance, using you as his own personal slave. While under his control, you will be forced to do whatever sexual acts he wants. Don't expect him to be nice to your body, as he'll torture you with all of his power, with you only able to remember what he wants you to. Don't expect it to be pleasant.",
            credits: 25
          },
          succubus: {
            name: "Succubus",
            description: "Your new owner is a succubus that sees any and all sexual activity as a battle. She'll beat you until you can't move, then have her way with you, although she has a gentle side that'll nurse you back to health when she's done with you. Her lipstick is an aphrodisiac that'll leave you begging for more. They only way you'll be able to have sex with her -- and not the other way around -- is if you beat her, but be warned: she's very strong. Odds are, the only time you'll have a chance to beat her is during a new moon, when she's at her weakest.",
            credits: 15
          },
          wiifit: {
            name: "Wii Fit Trainer",
            description: "Get ready to get fit. The Wii Fit Trainer will push you harder than you've ever been pushed before. As you complete harder and harder exercise routines, she'll let you do more to her. Although, if you fail to reach your goal, don't expect anything but her alternative work-out, where you'll be forced to drink cum protein shakes and her milk while using a shake weight. She's definitely tough, but as long as you try hard, she'll give you a little encouragement along the way.",
            credits: 10
          },
          sissy: {
            name: "Sissy Trainer Ann",
            description: "Meet your new sissy trainer Ann. She's probably one of the most girly girls in the world, and wants you to be one too. Every minute you're with her she'll be using behavior modification to slowly change you into the perfect girl. Don't expect to get anything from her, since she's only attracted to girly people. If you practice really hard, though, you might just make her want you for more than sissyfication. Although, if it comes to that, you might just find \"her\" dirty little secret.",
            credits: 15
          },
          futadom: {
            name: "Futanari Dominatrix",
            description: "Expect your little asshole to be stretched to its limit after this futanari dominatrix is done with you. This is the most beautiful and perverted dominatrix we could find for the show. She will do anything and everything she can to make you the most submissive slut possible. While she's with you, expect your mouth and asshole to be full of stuff. She's a total top and will only let you get near her cute little behind when you have fully given yourself to her. She also plans to show you off in public, full of toys and in the nude.",
            credits: 20
          },
          horsey: {
            name: "Horsey",
            description: "Aw, look, it's a horsey! Don't plan on being able to mount this horse any time soon. He's a bit upset about how horses are treated, and finally has a human to take it out on. He's constantly in heat and is always looking for someone to impregnate. There are two ways to handle this horsey: You can either become his mate and, over time, he might warm up to you and stop forcing himself upon you every chance he gets, or you can show him who's the alpha of the group and dominate him until he's broken in.",
            credits: 20
          },
          husband: {
            name: "Suitor",
            description: "This man wants to be your husband. Also, he won't do anything you don't want, although he also won't have sex until marriage, and you must remain a virgin and never choose an option that'll cause you to lose your virginity (sex toys and drinking cum are fine, though). He's very gentle, but will, at times, make you squeal in enjoyment everytime he comes near you.",
            credits: 30
          },
          friend: {
            name: "Personal Friend",
            description: "Your new Master is, in fact, someone you know personally. This person will be chosen at random among people that are close to you. We'll come up with a reason for this. They'll be payed according to what they do to you, which means the more gross and perverted things they do, the more money they'll get, so just because they know you, it doesn't mean they'll be lenient.",
            credits: 20
          },
          free: {
            name: "Gentlemen",
            description: "Don't be fooled by their nude-butler outfits, you serve these two, not the other way around. They're gentlemen and will mostly respect boundaries, but seeing as they're men, they may not be able to hold back when they have an urge. They're always together and will make sure to fill both of your holes. They're also very good at smooth talking, and unless you're extremely resistant, they can probably get you to do what they want.",
            credits: 10
          }
        }
      }
    }
  },
  punishment: {
    title: "Punishment/Pleasure",
    description: "Every punishment you pick here will add to your credits.",
    optionsets: {
      punishment: {
        title: "Punishment/Pleasure",
        choices: -1,
        minimum: 0,
        options: {
          buttplug: {
            name: "Buttplug",
            description: "Aren't you lucky? You get to wear a permanent expandable buttplug while on the show. You can only take it off when told.",
            credits: 8
          },
          hormones: {
            name: "Hormones",
            description: "You'll be given new experimental hormone treatment daily, and by the end of the two months, nobody will be able to tell who you are, other than a cute girl.",
            credits: 5
          },
          cumbath: {
            name: "Cum Bath",
            description: "Along with your normal shower you'll be given a cum bath once a week, where you will bathe entirely in cum produced by your viewers.",
            credits: 5
          },
          spanking: {
            name: "Spanking",
            description: "If you don't keep your viewers entertained, you'll be given a spanking until viewer numbers increase.",
            credits: 5
          },
          publictoilet: {
            name: "Public Toilet",
            description: "You're the video crew's new public toilet. This includes other contestants. I'd recommend having a good shower if you choose this.",
            credits: 10
          },
          blindfold: {
            name: "Blindfold",
            description: "Expect to be blindfolded 24/7 while you're not at work. Kind of wasting the beautiful views to be had while living here.",
            credits: 10
          },
          gag: {
            name: "Gag",
            description: "Your mouth will be gagged at all times. You can only remove it when told or when your mouth is being used by other people.",
            credits: 10
          },
          chastity: {
            name: "Chastity Device",
            description: "You're stuck in a chastity device. You can't take this off until the 2 months are over. Not even your owner will be able to take this sucker off until the end.",
            credits: 5
          },
          fat: {
            name: "Fattening",
            description: "During your first two weeks here, you'll be knocked out and fed through a tube in order to force weight gain.",
            credits: 10
          },
          milked: {
            name: "Cock Milking",
            description: "We've got to make some more money somehow. Your cock will be milked every morning and sold, now that you're famous. If you're in chastity, you'll be milked by stimumating your prostate",
            credits: 5
          },
          tinydick: {
            name: "Dick Shrinking",
            description: "Your dick just keeps getting in the way. You'll be given daily shots to your dick that'll shrink it down to 1 inch fully erect by the time two weeks are up.",
            credits: 8
          },
          shame: {
            name: "Public Shaming",
            description: "Whenever you leave your apartment, you'll have to wear a sign around your neck that tells everyone what a whore you are.",
            credits: 5
          },
          pubaddress: {
            name: "Public Address",
            description: "Every friday night, you'll need to give a public address to all of your viewers to thank them for watching your whorish self get fucked.",
            credits: 3
          },
          hair: {
            name: "Hair Growth",
            description: "Thanks to modern science, the hair on your head will grow at amazing rates. You're forever hairless everywhere else on your body, though, except for your eyebrows and eyelashes, of course.",
            credits: 6
          },
          zoo: {
            name: "Zoo Exhibit",
            description: "You'll be shown as an exhibit at the local Zoo once a week. Expect kids to throw shit at you.",
            credits: 10
          },
          feetsies: {
            name: "Feet Cleaner",
            description: "You must clean the feet of every person that steps foot into your house, no matter who. This also includes their dirty shoes.",
            credits: 8
          },
          glassofcum: {
            name: "Glass of Cum",
            description: "You'll be required to drink a full glass of fresh cum before every meal.",
            credits: 5
          },
          breasts: {
            name: "Breast Implants",
            description: "Luckily for you, we have the best breast enlargement specialist in the world working on staff. He'll make sure you get the perfect breasts.",
            credits: 7
          },
          marker: {
            name: "Permanent Marker Shaming",
            description: "We encourage everyone who comes in contact with you to write on you in permanent marker. That stuff won't be coming off for weeks.",
            credits: 4
          },
          boar: {
            name: "Horny Boar",
            description: "Once per week, the crew will randomly place a horny boar in your house. Remember, you're the one who signed the liability contract.",
            credits: 15
          },
          sleeptied: {
            name: "Secure Sleeper",
            description: "Seeing as you're crazy enough to actually go on this game show, we figure we should keep you tied up at night. You know, for your own safety.",
            credits: 7
          }
        }
      }
    }
  }
};

var stat = {
  dickloving: 1,
  womanloving: 4,
  masochism: 3,
  milked: 0,
  zeroindex: 0
};

var vnData = {
  main: "You wake up blah blah blah",
  events: {
    cell: {
      stat: "dickloving",
      array: [
        "hate cell",
        "dislike cell",
        "uncomfortable with cell",
        "neutral towards cell",
        "comfortable with cell",
        "like cell",
        "love cell"
      ]
    },
    futamaid: {
      stat: "dickloving",
      array: [
        "hate futamaid",
        "dislike futamaid",
        "uncomfortable with futamaid",
        "neutral towards futamaid",
        "comfortable with futamaid",
        "like futamaid",
        "love futamaid"
      ]
    },
    wash: {
      stat: "womanloving",
      array: [
        "hate wash",
        "dislike wash",
        "uncomfortable with wash",
        "neutral towards wash",
        "comfortable with wash",
        "like wash",
        "love wash"
      ]
    },
    medium: {
      stat: "staticzero",
      array: [
        "plunger toilet"
      ]
    },
    shithole: {
      stat: "staticzero",
      array: [
        "clean shithole"
      ]
    },
    deli: {
      stat: "dickloving",
      array: [
        "hate deli",
        "dislike deli",
        "uncomfortable with deli",
        "neutral towards deli",
        "comfortable with deli",
        "like deli",
        "love deli"
      ]
    },
    girl: {
      stat: "womanloving",
      array: [
        "hate girl",
        "dislike girl",
        "uncomfortable with girl",
        "neutral towards girl",
        "comfortable with girl",
        "like girl",
        "love girl"
      ]
    },
    publictoilet: {
      stat: "masochism",
      array: [
        "hate publictoilet",
        "dislike publictoilet",
        "uncomfortable with publictoilet",
        "neutral towards publictoilet",
        "comfortable with publictoilet",
        "like publictoilet",
        "love publictoilet"
      ]
    },
    milked: {
      stat: "milked",
      array: [
        "comfortable with milked",
        "like milked",
        "love milked"
      ]
    },
    pubaddress: {
      stat: "masochism",
      array: [
        "hate pubaddress",
        "dislike pubaddress",
        "uncomfortable with pubaddress",
        "neutral towards pubaddress",
        "comfortable with pubaddress",
        "like pubaddress",
        "love pubaddress"
      ]
    },
    zoo: {
      stat: "masochism",
      array: [
        "hate zoo",
        "dislike zoo",
        "uncomfortable with zoo",
        "neutral towards zoo",
        "comfortable with zoo",
        "like zoo",
        "love zoo"
      ]
    },
    cumbath: {
      stat: "dickloving",
      array: [
        "hate cumbath",
        "dislike cumbath",
        "uncomfortable with cumbath",
        "neutral towards cumbath",
        "comfortable with cumbath",
        "like cumbath",
        "love cumbath"
      ]
    },
    enema: {
      stat: "zeroindex",
      array: [
        "uncomfortable with enema"
      ]
    },
    spanking: {
      stat: "masochism",
      array: [
        "hate spanking",
        "dislike spanking",
        "uncomfortable with spanking",
        "neutral towards spanking",
        "comfortable with spanking",
        "like spanking",
        "love spanking"
      ]
    },
    boar: {
      stat: "masochism",
      array: [
        "hate boar",
        "dislike boar",
        "uncomfortable with boar",
        "neutral towards boar",
        "comfortable with boar",
        "like boar",
        "love boar"
      ]
    },
    glassofcum: {
      stat: "dickloving",
      array: [
        "hate glassofcum",
        "dislike glassofcum",
        "uncomfortable with glassofcum",
        "neutral towards glassofcum",
        "comfortable with glassofcum",
        "like glassofcum",
        "love glassofcum"
      ]
    },
    feetsies: {
      stat: "masochism",
      array: [
        "hate feetsies",
        "dislike feetsies",
        "uncomfortable with feetsies",
        "neutral towards feetsies",
        "comfortable with feetsies",
        "like feetsies",
        "love feetsies"
      ],
      buttons: [
        {
          text: "Continue",
          onclick: "continue"
        }
      ]
    },
    replacetest: {
      stat: "zeroindex",
      array: [
        "She played with my [[penislength]], [[penisdescription]] penis."
      ]
    }
  }
};

var replace = {
  
};

function getRand(){
  return this.array[Math.floor(Math.random()*this.array.length)];
}

var x;
for (x in replace){
  replace[x].getRand = getRand;
}

