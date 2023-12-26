import { HttpResponse, http } from "msw";
const getCarsResponse = [
  {
    "id": "5b67f1d7-92d4-41c7-8577-4435740aadf1",
    "plate": "VPT-9753",
    "manufacture": "BMW",
    "model": "M5",
    "image":
      "https://res.cloudinary.com/dwy823csd/image/upload/v1702571275/ww97oz5wyxgjlhhpgm1q.jpg",
    "rentPerDay": 900000,
    "capacity": 6,
    "description": ' 6.1L SRT V8 "Hemi" engine.',
    "availableAt": "2023-12-17T09:00:00.000Z",
    "transmission": "Manual",
    "available": true,
    "type": "Hatchback",
    "driver": false,
    "year": 2018,
    "options": [
      "Alloy Wheels",
      "Power Locks",
      "A/C: Rear",
      "MP3 (Single Disc)",
      "Airbag: Driver",
      "A/C: Front",
      "Tinted Glass",
      "Alloy Wheels",
      "Alarm"
    ],
    "specs": [
      '6.1L SRT V8 "Hemi" engine',
      "Multi-info display -inc: driving range, average MPG, current MPG, average speed, outside temp, elapsed time, maintenance & diagnostic messages",
      "Front & rear passenger folding assist grips",
      "Electronic throttle control system w/intelligence (ETCS-i)",
      "Pwr tilt/slide moonroof -inc: 1-touch open/close",
      "Acoustic glass windshield"
    ],
    "created_at": "2023-12-14T14:15:10.031Z",
    "updated_at": "2023-12-14T16:27:54.249Z",
    "deleted_at": null,
    "created_by": 1,
    "updated_by": 1,
    "deleted_by": null
  },
  {
    "id": "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
    "plate": "BHD-3923",
    "manufacture": "Lincoln",
    "model": "Navigator",
    "image":
      "https://res.cloudinary.com/dwy823csd/image/upload/v1702571290/hokn7rmzltfubzbkjkdm.jpg",
    "rentPerDay": 200000,
    "capacity": 2,
    "description":
      " Body color sill extension. Torsion beam rear suspension w/stabilizer bar. Front & rear passenger folding assist grips.",
    "availableAt": "2023-12-21T06:00:00.000Z",
    "transmission": "Automatic",
    "available": false,
    "type": "Minivan",
    "driver": true,
    "year": 2020,
    "options": [
      "CD (Multi Disc)",
      "Cruise Control",
      "Power Locks",
      "Alloy Wheels",
      "Tow Package"
    ],
    "specs": [
      "Body color sill extension",
      "Torsion beam rear suspension w/stabilizer bar",
      "Front & rear passenger folding assist grips",
      "Electronic control braking (ECB)",
      "Black windshield molding"
    ],
    "created_at": "2023-12-14T14:15:10.031Z",
    "updated_at": "2023-12-14T16:28:08.509Z",
    "deleted_at": null,
    "created_by": 1,
    "updated_by": 1,
    "deleted_by": null
  },
  {
    "id": "9ff03bbc-b18c-4ba7-8f3a-4c4b5c2f6c77",
    "plate": "WXB-3984",
    "manufacture": "BMW 2",
    "model": "X5",
    "image":
      "https://res.cloudinary.com/dwy823csd/image/upload/v1703479460/q9e72kpmklezefah2gim.png",
    "rentPerDay": 800000,
    "capacity": 6,
    "description":
      " Rear passenger map pockets. Electrochromic rearview mirror. Dual chrome exhaust tips. Locking glove box.",
    "availableAt": "2023-12-20T08:00:00.000Z",
    "transmission": "Automatic",
    "available": false,
    "type": "Convertible",
    "driver": false,
    "year": 2019,
    "options": [
      "Keyless Entry",
      "Power Windows",
      "MP3 (Single Disc)",
      "CD (Multi Disc)",
      "Navigation"
    ],
    "specs": [
      "Rear passenger map pockets",
      "Electrochromic rearview mirror",
      "Dual chrome exhaust tips",
      "Locking glove box",
      "Pwr front vented disc/rear drum brakes"
    ],
    "created_at": "2023-12-14T14:15:10.031Z",
    "updated_at": "2023-12-25T04:44:20.060Z",
    "deleted_at": null,
    "created_by": 1,
    "updated_by": 1,
    "deleted_by": null
  }
];

export const getCars = http.get(
  "https://bcr-restapi-mario.fly.dev/api/cars",
  (): HttpResponse => {
    return HttpResponse.json(getCarsResponse);
  }
);

export const responseLogin = {
  token:
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJzdXBlcmFkbWluIiwiZW1haWwiOiJzdXBlcmFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJzdXBlcmFkbWluIiwiaWF0IjoxNzAzNDgzNDg1LCJleHAiOjE3MDM0ODUyODV9.Xs5xKgIltKrmfN_yn49vVSOr6yauI3GiyO8e5qgeQnq5hcnKvwXyJOtTo0TLcM8zPNj2suJ8_97XHHaVFTwIiZABoNLZfXrlCsFXBBpFLUY9cQIkWpPRNbc5krtaW_je_stOi9a8NAUgFLIiHwJg2ajPqk8TbtQKC2tmU5bmzrfuyje395RYnwZMg8Bvg7bCUtr8JC0kSk4_51e88c654TNz-dQlR0usc6mOg3adICozhN8Rn3YOiCExXz9bjcDNw0Gxzh5eejN8K65UmofmOQonGPl4fqw7g3s2hQMmcCdS5tN2EcUcBPf01XF7HAJcIFEovyTv40EJEYWVMyMtGJwbWgWCNGOHean71WPcX-Zkih5RVMo2u8qRrgTbv2-nePGgDDW4nixVJiJeJdTk4AV4Zgd8l-4AwRtu2BSVPHaaPnHsm2WIKB7OJS7c6EhuBQYJAIi9aYQSrU6PmDLdh9v_6xAlRpQGRPMFQ_A7odBUyAOS5VDfaU7OZZJob-ZFQOC3lqta4PJ7_1v3pyfIhILd3dgeMmljIQvXiimYNwMZHDxe_K3PpVcf9966kQF0dAo-F8-IAibkaGNVcysZFR14uu6b0-nuwD2er8mQJb-kqbfUiLZA8fmFylYZWohz-5ygTJ0VlPsYWuaEKXarPD7JjkECSqXBqTPTiZdOgS0"
};

export const filterCar = http.get(
  "https://bcr-restapi-mario.fly.dev/cars",
  (): HttpResponse => {
    return HttpResponse.json(getCarsResponse);
  }
);

export const login = http.post(
  "https://bcr-restapi-mario.fly.dev/login",
  (): HttpResponse => {
    return HttpResponse.json(responseLogin);
  }
);

export const protectedRest = http.get(
  "https://bcr-restapi-mario.fly.dev/protected",
  (): HttpResponse => {
    return HttpResponse.json({
      message: "token valid",
      status: 200
    });
  }
);

export const createCar = http.post(
  "https://bcr-restapi-mario.fly.dev/api/cars",
  (): HttpResponse => {
    return HttpResponse.json(
      { id: "fc1d3297-ab17-40a9-a79c-ca7307ed5faa" },
      { status: 200 }
    );
  }
);

export const updateCar = http.patch(
  "https://bcr-restapi-mario.fly.dev/api/cars/5b67f1d7-92d4-41c7-8577-4435740aadf1",
  (): HttpResponse => {
    return HttpResponse.json(
      {
        ...getCarsResponse[0],
        image:
          "https://res.cloudinary.com/dwy823csd/image/upload/v1703613900/avkwc15fz9fledfgikri.jpg"
      },
      { status: 200 }
    );
  }
);
