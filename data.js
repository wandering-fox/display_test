var APP_DATA = {
  "scenes": [
    {
      "id": "0-panorama",
      "name": "Panorama",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3555154520896788
      },
      "linkHotspots": [
        {
          "yaw": -0.17445237865573304,
          "pitch": -0.013028357779946376,
          "rotation": 0,
          "target": "2-scene-10"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-scene-9",
      "name": "Scene 9",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9520127791305875,
          "pitch": 0.05627090754424735,
          "rotation": 0,
          "target": "2-scene-10"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-scene-10",
      "name": "Scene 10",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.918098439840909,
        "pitch": -0.04122622661788711,
        "fov": 1.3555154520896788
      },
      "linkHotspots": [
        {
          "yaw": -1.5686120785054243,
          "pitch": 0.03633217840194547,
          "rotation": 0,
          "target": "1-scene-9"
        },
        {
          "yaw": 0.053398023079147094,
          "pitch": 0.03199902858511017,
          "rotation": 0,
          "target": "0-panorama"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
