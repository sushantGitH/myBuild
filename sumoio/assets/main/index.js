System.register("chunks:///_virtual/Sumo.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "0fdf8q6ZkdKKqNd//UiftTG", "Sumo", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /**
       * Predefined variables
       * Name = Sumo
       * DateTime = Sun Sep 26 2021 01:21:34 GMT+0530 (India Standard Time)
       * Author = shashankA
       * FileBasename = Sumo.ts
       * FileBasenameNoExtension = Sumo
       * URL = db://assets/Script/Sumo.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      var Sumo = exports('Sumo', (_dec = ccclass('Sumo'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Sumo, _Component);

        function Sumo() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = Sumo.prototype; // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;

        _proto.start = function start() {// systemEvent.on(SystemEvent.EventType.TOUCH_START, this.touchStart, this);
          // systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.touchMove, this);
        };

        _proto.touchStart = function touchStart(touch) {};

        _proto.getSumoNode = function getSumoNode() {
          return this.node;
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return Sumo;
      }(Component)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MenuController.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _defineProperty, _assertThisInitialized, _initializerDefineProperty, cclegacy, _decorator, EditBox, Node, macro, director, systemEvent, SystemEvent, Vec3, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EditBox = module.EditBox;
      Node = module.Node;
      macro = module.macro;
      director = module.director;
      systemEvent = module.systemEvent;
      SystemEvent = module.SystemEvent;
      Vec3 = module.Vec3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "16e06lwqwJFjJauKigdojGv", "MenuController", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var MenuController = exports('MenuController', (_dec = ccclass('MenuController'), _dec2 = property({
        type: EditBox
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MenuController, _Component);

        function MenuController() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "startLoc", void 0);

          _defineProperty(_assertThisInitialized(_this), "startZ", void 0);

          _initializerDefineProperty(_assertThisInitialized(_this), "currentLevel", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "sumo", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = MenuController.prototype;

        _proto.onLoad = function onLoad() {
          if (typeof window['gameManager'] !== "undefined") {
            try {
              window['gameManager'].onGameStart();
            } catch (err) {
              window['gameManager'].onError(err.stack.toString());
            }
          }

          macro.ENABLE_MULTI_TOUCH = false;
          director.preloadScene('GameScene');
          this.currentLevel.node.on('text-changed', this.botMinSizeEnded, this);
          if (window.localStorage.getItem("currentLevel") == null || window.localStorage.getItem("currentLevel") == undefined) window.localStorage.setItem("currentLevel", "0");
          this.currentLevel.string = window.localStorage.getItem("currentLevel");
        };

        _proto.start = function start() {
          // Created for rotating the character
          systemEvent.on(SystemEvent.EventType.TOUCH_START, this.touchStart, this);
          systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.touchMove, this);
        };

        _proto.touchStart = function touchStart(touch) {
          this.startLoc = touch.getLocation();
          this.startZ = this.sumo.rotation.getEulerAngles(new Vec3()).z;
        };

        _proto.touchMove = function touchMove(touch) {
          var loc = touch.getLocationX();
          var dist = this.startLoc.x - loc; // let angle = clamp(dist, -360, 360);
          // let endQuat = Quat.fromEuler(new Quat(), -90, 0, angle);

          this.sumo.setRotationFromEuler(-90, 0, this.startZ + dist);
        };

        _proto.startGame = function startGame() {
          director.loadScene('GameScene');
        };

        _proto.onDestroy = function onDestroy() {
          systemEvent.off(SystemEvent.EventType.TOUCH_START, this.touchStart, this);
          systemEvent.off(SystemEvent.EventType.TOUCH_MOVE, this.touchMove, this);
        };

        _proto.botMinSizeEnded = function botMinSizeEnded(editbox) {
          console.log("onTextChanged");
          window.localStorage.setItem(editbox.node.name, editbox.string);
        };

        return MenuController;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "currentLevel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sumo", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Gummy.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, Quat, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Quat = module.Quat;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "2be5eRvXYVF0LgrrJn5x1sj", "Gummy", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /**
       * Predefined variables
       * Name = Gummy
       * DateTime = Mon Oct 18 2021 05:38:37 GMT+0530 (India Standard Time)
       * Author = shashankA
       * FileBasename = Gummy.ts
       * FileBasenameNoExtension = Gummy
       * URL = db://assets/Script/gameScene/objects/Gummy.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      var Gummy = exports('Gummy', (_dec = ccclass('Gummy'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Gummy, _Component);

        function Gummy() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "currAngle", 2);

          return _this;
        }

        var _proto = Gummy.prototype;

        _proto.start = function start() {
          /* tween(this._pos)
              .to(3, new Vec3(10, 10, 10), { easing: 'bounceInOut' })
              .to(3, new Vec3(0, 0, 0), { easing: 'elasticOut' })
              .union()
              .repeat(2) // 执行 2 次
              .start(); */
        };

        _proto.update = function update(deltaTime) {
          // this.currAngle = this.node.rotation.getEulerAngles(new Vec3()).y;
          this.node.rotation = Quat.rotateY(new Quat(), this.node.rotation, this.currAngle * Math.PI / 180);
        };

        return Gummy;
      }(Component), _temp)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Config.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "392b7gsXL9LSaxxkxkfDxSp", "Config", undefined);

      var Constants = exports('Constants', {
        "initialiserTimeOut": 10,
        "serverInfo": {
          "resultEndPoint": {
            "dev": "https://mxgamesapi.dev.mxplay.com/v1/game/result",
            "prod": "https://mxgamesapi.mxplay.com/v1/game/result"
          },
          "serverUrlEndPoint": {
            "dev": "wss://zatsvu.colyseus.in/",
            "prod": "wss://iy5aen.colyseus.in/"
          },
          "isProd": false
        },
        "purchases": {
          "powerup": 20,
          "extraLife": 40
        },
        "totalRating": 9,
        "noOfCharacterInMap": 4,
        "autoLoadAdEnabled": true,
        "stickyBannersEnabled": false,
        "ads": {
          "showStartAdOdd": 1,
          "adTimerInSec": 6
        },
        "stickyAds": {
          "adUnit": "/21723553151/Test/Test_MXplayer_Local_Native_Banner2",
          "adHeight": 50,
          "adWidth": 320,
          "adRefreshDuration": 30
        },
        "scoringMultiplayer": {
          "winningPoint": 200,
          "quittingPoint": -50,
          "losingPoint": -20
        }
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BotController.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, Vec3, instantiate, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      instantiate = module.instantiate;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "405c9cWsTlBYZLDhu8Tavvx", "BotController", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BotController = exports('BotController', (_dec = ccclass('BotController'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BotController, _Component);
        /**
         *
         */


        function BotController(gameController) {
          var _this;

          _this = _Component.call(this) || this;

          _defineProperty(_assertThisInitialized(_this), "_botArrayList", []);

          _defineProperty(_assertThisInitialized(_this), "playerCamera", void 0);

          _defineProperty(_assertThisInitialized(_this), "botRotation", [new Vec3(0, 0, 0), new Vec3(0, 45, 0), new Vec3(0, -45, 0), new Vec3(0, 135, 0), new Vec3(0, -135, 0)]);

          _defineProperty(_assertThisInitialized(_this), "_gameController", void 0);

          _this._gameController = gameController;
          return _this;
        }

        var _proto = BotController.prototype;

        _proto.start = function start() {};

        _proto.addBots = function addBots(bot, name, player) {
          var totalBots = this._gameController.gameData.totalBotPresent;
          var easyBot = this._gameController.gameData.easyBot;
          var mediumBot = this._gameController.gameData.mediumBot;
          var hardBot = this._gameController.gameData.hardBot;

          for (var i = 0; i < totalBots; i++) {
            var bot1 = instantiate(bot);
            bot1.getComponent("Bot")._playerList = this._botArrayList;
            bot1.getComponent("Bot").playerCamera = this.playerCamera;
            bot1.getComponent("Bot").addName(name, this._gameController.getWorld(), this._gameController);

            this._gameController.addToWorld(bot1);

            bot1.setPosition(this._gameController.gameData.position[i]);
            bot1.eulerAngles = this._gameController.gameData.angle[totalBots - 1 - i];

            this._botArrayList.push(bot1);

            if (easyBot > 0) {
              easyBot--;
              bot1.getComponent("Bot").setProperties("easy");
            } else if (mediumBot > 0) {
              mediumBot--;
              bot1.getComponent("Bot").setProperties("medium");
            } else if (hardBot > 0) {
              hardBot--;
              bot1.getComponent("Bot").setProperties("hard");
            }
          }

          this._botArrayList.push(player);
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return BotController;
      }(Component), _temp)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameController.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './BotController.ts', './GameConfig.ts', './PowerUpController.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Label, Prefab, Node, Vec2, instantiate, Vec3, CapsuleCollider, Component, BotController, GameConfig, PowerUpController;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Prefab = module.Prefab;
      Node = module.Node;
      Vec2 = module.Vec2;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      CapsuleCollider = module.CapsuleCollider;
      Component = module.Component;
    }, function (module) {
      BotController = module.BotController;
    }, function (module) {
      GameConfig = module.GameConfig;
    }, function (module) {
      PowerUpController = module.PowerUpController;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp;

      cclegacy._RF.push({}, "48d51HOjkBIObFppQAdshF3", "GameController", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GameController = exports('GameController', (_dec = ccclass('GameController'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Prefab
      }), _dec5 = property({
        type: Prefab
      }), _dec6 = property({
        type: Prefab
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameController, _Component);

        function GameController() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "debugLabel", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "player", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "bot", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "gummyBear", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "namePrefab", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "playerCamera", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "platform", _descriptor7, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "playerClass", void 0);

          _defineProperty(_assertThisInitialized(_this), "botController", void 0);

          _defineProperty(_assertThisInitialized(_this), "powerupController", void 0);

          _defineProperty(_assertThisInitialized(_this), "world", void 0);

          _defineProperty(_assertThisInitialized(_this), "gameData", void 0);

          return _this;
        }

        var _proto = GameController.prototype;

        _proto.start = function start() {
          this.world = this.node.getParent();
          var currentLevel = parseInt(window.localStorage.getItem("currentLevel"));
          var actualPlayerCount = 1;
          var totalBotPresent = GameConfig.gameplay["default"].noOfBotsInGame - actualPlayerCount;
          var easyBot = this.getPercentage(GameConfig.gameplay["default"].botsProbabilty.easy * 100, totalBotPresent);
          var mediumBot = this.getPercentage(GameConfig.gameplay["default"].botsProbabilty.medium * 100, totalBotPresent);
          var hardBot = this.getPercentage(GameConfig.gameplay["default"].botsProbabilty.hard * 100, totalBotPresent);

          if (currentLevel < GameConfig.gameplay.levels.length) {
            totalBotPresent = GameConfig.gameplay.levels[currentLevel].noOfBotsInGame - actualPlayerCount;
            easyBot = this.getPercentage(GameConfig.gameplay.levels[currentLevel].botsProbabilty.easy * 100, totalBotPresent);
            mediumBot = this.getPercentage(GameConfig.gameplay.levels[currentLevel].botsProbabilty.medium * 100, totalBotPresent);
            hardBot = this.getPercentage(GameConfig.gameplay.levels[currentLevel].botsProbabilty.hard * 100, totalBotPresent);
          }

          while (easyBot + mediumBot + hardBot != totalBotPresent) {
            if (easyBot > 0) easyBot -= 1;else if (mediumBot > 0) mediumBot -= 1;else if (hardBot > 0) hardBot -= 1;
          }

          this.debugLabel.string = "current Level " + currentLevel + "\n totalBotPresent " + totalBotPresent + "\n easyBot " + easyBot + "\n mediumBot " + mediumBot + "\n hardBot " + hardBot;
          var playerPosition = this.DrawCirclePoints(totalBotPresent, 10, new Vec2(0, 0));
          var angle = this.getAngleForPlayer(360, totalBotPresent);
          var ob1 = {
            "currentLevel": currentLevel,
            "actualPlayerCount": actualPlayerCount,
            "totalBotPresent": totalBotPresent,
            "easyBot": easyBot,
            "mediumBot": mediumBot,
            "hardBot": hardBot,
            "position": playerPosition,
            "angle": angle
          };
          this.gameData = Object.assign({}, ob1); // Adding Player

          var player = instantiate(this.player);
          this.addToWorld(player);
          player.setPosition(new Vec3(0, 0.5, 15));
          this.playerClass = player.getComponent('Player');
          this.playerClass.setCamera(this.playerCamera, this);
          this.playerClass.addName(this.namePrefab, this.world); // Adding bots

          this.botController = new BotController(this);
          this.botController.playerCamera = this.playerClass.playerCamera;
          this.botController.addBots(this.bot, this.namePrefab, player); // Adding Eatables

          this.powerupController = new PowerUpController(this);
          this.powerupController.setEatables([this.gummyBear]);
          this.powerupController.spawnPowerup("GummyBear"); // Adding Player Collider

          var collider = player.getComponent(CapsuleCollider);
          collider.on('onCollisionEnter', this.onCollision, this);
        };

        _proto.addToWorld = function addToWorld(child) {
          this.world.addChild(child);
        };

        _proto.getWorld = function getWorld() {
          return this.world;
        };

        _proto.onCollision = function onCollision(event) {
          var otherCollider = event.otherCollider;

          if (otherCollider.node.name == 'spaceStation') {
            this.playerClass.moveStationCamera();
            return;
          }

          if (otherCollider.node.name == 'deathPlatform') {
            this.playerClass.resetStationCamera();
            return;
          }

          if (otherCollider.node.name == 'Platform') {
            return;
          }

          if (otherCollider.node.name == 'GummyBear') {
            // if (this.playerClass.lastColliderId != otherCollider.uuid) {
            this.powerupController.removeGummy(otherCollider);
            var gainValue = GameConfig.powerup[otherCollider.node.name].gain;
            this.playerClass.resize(gainValue); //     this.playerClass.lastColliderId = otherCollider.uuid;
            // }
          } else if (otherCollider.node.name == 'Bot') {
            this.playerClass._onCollisionEnter(event);
          }
        };

        _proto.touchCallBack = function touchCallBack(vector, angle) {
          this.playerClass.touchCallBack(vector, angle);
        };

        _proto.touchAngleCallBack = function touchAngleCallBack(vector, angle) {
          this.playerClass.touchAngleCallBack(vector, angle);
        };

        _proto.getPercentage = function getPercentage(percentToGet, number) {
          return Math.ceil(percentToGet / 100 * number);
        };

        _proto.DrawCirclePoints = function DrawCirclePoints(points, radius, center) {
          var pointArray = [];
          var slice = 2 * Math.PI / points;

          for (var i = 0; i < points; i++) {
            var angle = slice * i;
            var newX = Number(center.x + radius * Math.cos(angle));
            var newY = Number(center.y + radius * Math.sin(angle));
            var p = new Vec3(newX, 0.5, newY);
            pointArray.push(p);
          }

          return pointArray;
        };

        _proto.getAngleForPlayer = function getAngleForPlayer(num, parts) {
          var arrayData = this.getsplitRange(num, parts);
          var angleData = [];
          var previousAngle = 0;

          for (var i = 0; i < arrayData.length; i++) {
            var p = new Vec3(0, previousAngle, 0);
            previousAngle += arrayData[i];
            angleData.push(p);
          }

          return angleData;
        };

        _proto.getsplitRange = function getsplitRange(num, parts) {
          var n = Math.floor(num / parts);
          var arr = [];

          for (var i = 0; i < parts; i++) {
            arr.push(n);
          }

          if (arr.reduce(function (a, b) {
            return a + b;
          }, 0) === num) {
            return arr;
          }

          for (var _i = 0; _i < parts; _i++) {
            arr[_i]++;

            if (arr.reduce(function (a, b) {
              return a + b;
            }, 0) === num) {
              return arr;
            }
          }
        };

        return GameController;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "debugLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "player", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bot", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gummyBear", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "namePrefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "playerCamera", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "platform", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameUIController.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _defineProperty, _assertThisInitialized, _initializerDefineProperty, cclegacy, _decorator, EventHandler, Label, Node, Vec3, macro, director, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EventHandler = module.EventHandler;
      Label = module.Label;
      Node = module.Node;
      Vec3 = module.Vec3;
      macro = module.macro;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;

      cclegacy._RF.push({}, "62ee6KEwbpJNKAJo5TmXRgo", "GameUIController", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /**
       * Predefined variables
       * Name = GameUIController
       * DateTime = Tue Sep 28 2021 19:04:24 GMT+0530 (India Standard Time)
       * Author = shashankA
       * FileBasename = GameUIController.ts
       * FileBasenameNoExtension = GameUIController
       * URL = db://assets/Script/GameUIController.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      var GameUIController = exports('GameUIController', (_dec = ccclass('GameUIController'), _dec2 = property({
        type: [EventHandler],
        tooltip: 'Touch Drag'
      }), _dec3 = property({
        type: Label
      }), _dec4 = property({
        type: Label
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameUIController, _Component);

        function GameUIController() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "startLoc", void 0);

          _initializerDefineProperty(_assertThisInitialized(_this), "touchEventCallBack", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "socketConnection", void 0);

          _initializerDefineProperty(_assertThisInitialized(_this), "pauseLabel", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "isPaused", void 0);

          _initializerDefineProperty(_assertThisInitialized(_this), "botLabel", _descriptor3, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = GameUIController.prototype;

        _proto.start = function start() {
          this.node.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
          this.node.on(Node.EventType.TOUCH_START, this.touchStart, this);
          this.node.on(Node.EventType.TOUCH_END, this.touchEnded, this);
          window.localStorage.setItem("isStopped", "1");
        };

        _proto.onConnect = function onConnect() {};

        _proto.touchMove = function touchMove(touch) {
          /*  
          ***** Do not delete this commented code
           let loc = touch.getUILocation();
          let pos = this.node.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(loc.x, loc.y));
          let angle = Math.atan2(pos.y, pos.x);
          this.touchEventCallBack.forEach(c => c.emit([pos, angle * macro.DEG])); 
          */
          var loc = touch.getLocation();
          var pos = new Vec3(loc.x - this.startLoc.x, loc.y - this.startLoc.y);
          var mag = Math.sqrt(pos.x * pos.x + pos.y * pos.y);

          if (mag > 200) {
            this.startLoc = this.startLoc.lerp(loc, 0.9);
            pos = new Vec3(loc.x - this.startLoc.x, loc.y - this.startLoc.y);
          }

          var angle = this.get_angle(this.startLoc.x, this.startLoc.y, loc.x, loc.y);
          this.touchEventCallBack.forEach(function (c) {
            return c.emit([pos, angle]);
          });
        };

        _proto.touchEnded = function touchEnded(touch) {
          this.touchEventCallBack.forEach(function (c) {
            return c.emit([new Vec3(0, 0, 0)]);
          });
        };

        _proto.touchStart = function touchStart(touch) {
          this.startLoc = touch.getLocation();
          this.touchMove(touch);
        };

        _proto.get_angle = function get_angle(cx, cy, ex, ey) {
          var dy = ey - cy;
          var dx = ex - cx;
          var theta = Math.atan2(dy, dx); // theta *= 180 / Math.PI;

          return theta * macro.DEG;
        };

        _proto.restartGame = function restartGame() {
          director.loadScene('GameScene');
        };

        _proto.pauseScreen = function pauseScreen() {
          if (this.isPaused) {
            this.pauseLabel.string = "Paused";
            director.resume();
          } else {
            this.pauseLabel.string = "Resume";
            director.pause();
          }

          this.isPaused = !this.isPaused;
        };

        _proto.stopBotScreen = function stopBotScreen() {
          if (parseInt(window.localStorage.getItem("isStopped"))) {
            this.botLabel.string = "bot Resumed";
            window.localStorage.setItem("isStopped", "0");
          } else {
            this.botLabel.string = "bot Paused";
            window.localStorage.setItem("isStopped", "1");
          }
        };

        return GameUIController;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "touchEventCallBack", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pauseLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "botLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Bot.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GameConfig.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, geometry, Prefab, Vec3, instantiate, Label, SkeletalAnimationComponent, RigidBody, CapsuleCollider, RigidBodyComponent, tween, randomRange, Vec2, PhysicsSystem, Component, GameConfig;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      geometry = module.geometry;
      Prefab = module.Prefab;
      Vec3 = module.Vec3;
      instantiate = module.instantiate;
      Label = module.Label;
      SkeletalAnimationComponent = module.SkeletalAnimationComponent;
      RigidBody = module.RigidBody;
      CapsuleCollider = module.CapsuleCollider;
      RigidBodyComponent = module.RigidBodyComponent;
      tween = module.tween;
      randomRange = module.randomRange;
      Vec2 = module.Vec2;
      PhysicsSystem = module.PhysicsSystem;
      Component = module.Component;
    }, function (module) {
      GameConfig = module.GameConfig;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "77e533EezxA/6Pf2Q54j4sW", "Bot", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CELL_TIME = 0.016;
      var MAXDISTANCE = 0;
      var STATE = {
        IDLE: 0,
        WALK: 1,
        BUMP: 2
      };
      var Ray = geometry.Ray;
      var Bot = exports('Bot', (_dec = ccclass('Bot'), _dec2 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Bot, _Component);

        function Bot() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "prefabPoint", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_charName", "Sam");

          _defineProperty(_assertThisInitialized(_this), "_now_time", 0);

          _defineProperty(_assertThisInitialized(_this), "_movement", Vec3.ZERO);

          _defineProperty(_assertThisInitialized(_this), "_skeletal", void 0);

          _defineProperty(_assertThisInitialized(_this), "_currentState", STATE.IDLE);

          _defineProperty(_assertThisInitialized(_this), "_ray", new geometry.Ray());

          _defineProperty(_assertThisInitialized(_this), "_maxDistance", 1000);

          _defineProperty(_assertThisInitialized(_this), "_mask", 0xffffffff);

          _defineProperty(_assertThisInitialized(_this), "player", null);

          _defineProperty(_assertThisInitialized(_this), "_posArray", []);

          _defineProperty(_assertThisInitialized(_this), "_posObstacleArray", []);

          _defineProperty(_assertThisInitialized(_this), "_posPoolObstacleArray", []);

          _defineProperty(_assertThisInitialized(_this), "_playerList", []);

          _defineProperty(_assertThisInitialized(_this), "playerName", void 0);

          _defineProperty(_assertThisInitialized(_this), "playerCamera", void 0);

          _defineProperty(_assertThisInitialized(_this), "lastColliderId", void 0);

          _defineProperty(_assertThisInitialized(_this), "isReady", false);

          _defineProperty(_assertThisInitialized(_this), "mass", 1);

          _defineProperty(_assertThisInitialized(_this), "_vector", Vec3.ZERO);

          _defineProperty(_assertThisInitialized(_this), "gameController", void 0);

          _defineProperty(_assertThisInitialized(_this), "powerUpController", void 0);

          _defineProperty(_assertThisInitialized(_this), "eatTimeout", null);

          _defineProperty(_assertThisInitialized(_this), "currentDistance", null);

          _defineProperty(_assertThisInitialized(_this), "_maxWallDistance", 20);

          _defineProperty(_assertThisInitialized(_this), "_curentFollowingNode", null);

          _defineProperty(_assertThisInitialized(_this), "botType", "");

          _defineProperty(_assertThisInitialized(_this), "initialSize", 0);

          _defineProperty(_assertThisInitialized(_this), "botMaxSize", 0);

          _defineProperty(_assertThisInitialized(_this), "botStartSpeed", 0);

          _defineProperty(_assertThisInitialized(_this), "botEndSpeed", 0);

          _defineProperty(_assertThisInitialized(_this), "maxScale", 0);

          _defineProperty(_assertThisInitialized(_this), "currentScale", 0);

          _defineProperty(_assertThisInitialized(_this), "speed", 0);

          return _this;
        }

        var _proto = Bot.prototype;

        _proto.addName = function addName(namePrefab, world, gameController) {
          this.playerName = instantiate(namePrefab);
          this.playerName.getComponent(Label).string = this._charName;
          world.addChild(this.playerName);
          this.gameController = gameController;
        };

        _proto.updateNameData = function updateNameData() {
          this._charName = "bottype " + this.botType + " \n botMaxSize " + this.maxScale.toFixed(2) + " \n botEndSpeed " + this.botEndSpeed.toFixed(2) + " \n currentScale " + this.currentScale.toFixed(2) + " \n speed " + this.speed.toFixed(2);
          this.playerName.getComponent(Label).string = this._charName;
        };

        _proto.updateNamePos = function updateNamePos() {
          var namePos = this.node.getPosition();
          this.playerName.setPosition(new Vec3(namePos.x, this.playerName.position.y, namePos.z));
          this.playerName.eulerAngles = new Vec3(this.playerCamera.eulerAngles.x, 0, 0);
        };

        _proto.setProperties = function setProperties(botType) {
          this.botType = botType;
          this.initialSize = GameConfig.bot.initialSize;
          this.botMaxSize = GameConfig.bot.botMaxSize;
          this.botStartSpeed = GameConfig.bot.botConfig[this.botType].botStartSpeed;
          this.botEndSpeed = GameConfig.bot.botConfig[this.botType].botStartSpeed;
          this._skeletal = this.node.getComponent(SkeletalAnimationComponent);
          this.setIdleStateAnimation();
          this.currentScale = GameConfig.bot.initialSize;
          this.node.scale.set(this.currentScale, this.currentScale, this.currentScale);
          this.maxScale = GameConfig.bot.botMaxSize;
          this.mass = this.node.getComponent(RigidBody).mass;
          this.updateSpeed();
          this.updateNameData();
          this.updateNamePos();
        };

        _proto.updateSpeed = function updateSpeed() {
          this.speed = this.getNewModifiedSpeed(this.currentScale);
          console.log("bot speed    " + this.speed);
          this.changeWalkAnimationSpeed(this.speed);
          this.updateNameData();
        };

        _proto.start = function start() {
          var collider = this.node.getComponent(CapsuleCollider);
          collider.on('onCollisionEnter', this._onCollisionEnter, this);
        };

        _proto.removeAllHud = function removeAllHud() {
          this.gameController.getWorld().removeChild(this.playerName);
        };

        _proto._onCollisionEnter = function _onCollisionEnter(event) {
          var otherCollider = event.otherCollider;

          if (otherCollider.node.name == 'Platform') {
            return;
          }

          if (otherCollider.node.name == 'deathPlatform') {
            // console.log(this._playerList.length);
            var oppScript = event.selfCollider.node.getComponent("Bot") == null ? event.selfCollider.node.getComponent("Player") : event.selfCollider.node.getComponent("Bot");
            oppScript.removeAllHud();
            this.removeObjectFromArray(this._playerList, event.selfCollider.node); // console.log(this._playerList.length);

            this.gameController.getWorld().removeChild(event.selfCollider.node);
            return;
          }

          if (otherCollider.node.name == 'GummyBear') {
            // if (this.lastColliderId != otherCollider.uuid) {
            this.gameController.powerupController.removeGummy(otherCollider);
            var gainValue = GameConfig.powerup[otherCollider.node.name].gain;
            this.resize(gainValue); // this.lastColliderId = otherCollider.uuid;
            // }
          } else if (otherCollider.node.name == 'Player' || otherCollider.node.name == 'Bot') {
            this.setBumpStateAnimation();
            this.getComponent(RigidBodyComponent).clearVelocity();
            var pos = new Vec3(this.node.getPosition().x - otherCollider.node.getPosition().x, this.node.getPosition().z - otherCollider.node.getPosition().z);

            var _vector = pos.normalize();

            var bumpValue = this.getBumpValue(otherCollider.node);
            var isBumpedOnBack = this.checkDidBumpedOnBck(otherCollider.node);
            console.log("bot     " + this._charName + "     " + isBumpedOnBack);
            this.getComponent(RigidBodyComponent).applyImpulse(new Vec3(_vector.x * bumpValue, 0, _vector.y * bumpValue));
          }
        };

        _proto.resize = function resize(gain) {
          var _this2 = this;

          this.setEatbleAnimation();

          if (this.currentScale <= this.maxScale) {
            this.currentScale += gain;
            this.node.getComponent(RigidBody).mass += 0.5;
            tween(this.node.scale).to(1, new Vec3(this.currentScale, this.currentScale, this.currentScale)).call(function () {
              _this2.updateSpeed();
            }).start();
            tween(this.playerName.position).to(1, {
              y: this.playerName.position.y + 0.5
            }).start();
          }
        };

        _proto.getBumpValue = function getBumpValue(opponentPlayer) {
          var oppScript = opponentPlayer.getComponent("Bot") == null ? opponentPlayer.getComponent("Player") : opponentPlayer.getComponent("Bot");
          var opponentSize = oppScript.getCurrentScale();
          var playerSize = this.currentScale;
          return opponentSize * 12;
        };

        _proto.getCurrentScale = function getCurrentScale() {
          return this.currentScale;
        };

        _proto.getMaxScale = function getMaxScale() {
          return this.maxScale;
        };

        _proto.update = function update(deltaTime) {
          if (parseInt(window.localStorage.getItem("isStopped"))) return;
          this._now_time += deltaTime;

          while (this._now_time >= CELL_TIME) {
            this.fix_update(CELL_TIME);
            this._now_time -= CELL_TIME;
          }
        };

        _proto.getDistance = function getDistance(xA, yA, xB, yB) {
          var xDiff = xA - xB;
          var yDiff = yA - yB;
          return Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
        };

        _proto.fix_update = function fix_update(dt) {
          this.updateNamePos();

          if (this._currentState == STATE.BUMP) {
            var vec = new Vec3();
            this.node.getComponent(RigidBody).getLinearVelocity(vec);
            var mag = Math.sqrt(vec.x * vec.x + vec.z * vec.z);

            if (mag <= 0.2) {
              this.getComponent(RigidBodyComponent).clearVelocity();
              this.setIdleStateAnimation();
            } else return;
          } // point


          this._vector = this.checkBotLogic();
          if (this._vector == null) return;
          var direction = new Vec3(this._vector.x - this.node.getPosition().x, this._vector.y - this.node.getPosition().y, this._vector.z - this.node.getPosition().z);
          var angle = Math.atan2(direction.x, direction.z) * 180 / Math.PI;
          this.node.eulerAngles = new Vec3(0, angle, 0);
          var distance = this.getDistance(this._vector.x, this._vector.z, this.node.getPosition().x, this.node.getPosition().z);

          if (distance > MAXDISTANCE) {
            direction.normalize();
            this._movement = direction;

            if (this._currentState == STATE.IDLE) {
              this.setWalkStateAnimation();
            }
          } else {
            this._movement = Vec3.ZERO;

            if (this._currentState == STATE.WALK) {
              this.setIdleStateAnimation();
            }
          }

          this.node.setPosition(this.node.position.add3f(this._movement.x * this.speed * dt, 0, this._movement.z * this.speed * dt));
        };

        _proto.checkBotLogic = function checkBotLogic() {
          if (this._curentFollowingNode != null) //is following something
            {
              if (this._curentFollowingNode.getComponent("Bot") || this._curentFollowingNode.getComponent("Player")) //is following other bot or player
                {
                  var opponentPresent = false;

                  for (var i = 0; i < this._playerList.length; i++) {
                    if (this._playerList[i] == this._curentFollowingNode) opponentPresent = true;
                  }

                  if (opponentPresent) {
                    var oppScript = this._curentFollowingNode.getComponent("Bot") == null ? this._curentFollowingNode.getComponent("Player") : this._curentFollowingNode.getComponent("Bot");
                    var oppCurrentScale = oppScript.getCurrentScale();
                    if (this.currentScale >= oppCurrentScale) return this._curentFollowingNode.getPosition();
                  }
                }

              if (this._curentFollowingNode.name == 'GummyBear') {
                if (this._curentFollowingNode.active) return this._curentFollowingNode.getPosition();
              }
            }

          var gummyBear = this.checkPowerUpDistance();
          var opponent = this.checkOtherPlayerPosition();

          if (gummyBear != null && opponent == null) {
            this._curentFollowingNode = gummyBear;
            return gummyBear.getPosition();
          } else if (gummyBear == null && opponent != null) {
            this._curentFollowingNode = opponent;
            return opponent.getPosition();
          } else if (gummyBear != null && opponent != null) {
            var gummyDistance = this.getDistance(gummyBear.getPosition().x, gummyBear.getPosition().z, this.node.getPosition().x, this.node.getPosition().z);
            var opponentDistance = this.getDistance(opponent.getPosition().x, opponent.getPosition().z, this.node.getPosition().x, this.node.getPosition().z);

            var _oppScript = opponent.getComponent("Bot") == null ? opponent.getComponent("Player") : opponent.getComponent("Bot");

            if (_oppScript.getCurrentScale() >= this.getCurrentScale()) {
              if (this.getCurrentScale() < this.getMaxScale()) {
                this._curentFollowingNode = gummyBear;
                return gummyBear.getPosition();
              } else {
                var range = randomRange(0, 10);

                if (range < 5) {
                  this._curentFollowingNode = gummyBear;
                  return gummyBear.getPosition();
                } else {
                  this._curentFollowingNode = opponent;
                  return opponent.getPosition();
                }
              }
            } else {
              this._curentFollowingNode = gummyDistance > opponentDistance ? opponent : gummyBear;
              return this._curentFollowingNode.getPosition();
            }
          } else {
            this._curentFollowingNode = null;
            this.check();
            return this._vector; // var opponentArray = [];
            // for (let i = 0; i < this._playerList.length; i++) {
            //     if (this._playerList[i] != this.node)
            //         opponentArray.push(this._playerList[i]);
            // }
            // if (opponentArray.length == 1) { // todo
            //     var pos = new Vec3(opponentArray[0].getPosition().x * 2, opponentArray[0].getPosition().y * 2, opponentArray[0].getPosition().z * 2);
            //     return pos;
            // }
            // else if (opponentArray.length > 1)
            //     return opponentArray[Math.floor(Math.random() * opponentArray.length)].getPosition();
          }
        };

        _proto.checkPowerUpDistance = function checkPowerUpDistance() {
          if (this.gameController.powerupController == undefined) return null;
          var powerupArrayList = this.gameController.powerupController.getPowerUpArrayList();
          var shortetDistance = 0;
          var index = -1;
          var initalData = true;

          for (var i = 0; i < powerupArrayList.length; i++) {
            if (powerupArrayList[i].active) {
              var distance = this.getDistance(powerupArrayList[i].getPosition().x, powerupArrayList[i].getPosition().z, this.node.getPosition().x, this.node.getPosition().z);

              if (initalData) {
                initalData = false;
                shortetDistance = distance;
              }

              if (distance <= shortetDistance) {
                shortetDistance = distance;
                index = i;
              }
            }
          }

          if (index != -1) return powerupArrayList[index];else return null;
        };

        _proto.checkOtherPlayerPosition = function checkOtherPlayerPosition() {
          var opponentArray = [];

          for (var i = 0; i < this._playerList.length; i++) {
            if (this._playerList[i] != this.node) opponentArray.push(this._playerList[i]);
          } //get beatable player list


          var beatableOpponentArray = [];

          for (var _i = 0; _i < opponentArray.length; _i++) {
            var oppScript = opponentArray[_i].getComponent("Bot") == null ? opponentArray[_i].getComponent("Player") : opponentArray[_i].getComponent("Bot");
            var oppCurrentScale = oppScript.getCurrentScale();

            if (this.currentScale >= oppCurrentScale) {
              beatableOpponentArray.push(opponentArray[_i]);
            }
          } //shuffle array


          beatableOpponentArray = this.shuffleArr(beatableOpponentArray);
          beatableOpponentArray.sort(function (x, y) {
            var oppScript1 = x.getComponent("Bot") == null ? x.getComponent("Player") : x.getComponent("Bot");
            var oppCurrentScale1 = oppScript1.getCurrentScale();
            var oppScript2 = y.getComponent("Bot") == null ? y.getComponent("Player") : y.getComponent("Bot");
            var oppCurrentScale2 = oppScript2.getCurrentScale();
            return oppCurrentScale1 - oppCurrentScale2;
          });
          var shortetDistance = 999999;
          var index = -1;

          if (Math.floor(Math.random() * 10) > 5) {
            if (beatableOpponentArray.length > 0) index = 0;
          } else {
            for (var _i2 = 0; _i2 < beatableOpponentArray.length; _i2++) {
              var _oppScript2 = beatableOpponentArray[_i2].getComponent("Bot") == null ? beatableOpponentArray[_i2].getComponent("Player") : beatableOpponentArray[_i2].getComponent("Bot");

              var distance = this.getDistance(beatableOpponentArray[_i2].getPosition().x, beatableOpponentArray[_i2].getPosition().z, this.node.getPosition().x, this.node.getPosition().z);

              if (distance < shortetDistance) {
                shortetDistance = distance;
                index = _i2;
              }
            }
          }

          if (beatableOpponentArray.length > 0) {
            if (index != -1) {
              return beatableOpponentArray[index];
            } else return beatableOpponentArray[Math.floor(Math.random() * beatableOpponentArray.length)];
          }

          return null;
        };

        _proto.checkRandomPoints = function checkRandomPoints() {
          var radius = 5;
          var center = new Vec2(this.node.getPosition().x, this.node.getPosition().z);
          var range = Math.floor(randomRange(0, 360));
          var currentAngle = Math.ceil(range);
          currentAngle = 90 - currentAngle;
          var newangle = currentAngle * (Math.PI / 180);
          var newX = Number(center.x + radius * Math.cos(newangle));
          var newY = Number(center.y + radius * Math.sin(newangle));
          var p = new Vec2(newX, newY);
          this.sendRayCast(new Vec3(p.x, 1, p.y));
        };

        _proto.check = function check() {
          this._posPoolObstacleArray = [];
          this._posPoolObstacleArray = this._posObstacleArray;
          this._posObstacleArray = [];
          var k = this.getSemiCirclePoint(0, 5, new Vec2(this.node.getPosition().x, this.node.getPosition().z), 30, this.node.eulerAngles.y);

          for (var i = 0; i < k.length; i++) {
            // let obstacle;
            // if(this._posPoolObstacleArray.length > 0)
            // {
            //     obstacle = this._posPoolObstacleArray[0];
            //     this.removeObjectFromArray(this._posPoolObstacleArray,obstacle);
            // }
            // else
            // {
            //     obstacle =  instantiate(this.prefabPoint);
            //     this.node.getParent().addChild(obstacle);
            // }
            // obstacle.setPosition(new Vec3(k[i].x,1, k[i].y));
            // this._posObstacleArray.push(obstacle);
            this.sendRayCast(new Vec3(k[i].x, 1, k[i].y));
          }
        };

        _proto.getSemiCirclePoint = function getSemiCirclePoint(points, radius, center, angle, currentViewAngle) {
          var pointArray = [];
          var num = this.split(angle, points);
          var currentAngle = Math.ceil(currentViewAngle);
          currentAngle = 90 - currentAngle;

          if (points <= 0) {
            var newangle = currentAngle * (Math.PI / 180);
            var newX = Number(center.x + radius * Math.cos(newangle));
            var newY = Number(center.y + radius * Math.sin(newangle));
            var p = new Vec2(newX, newY);
            pointArray.push(p);
            return pointArray;
          }

          var currentNumArray = [];
          var prevAngle = 0;

          for (var i = 0; i < num.length; i++) {
            var newAngle1 = prevAngle + num[i];
            var ourAngle1 = currentAngle + newAngle1;
            prevAngle = newAngle1;
            currentNumArray.push(ourAngle1);
          }

          prevAngle = 0;

          for (var _i3 = 0; _i3 < num.length; _i3++) {
            var newAngle2 = prevAngle + num[_i3];
            var ourAngle2 = currentAngle - newAngle2;
            prevAngle = newAngle2;
            currentNumArray.push(ourAngle2);
          }

          for (var _i4 = 0; _i4 < currentNumArray.length; _i4++) {
            var _newangle = currentNumArray[_i4] * (Math.PI / 180);

            var _newX = Number(center.x + radius * Math.cos(_newangle));

            var _newY = Number(center.y + radius * Math.sin(_newangle));

            var _p = new Vec2(_newX, _newY);

            pointArray.push(_p);
          }

          return pointArray;
        };

        _proto.split = function split(x, n) {
          var num = [];
          if (x < n) return num;else if (x % n == 0) {
            for (var i = 0; i < n; i++) {
              num.push(x / n);
            }
          } else {
            var zp = n - x % n;
            var pp = Math.floor(x / n);

            for (var _i5 = 0; _i5 < n; _i5++) {
              if (_i5 >= zp) num.push(pp + 1);else num.push(pp);
            }
          }
          return num;
        };

        _proto.sendRayCast = function sendRayCast(pos) {
          // this._ray = new geometry.Ray();
          geometry.Ray.fromPoints(this._ray, this.node.getPosition(), pos);
          var randomPointsCalled = false;

          if (PhysicsSystem.instance.raycast(this._ray, this._mask, this._maxDistance)) {
            var r = PhysicsSystem.instance.raycastResults;

            for (var i = 0; i < r.length; i++) {
              var item = r[i]; // if (item.collider.node.name == "bot" || item.collider.node.name == "Player")
              //     otherPlayerArray.push(item.collider.node);

              if (item.collider.node.name == "block2" || item.collider.node.name == "block3" || item.collider.node.name == "block4" || item.collider.node.name == "block5") {
                this.currentDistance = item.distance; // console.log("COLLIDED ------- "+item.collider.node.name+"   distance  "+this.currentDistance);

                if (this.currentDistance < this._maxWallDistance) {
                  randomPointsCalled = true;
                  this.checkRandomPoints();
                }
              } // const modelCom = item.collider.node.getComponent(ModelComponent)!;
              // modelCom.material = this.rayMaterial;

            }
          }

          if (!randomPointsCalled) this._vector = pos; // let uniqueChars = otherPlayerArray.filter((c, index) => {
          //     return otherPlayerArray.indexOf(c) === index;
          // });
          // // console.log("COLLIDED ------- "+otherPlayerArray.length);
          // // console.log("uniqueChars ------- "+uniqueChars.length);
          // if (otherPlayerArray.length > 0) {
          //     var shortetDistance = 999999;
          //     var index = -1;
          //     for (let i = 0; i < otherPlayerArray.length; i++) {
          //         let playerScript = otherPlayerArray[0].getComponent("Player");
          //         if (playerScript == null)
          //             playerScript = otherPlayerArray[0].getComponent("Bot");
          //         // let opponentState = (otherPlayerArray[i].getComponent("Player")as Player)._currentState;
          //         if (playerScript._currentState == STATE.WALK) {
          //             let distance = this.getDistance(otherPlayerArray[i].getPosition().x, otherPlayerArray[i].getPosition().z, this.node.getPosition().x, this.node.getPosition().z);
          //             if (distance < shortetDistance) {
          //                 distance = shortetDistance;
          //                 index = i;
          //             }
          //         }
          //     }
          //     if (index != -1)
          //         this.player = otherPlayerArray[index];
          // }
        };

        _proto.removeObjectFromArray = function removeObjectFromArray(array, value) {
          var idx = array.indexOf(value);

          if (idx !== -1) {
            array.splice(idx, 1);
          }

          return array;
        };

        _proto.bezier = function bezier(t, p0, p1, p2, p3) {
          var cX = 3 * (p1.x - p0.x),
              bX = 3 * (p2.x - p1.x) - cX,
              aX = p3.x - p0.x - cX - bX;
          var cY = 3 * (p1.y - p0.y),
              bY = 3 * (p2.y - p1.y) - cY,
              aY = p3.y - p0.y - cY - bY;
          var x = aX * Math.pow(t, 3) + bX * Math.pow(t, 2) + cX * t + p0.x;
          var y = aY * Math.pow(t, 3) + bY * Math.pow(t, 2) + cY * t + p0.y;
          return {
            x: x,
            y: y
          };
        };

        _proto.setIdleStateAnimation = function setIdleStateAnimation() {
          this._currentState = STATE.IDLE;

          this._skeletal.play('Armature|idle');
        };

        _proto.setBumpStateAnimation = function setBumpStateAnimation() {
          this._currentState = STATE.BUMP;

          this._skeletal.play('Armature|damage');

          this._skeletal.getState('Armature|damage').repeatCount = 1;
        };

        _proto.setWalkStateAnimation = function setWalkStateAnimation() {
          this._currentState = STATE.WALK;

          this._skeletal.play('Armature|walk');
        };

        _proto.setEatbleAnimation = function setEatbleAnimation() {
          var _this3 = this;

          if (this.eatTimeout != null) clearTimeout(this.eatTimeout);

          this._skeletal.play('Armature|attack');

          this._skeletal.getState('Armature|attack').speed = 2;
          this._skeletal.getState('Armature|attack').repeatCount = 1;

          var duration = this._skeletal.getState('Armature|attack').duration;

          this.eatTimeout = setTimeout(function () {
            _this3._skeletal.play('Armature|walk');

            _this3.eatTimeout = null;
          }, 500 * duration);
        };

        _proto.changeWalkAnimationSpeed = function changeWalkAnimationSpeed(speed) {
          this._skeletal.getState('Armature|walk').speed = speed / 2;
        };

        _proto.checkDidBumpedOnBck = function checkDidBumpedOnBck(otherCollider) {
          var p1 = new Vec2(this.node.getPosition().x, this.node.getPosition().z); // always will be the current node

          var p2 = new Vec2(otherCollider.getPosition().x, otherCollider.getPosition().z);
          var left = Math.round(this.node.eulerAngles.y) + 100;

          if (left > 180) {
            left -= 360;
          }

          var right = Math.round(this.node.eulerAngles.y) - 100;

          if (right < -180) {
            right += 360;
          }

          var hitAngle = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
          hitAngle = this.findGameAngle(hitAngle);

          if (this.angleBetweenAngle(hitAngle, left, right)) {
            return true;
          }

          return false;
        };

        _proto.angleTo360 = function angleTo360(angle) {
          angle = angle % 360 + (angle - Math.trunc(angle));
          if (angle > 0.0) return angle;else return angle + 360.0;
        };

        _proto.angleBetweenAngle = function angleBetweenAngle(hitAngle, left, right) {
          hitAngle = this.angleTo360(hitAngle);
          left = this.angleTo360(left);
          right = this.angleTo360(right);
          if (left < right) return left <= hitAngle && hitAngle <= right;
          return left <= hitAngle || hitAngle <= right;
        };

        _proto.findGameAngle = function findGameAngle(hitAngle) {
          var _final = 0;

          if (hitAngle < 0 && hitAngle >= -90) {
            // final = Math.abs(hitAngle) - 90 + 180;
            _final = -(hitAngle - 90);
          } else if (hitAngle < -90 && hitAngle >= -180) {
            _final = -hitAngle - 90 - 180;
          }

          if (hitAngle > 0 && hitAngle <= 90) {
            _final = -hitAngle + 90;
          } else if (hitAngle > 90 && hitAngle <= 180) {
            _final = -(hitAngle - 90);
          }

          return _final;
        };

        _proto.findAngle = function findAngle(p0, p1, p2) {
          var b = Math.pow(p1.x - p0.x, 2) + Math.pow(p1.y - p0.y, 2),
              a = Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2),
              c = Math.pow(p2.x - p0.x, 2) + Math.pow(p2.y - p0.y, 2);
          var angle = Math.acos((a + b - c) / Math.sqrt(4 * a * b));
          angle = angle * (180 / Math.PI);
          if (angle > 90) return true;
          return false;
        };

        _proto.shuffleArr = function shuffleArr(array) {
          for (var i = array.length - 1; i > 0; i--) {
            var rand = Math.floor(Math.random() * (i + 1));
            var _ref = [array[rand], array[i]];
            array[i] = _ref[0];
            array[rand] = _ref[1];
          }

          return array;
        };

        _proto.getNewModifiedSpeed = function getNewModifiedSpeed(botScale) {
          return (botScale - this.initialSize) / (this.botMaxSize - this.initialSize) * (this.botEndSpeed - this.botStartSpeed) + this.botStartSpeed;
        };

        return Bot;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefabPoint", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MiloManager.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "81952g3tRNLaoAgi+Ql1OzL", "MiloManager", undefined);

      var MiloManager = exports('MiloManager', function MiloManager() {
        var users = [{
          "userId": "mx-user-1",
          "gameId": "86a01a92a84646e4ad33252f19b39385",
          "roomId": "7d1b376b-0eee-4d53-bd91-3cda5de62b43-1625715627668",
          "highestScore": 90,
          "lastLevel": 0,
          "gameMode": "score",
          "isFirstOpen": true,
          "roomType": "public/private",
          balance: 100,
          micEnabled: true
        }, {
          "userId": "mx-user-2",
          "gameId": "86a01a92a84646e4ad33252f19b39385",
          "roomId": "7d1b376b-0eee-4d53-bd91-3cda5de62b43-1625715627668",
          "highestScore": 90,
          "lastLevel": 0,
          "gameMode": "score",
          "isFirstOpen": true,
          "roomType": "public/private",
          balance: 100,
          micEnabled: true
        }];
        var dataFromApp = {
          "players": [{
            "bot": false,
            "host": true,
            "name": "Player1",
            "profilePicUrl": "https://i.picsum.photos/id/177/200/200.jpg?hmac=785Vry8HsdS9dQ7mFYbwV8bR2tWVtzJWWl9YLp6L0n8",
            "userId": "mx-user-1"
          }, {
            "bot": false,
            "host": false,
            "name": "Player2",
            "profilePicUrl": "https://i.picsum.photos/id/445/200/300.jpg?hmac=7dfJBQTfK8boCS5_EXpFW8SC_8VKMgDw5yFInpEee4s",
            "userId": "mx-user-2"
          }]
        };
        var userNum = window.location.href.split('?')[1].split("user")[1];
        var userId = parseInt(userNum);
        var user = users[userId - 1];
        var initInfo = Object.assign({}, dataFromApp, {
          initInfo: user
        });

        function onGameInit() {
          return JSON.stringify(initInfo);
        }

        function onGameOver() {}

        function onGameStart() {}

        function onError() {}

        return {
          onGameInit: onGameInit,
          onGameOver: onGameOver,
          onGameStart: onGameStart,
          onError: onError
        };
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PowerUpController.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GameConfig.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, randomRange, Vec3, instantiate, Component, GameConfig;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      randomRange = module.randomRange;
      Vec3 = module.Vec3;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      GameConfig = module.GameConfig;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "8bf73q3+cdE0rnIIGpvubbX", "PowerUpController", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SAFEAREA = 5;
      var PowerUpController = exports('PowerUpController', (_dec = ccclass('PowerUpController'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PowerUpController, _Component);

        function PowerUpController(gameController) {
          var _this;

          _this = _Component.call(this) || this;

          _defineProperty(_assertThisInitialized(_this), "gameController", void 0);

          _defineProperty(_assertThisInitialized(_this), "eatablesMap", {});

          _defineProperty(_assertThisInitialized(_this), "powerUpType", void 0);

          _defineProperty(_assertThisInitialized(_this), "powerupArray", []);

          _defineProperty(_assertThisInitialized(_this), "gummySpawnInterval", void 0);

          _defineProperty(_assertThisInitialized(_this), "totalGummyToPresent", void 0);

          _this.gameController = gameController;
          return _this;
        }

        var _proto = PowerUpController.prototype;

        _proto.setEatables = function setEatables(powerupArray) {
          var _this2 = this;

          powerupArray.forEach(function (element) {
            _this2.eatablesMap[element.data.name] = element;
          });
        };

        _proto.spawnPowerup = function spawnPowerup(powerUpType) {
          var totalPlayer = this.gameController.gameData.actualPlayerCount + this.gameController.gameData.totalBotPresent;
          var initialTotalPowerup = this.getPercentage(GameConfig.powerup[powerUpType].earlySpawn * 100, totalPlayer);
          this.totalGummyToPresent = this.getPercentage(GameConfig.powerup[powerUpType].totalSpawnInFeild * 100, totalPlayer);

          for (var i = 0; i < initialTotalPowerup; i++) {
            this.respawnGummys();
          }

          var currentScene = this;
          this.gummySpawnInterval = setInterval(function () {
            var currentGummy = currentScene.getGummyNumber();
            if (currentGummy < currentScene.totalGummyToPresent) currentScene.respawnGummys();
          }, GameConfig.powerup[powerUpType].spawnRate * 1000);
        };

        _proto.getGummyNumber = function getGummyNumber() {
          var currentGummy = 0;

          for (var i = 0; i < this.powerupArray.length; i++) {
            if (this.powerupArray[i].active) currentGummy++;
          }

          return currentGummy;
        };

        _proto.getSpawnLocation = function getSpawnLocation() {
          var platformXRange = this.gameController.platform.getScale().x / 2 - SAFEAREA;
          var platformYRange = this.gameController.platform.getScale().z / 2 - SAFEAREA;
          var platformXRandomRange = randomRange(-platformXRange, platformXRange);
          var platformYRandomRange = randomRange(-platformYRange, platformYRange);
          return new Vec3(platformXRandomRange, 3, platformYRandomRange);
        };

        _proto.spawnGummy = function spawnGummy(gummy) {
          var loc = this.getSpawnLocation();
          var newGummyNeeded = true;

          for (var i = 0; i < this.powerupArray.length; i++) {
            if (!this.powerupArray[i].active) {
              this.powerupArray[i].setPosition(loc);
              this.powerupArray[i].active = true;
              newGummyNeeded = false;
              break;
            }
          }

          if (newGummyNeeded) {
            var gummyBear = instantiate(gummy);
            gummyBear.setPosition(loc);
            this.powerupArray.push(gummyBear);
            this.gameController.addToWorld(gummyBear);
          }
        };

        _proto.getPowerUpArrayList = function getPowerUpArrayList() {
          return this.powerupArray;
        };

        _proto.removeGummy = function removeGummy(collider) {
          collider.node.active = false; // this.respawnGummys();
        };

        _proto.removeObjectFromArray = function removeObjectFromArray(array, value) {
          var idx = array.indexOf(value);

          if (idx !== -1) {
            array.splice(idx, 1);
          }

          return array;
        };

        _proto.respawnGummys = function respawnGummys() {
          this.spawnGummy(this.eatablesMap['GummyBear']);
        };

        _proto.getPercentage = function getPercentage(percentToGet, number) {
          return Math.ceil(percentToGet / 100 * number);
        };

        return PowerUpController;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/commonFun.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "a12d4+l2AhNPJDGsDtZTX1+", "commonFun", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /**
       * Predefined variables
       * Name = CommonFun
       * DateTime = Wed Oct 20 2021 13:16:15 GMT+0530 (India Standard Time)
       * Author = sushant
       * FileBasename = commonFun.ts
       * FileBasenameNoExtension = commonFun
       * URL = db://assets/Script/config/commonFun.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      var CommonFun = exports('CommonFun', (_dec = ccclass('CommonFun'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CommonFun, _Component);

        function CommonFun() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = CommonFun.prototype; // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;

        _proto.start = function start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return CommonFun;
      }(Component)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Player.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GameConfig.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, Vec3, SkeletalAnimationComponent, RigidBody, instantiate, Label, tween, RigidBodyComponent, macro, Vec2, Component, GameConfig;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      SkeletalAnimationComponent = module.SkeletalAnimationComponent;
      RigidBody = module.RigidBody;
      instantiate = module.instantiate;
      Label = module.Label;
      tween = module.tween;
      RigidBodyComponent = module.RigidBodyComponent;
      macro = module.macro;
      Vec2 = module.Vec2;
      Component = module.Component;
    }, function (module) {
      GameConfig = module.GameConfig;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "a3addpkf1lOCoVufXlKk5xR", "Player", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CELL_TIME = 0.016;
      var STATE = {
        IDLE: 0,
        WALK: 1,
        BUMP: 2
      };
      var Player = exports('Player', (_dec = ccclass('Player'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Player, _Component);

        function Player() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "playerCamera", null);

          _defineProperty(_assertThisInitialized(_this), "playerName", null);

          _defineProperty(_assertThisInitialized(_this), "_currentPlayerPosition", Vec3.ZERO);

          _defineProperty(_assertThisInitialized(_this), "_vector", Vec3.ZERO);

          _defineProperty(_assertThisInitialized(_this), "_vectorAngle", Vec3.ZERO);

          _defineProperty(_assertThisInitialized(_this), "_now_time", 0);

          _defineProperty(_assertThisInitialized(_this), "_skeletal", void 0);

          _defineProperty(_assertThisInitialized(_this), "_currentState", STATE.IDLE);

          _defineProperty(_assertThisInitialized(_this), "_charName", "LOL");

          _defineProperty(_assertThisInitialized(_this), "lastColliderId", void 0);

          _defineProperty(_assertThisInitialized(_this), "isReady", false);

          _defineProperty(_assertThisInitialized(_this), "mass", 1);

          _defineProperty(_assertThisInitialized(_this), "eatTimeout", null);

          _defineProperty(_assertThisInitialized(_this), "gameController", null);

          _defineProperty(_assertThisInitialized(_this), "initialSize", 0);

          _defineProperty(_assertThisInitialized(_this), "playerMaxSize", 0);

          _defineProperty(_assertThisInitialized(_this), "playerStartSpeed", 0);

          _defineProperty(_assertThisInitialized(_this), "playerEndSpeed", 0);

          _defineProperty(_assertThisInitialized(_this), "maxScale", 0);

          _defineProperty(_assertThisInitialized(_this), "currentScale", 0);

          _defineProperty(_assertThisInitialized(_this), "speed", 0);

          return _this;
        }

        var _proto = Player.prototype;

        _proto.start = function start() {
          this._skeletal = this.node.getComponent(SkeletalAnimationComponent);
          this.setIdleStateAnimation();
          this.setProperties();
          this.isReady = true;
        };

        _proto.setProperties = function setProperties() {
          this.initialSize = GameConfig.player.initialSize;
          this.playerMaxSize = GameConfig.player.playerMaxSize;
          this.playerStartSpeed = GameConfig.player.playerStartSpeed;
          this.playerEndSpeed = GameConfig.player.playerEndSpeed;
          this.currentScale = this.initialSize;
          this.node.scale.set(this.currentScale, this.currentScale, this.currentScale);
          this.maxScale = this.playerMaxSize;
          this.mass = this.node.getComponent(RigidBody).mass;
          this.updateSpeed();
        };

        _proto.setCamera = function setCamera(camera, gameController) {
          this.playerCamera = camera;
          this.gameController = gameController;
        };

        _proto.addName = function addName(namePrefab, world) {
          this.playerName = instantiate(namePrefab);
          this.playerName.getComponent(Label).string = this._charName;
          world.addChild(this.playerName);
          this.updateNamePos();
        };

        _proto.updateSpeed = function updateSpeed() {
          this.speed = this.getNewModifiedSpeed(this.currentScale);
          console.log("bot speed    " + this.speed);
          this.changeWalkAnimationSpeed(this.speed);
          this.updateNameData();
          console.log("Player speed    " + this.speed);
        };

        _proto.updateNameData = function updateNameData() {
          this._charName = "MaxSize " + this.maxScale.toFixed(2) + " \n EndSpeed " + this.playerEndSpeed.toFixed(2) + " \n currentScale " + this.currentScale.toFixed(2) + " \n speed " + this.speed.toFixed(2);
          this.playerName.getComponent(Label).string = this._charName;
        };

        _proto.resize = function resize(gain) {
          var _this2 = this;

          this.setEatbleAnimation();

          if (this.currentScale <= this.maxScale) {
            this.currentScale += gain;
            this.node.getComponent(RigidBody).mass += 0.5;
            tween(this.node.scale).to(1, new Vec3(this.currentScale, this.currentScale, this.currentScale)).call(function () {
              _this2.updateSpeed();
            }).start();
            /* let cameraNode = this.playerCamera.getChildByName('playerCamera');
            tween(cameraNode.position)
                .to(1, new Vec3(0, 0, cameraNode.position.z + 2))
                .start(); */

            tween(this.playerName.position).to(1, {
              y: this.playerName.position.y + 0.5
            }).start();
          }
        };

        _proto.moveStationCamera = function moveStationCamera() {
          var cameraNode = this.playerCamera.getChildByName('playerCamera'); // cameraNode.eulerAngles = cameraNode.eulerAngles.add3f(0, 10, 0);

          tween(cameraNode.position).to(1, new Vec3(0, 8, 8)).start();
        };

        _proto.resetStationCamera = function resetStationCamera() {
          var cameraNode = this.playerCamera.getChildByName('playerCamera'); // cameraNode.eulerAngles = cameraNode.eulerAngles.add3f(0, 10, 0);

          tween(cameraNode.position).to(1, new Vec3(0, 17.788, 25.71)).start();
        };

        _proto._onCollisionEnter = function _onCollisionEnter(event) {
          var otherCollider = event.otherCollider;
          var isBumpedOnBack = this.checkDidBumpedOnBck(otherCollider.node);
          console.log("Player    " + isBumpedOnBack);
          this.setBumpStateAnimation();
          this.getComponent(RigidBodyComponent).clearVelocity();
          var pos = new Vec3(this.node.getPosition().x - otherCollider.node.getPosition().x, this.node.getPosition().z - otherCollider.node.getPosition().z);

          var _vector = pos.normalize();

          var bumpValue = this.getBumpValue(otherCollider.node);
          this.getComponent(RigidBodyComponent).applyImpulse(new Vec3(_vector.x * bumpValue, 0, _vector.y * bumpValue));
        };

        _proto.getBumpValue = function getBumpValue(opponentPlayer) {
          var opponentSize = opponentPlayer.getComponent("Bot").getCurrentScale();
          var playerSize = this.currentScale;
          return opponentSize * 12;
        };

        _proto.getCurrentScale = function getCurrentScale() {
          return this.currentScale;
        };

        _proto.touchCallBack = function touchCallBack(vector, angle) {
          Vec3.rotateZ(vector, vector, Vec3.ZERO, this.playerCamera.eulerAngles.y * macro.RAD);
          this._vector = vector.normalize();

          if (angle) {
            this.node.eulerAngles = new Vec3(0, angle + 90 + this.playerCamera.eulerAngles.y, 0);
          }
        };

        _proto.touchAngleCallBack = function touchAngleCallBack(vector, angle) {
          this._vectorAngle = vector.normalize();
        };

        _proto.updateNamePos = function updateNamePos() {
          var namePos = this.node.getPosition();
          this.playerName.setPosition(new Vec3(namePos.x, this.playerName.position.y, namePos.z));
          this.playerName.eulerAngles = new Vec3(this.playerCamera.eulerAngles.x, 0, 0);
        };

        _proto.fix_update = function fix_update(dt) {
          this.updateNamePos();

          if (this._currentState == STATE.BUMP) {
            var vec = new Vec3();
            this.node.getComponent(RigidBody).getLinearVelocity(vec);
            var mag = Math.sqrt(vec.x * vec.x + vec.z * vec.z);

            if (mag <= 0.2) {
              this.getComponent(RigidBodyComponent).clearVelocity();
              this.setIdleStateAnimation();
            } else return;
          }

          if (this._vector.lengthSqr() > 0) {
            if (this._currentState == STATE.IDLE) {
              this.setWalkStateAnimation();
            }

            this.node.setPosition(this.node.position.add3f(this._vector.x * this.speed * dt, 0, -this._vector.y * this.speed * dt));
            this._currentPlayerPosition = new Vec3(this._vector.x, 0, this._vector.y);
            this.playerCamera.setPosition(this.playerCamera.position.add3f(this._vector.x * this.speed * dt, 0, 0)); // this.updateNamePos();
          } else {
            if (this._currentState == STATE.WALK) {
              this.setIdleStateAnimation();
            } // this.node.setPosition(this.node.position.add3f(this._currentPlayerPosition.x * this.speed * dt, 0, -this._currentPlayerPosition.z * this.speed * dt));

          }
          /* if (this._vectorAngle.lengthSqr() > 0) {
              this.playerCamera.eulerAngles = this.playerCamera.eulerAngles.add3f(0, -this._vectorAngle.x, 0);
          } */

        };

        _proto.updateCamera = function updateCamera() {
          var target_position = new Vec2(this.node.getPosition().x, this.node.getPosition().z);
          target_position.lerp(target_position, 0.1);
          this.playerCamera.setPosition(new Vec3(target_position.x, this.node.getPosition().y, target_position.y));
        };

        _proto.update = function update(deltaTime) {
          if (!this.isReady) return;
          this._now_time += deltaTime;

          while (this._now_time >= CELL_TIME) {
            this.fix_update(CELL_TIME);
            this.updateCamera();
            this._now_time -= CELL_TIME;
          }
        };

        _proto.removeAllHud = function removeAllHud() {// this.getWorld().removeChild(this.playerName);
        };

        _proto.setIdleStateAnimation = function setIdleStateAnimation() {
          this._currentState = STATE.IDLE;

          this._skeletal.play('Armature|idle');
        };

        _proto.setBumpStateAnimation = function setBumpStateAnimation() {
          this._currentState = STATE.BUMP;

          this._skeletal.play('Armature|damage');

          this._skeletal.getState('Armature|damage').repeatCount = 1;
        };

        _proto.setWalkStateAnimation = function setWalkStateAnimation() {
          this._currentState = STATE.WALK;

          this._skeletal.play('Armature|walk');
        };

        _proto.setEatbleAnimation = function setEatbleAnimation() {
          var _this3 = this;

          if (this.eatTimeout != null) clearTimeout(this.eatTimeout);

          this._skeletal.play('Armature|attack');

          this._skeletal.getState('Armature|attack').speed = 2;
          this._skeletal.getState('Armature|attack').repeatCount = 1;

          var duration = this._skeletal.getState('Armature|attack').duration;

          this.eatTimeout = setTimeout(function () {
            _this3._skeletal.play('Armature|walk');

            _this3.eatTimeout = null;
          }, 500 * duration);
        };

        _proto.changeWalkAnimationSpeed = function changeWalkAnimationSpeed(speed) {
          this._skeletal.getState('Armature|walk').speed = speed / 2;
        };

        _proto.checkDidBumpedOnBck = function checkDidBumpedOnBck(otherCollider) {
          var p1 = new Vec2(this.node.getPosition().x, this.node.getPosition().z); // always will be the current node

          var p2 = new Vec2(otherCollider.getPosition().x, otherCollider.getPosition().z);
          var left = Math.round(this.node.eulerAngles.y) + 100;

          if (left > 180) {
            left -= 360;
          }

          var right = Math.round(this.node.eulerAngles.y) - 100;

          if (right < -180) {
            right += 360;
          }

          var hitAngle = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
          hitAngle = this.findGameAngle(hitAngle);

          if (this.angleBetweenAngle(hitAngle, left, right)) {
            return true;
          }

          return false;
        };

        _proto.angleTo360 = function angleTo360(angle) {
          angle = angle % 360 + (angle - Math.trunc(angle));
          if (angle > 0.0) return angle;else return angle + 360.0;
        };

        _proto.angleBetweenAngle = function angleBetweenAngle(hitAngle, left, right) {
          hitAngle = this.angleTo360(hitAngle);
          left = this.angleTo360(left);
          right = this.angleTo360(right);
          if (left < right) return left <= hitAngle && hitAngle <= right;
          return left <= hitAngle || hitAngle <= right;
        };

        _proto.findGameAngle = function findGameAngle(hitAngle) {
          var _final = 0;

          if (hitAngle < 0 && hitAngle >= -90) {
            // final = Math.abs(hitAngle) - 90 + 180;
            _final = -(hitAngle - 90);
          } else if (hitAngle < -90 && hitAngle >= -180) {
            _final = -hitAngle - 90 - 180;
          }

          if (hitAngle > 0 && hitAngle <= 90) {
            _final = -hitAngle + 90;
          } else if (hitAngle > 90 && hitAngle <= 180) {
            _final = -(hitAngle - 90);
          }

          return _final;
        };

        _proto.findAngle = function findAngle(p0, p1, p2) {
          var b = Math.pow(p1.x - p0.x, 2) + Math.pow(p1.y - p0.y, 2),
              a = Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2),
              c = Math.pow(p2.x - p0.x, 2) + Math.pow(p2.y - p0.y, 2);
          var angle = Math.acos((a + b - c) / Math.sqrt(4 * a * b));
          angle = angle * (180 / Math.PI);
          if (angle > 90) return true;
          return false;
        };

        _proto.getNewModifiedSpeed = function getNewModifiedSpeed(playerScale) {
          return (playerScale - this.initialSize) / (this.playerMaxSize - this.initialSize) * (this.playerEndSpeed - this.playerStartSpeed) + this.playerStartSpeed;
        };

        return Player;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SocketConnection.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './colyseus.js', './colyseus.mjs_cjs=&original=.js'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _defineProperty, _assertThisInitialized, _initializerDefineProperty, _asyncToGenerator, cclegacy, _decorator, Component, _cjsExports;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _initializerDefineProperty = module.initializerDefineProperty;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      _cjsExports = module.default;
    }, null],
    execute: function () {
      var _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;

      cclegacy._RF.push({}, "aa55cgJ/ItInrViJDo5FmqX", "SocketConnection", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SocketConnection = exports('SocketConnection', (_dec = ccclass('SocketConnection'), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SocketConnection, _Component);

        function SocketConnection() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "playerName", void 0);

          _defineProperty(_assertThisInitialized(_this), "isConnected", void 0);

          _initializerDefineProperty(_assertThisInitialized(_this), "hostname", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "port", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "useSSL", _descriptor3, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = SocketConnection.prototype;

        _proto.start = function start() {
          // Instantiate Colyseus Client
          // connects into (ws|wss)://hostname[:port]

          /* let domain = window.location.href.split('/')[2];
          let url = "ws://" + domain.split(':')[0] + ':2567'; */
          var url = (this.useSSL ? "wss" : "ws") + "://" + this.hostname + ([443, 80].includes(this.port) || this.useSSL ? "" : ":" + this.port);
          this.client = new _cjsExports.Client((this.useSSL ? "wss" : "ws") + "://" + this.hostname + ([443, 80].includes(this.port) || this.useSSL ? "" : ":" + this.port));
          console.log("Connecting server to " + url);
          this.connect();
        };

        _proto.connect = /*#__PURE__*/function () {
          var _connect = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return this.client.joinOrCreate("SumoRoom");

                  case 3:
                    this.room = _context.sent;
                    console.log("Room joined successfully!");
                    console.log("user's sessionId:", this.room.sessionId);
                    this.room.onStateChange(function (state) {
                      console.log("onStateChange: ", state);
                    });
                    this.room.onLeave(function (code) {
                      console.log("onLeave:", code);
                    });
                    _context.next = 13;
                    break;

                  case 10:
                    _context.prev = 10;
                    _context.t0 = _context["catch"](0);
                    console.error(_context.t0);

                  case 13:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[0, 10]]);
          }));

          function connect() {
            return _connect.apply(this, arguments);
          }

          return connect;
        }();

        return SocketConnection;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "hostname", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "localhost";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "port", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2567;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "useSSL", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Menu.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, log, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      log = module.log;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "b33e1uYXghIYZH6cQOlyEBZ", "Menu", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Menu = exports('Menu', (_dec = ccclass('Menu'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Menu, _Component);

        function Menu() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = Menu.prototype;

        _proto.start = function start() {};

        _proto.onPlayClicked = function onPlayClicked() {
          log('Start Game');
        };

        return Menu;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/colyseus.js", ['./cjs-loader.mjs'], function (exports, module) {
  'use strict';

  var loader;
  return {
    setters: [function (module) {
      loader = module.default;
    }],
    execute: function () {
      exports('default', void 0);

      var _cjsExports;

      loader.define(module.meta.url, function (exports$1, _require, module, __filename, __dirname) {
        var require = loader.createRequireWithReqMap({}, _require);

        (function () {
          // colyseus.js@0.14.12 (@colyseus/schema 1.0.22)
          (function (global, factory) {
            typeof exports$1 === 'object' && typeof module !== 'undefined' ? factory(exports$1) : typeof define === 'function' && define.amd ? define('colyseus.js', ['exports'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Colyseus = {}));
          })(this, function (exports) {
            // Polyfills for legacy environments
            //

            /*
             * Support Android 4.4.x
             */
            if (!ArrayBuffer.isView) {
              ArrayBuffer.isView = function (a) {
                return a !== null && typeof a === 'object' && a.buffer instanceof ArrayBuffer;
              };
            } // Define globalThis if not available.
            // https://github.com/colyseus/colyseus.js/issues/86


            if (typeof globalThis === "undefined" && typeof window !== "undefined") {
              // @ts-ignore
              window['globalThis'] = window;
            }
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.
             Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.
             THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */

            /* global Reflect, Promise */


            var _extendStatics = function extendStatics(d, b) {
              _extendStatics = Object.setPrototypeOf || {
                __proto__: []
              } instanceof Array && function (d, b) {
                d.__proto__ = b;
              } || function (d, b) {
                for (var p in b) {
                  if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                }
              };

              return _extendStatics(d, b);
            };

            function __extends(d, b) {
              if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

              _extendStatics(d, b);

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }

            function __awaiter(thisArg, _arguments, P, generator) {
              function adopt(value) {
                return value instanceof P ? value : new P(function (resolve) {
                  resolve(value);
                });
              }

              return new (P || (P = Promise))(function (resolve, reject) {
                function fulfilled(value) {
                  try {
                    step(generator.next(value));
                  } catch (e) {
                    reject(e);
                  }
                }

                function rejected(value) {
                  try {
                    step(generator["throw"](value));
                  } catch (e) {
                    reject(e);
                  }
                }

                function step(result) {
                  result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                }

                step((generator = generator.apply(thisArg, _arguments || [])).next());
              });
            }

            function __generator(thisArg, body) {
              var _ = {
                label: 0,
                sent: function sent() {
                  if (t[0] & 1) throw t[1];
                  return t[1];
                },
                trys: [],
                ops: []
              },
                  f,
                  y,
                  t,
                  g;
              return g = {
                next: verb(0),
                "throw": verb(1),
                "return": verb(2)
              }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
                return this;
              }), g;

              function verb(n) {
                return function (v) {
                  return step([n, v]);
                };
              }

              function step(op) {
                if (f) throw new TypeError("Generator is already executing.");

                while (_) {
                  try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                    if (y = 0, t) op = [op[0] & 2, t.value];

                    switch (op[0]) {
                      case 0:
                      case 1:
                        t = op;
                        break;

                      case 4:
                        _.label++;
                        return {
                          value: op[1],
                          done: false
                        };

                      case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;

                      case 7:
                        op = _.ops.pop();

                        _.trys.pop();

                        continue;

                      default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                          _ = 0;
                          continue;
                        }

                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                          _.label = op[1];
                          break;
                        }

                        if (op[0] === 6 && _.label < t[1]) {
                          _.label = t[1];
                          t = op;
                          break;
                        }

                        if (t && _.label < t[2]) {
                          _.label = t[2];

                          _.ops.push(op);

                          break;
                        }

                        if (t[2]) _.ops.pop();

                        _.trys.pop();

                        continue;
                    }

                    op = body.call(thisArg, _);
                  } catch (e) {
                    op = [6, e];
                    y = 0;
                  } finally {
                    f = t = 0;
                  }
                }

                if (op[0] & 5) throw op[1];
                return {
                  value: op[0] ? op[1] : void 0,
                  done: true
                };
              }
            }

            function apply(src, tar) {
              tar.headers = src.headers || {};
              tar.statusMessage = src.statusText;
              tar.statusCode = src.status;
              tar.data = src.response;
            }

            function send(method, uri, opts) {
              return new Promise(function (res, rej) {
                opts = opts || {};
                var req = new XMLHttpRequest();
                var k,
                    tmp,
                    arr,
                    str = opts.body;
                var headers = opts.headers || {}; // IE compatible

                if (opts.timeout) req.timeout = opts.timeout;

                req.ontimeout = req.onerror = function (err) {
                  err.timeout = err.type == 'timeout';
                  rej(err);
                };

                req.open(method, uri.href || uri);

                req.onload = function () {
                  arr = req.getAllResponseHeaders().trim().split(/[\r\n]+/);
                  apply(req, req); //=> req.headers

                  while (tmp = arr.shift()) {
                    tmp = tmp.split(': ');
                    req.headers[tmp.shift().toLowerCase()] = tmp.join(': ');
                  }

                  tmp = req.headers['content-type'];

                  if (tmp && !!~tmp.indexOf('application/json')) {
                    try {
                      req.data = JSON.parse(req.data, opts.reviver);
                    } catch (err) {
                      apply(req, err);
                      return rej(err);
                    }
                  }

                  (req.status >= 400 ? rej : res)(req);
                };

                if (typeof FormData < 'u' && str instanceof FormData) ;else if (str && typeof str == 'object') {
                  headers['content-type'] = 'application/json';
                  str = JSON.stringify(str);
                }
                req.withCredentials = !!opts.withCredentials;

                for (k in headers) {
                  req.setRequestHeader(k, headers[k]);
                }

                req.send(str);
              });
            }

            var get = /*#__PURE__*/send.bind(send, 'GET');
            var post = /*#__PURE__*/send.bind(send, 'POST');
            var patch = /*#__PURE__*/send.bind(send, 'PATCH');
            var del = /*#__PURE__*/send.bind(send, 'DELETE');
            var put = /*#__PURE__*/send.bind(send, 'PUT');
            var del_1 = del;
            var get_1 = get;
            var patch_1 = patch;
            var post_1 = post;
            var put_1 = put;
            var send_1 = send;
            var xhr = {
              del: del_1,
              get: get_1,
              patch: patch_1,
              post: post_1,
              put: put_1,
              send: send_1
            };
            var http = /*#__PURE__*/Object.freeze( /*#__PURE__*/Object.assign( /*#__PURE__*/Object.create(null), xhr, {
              'default': xhr,
              del: del_1,
              get: get_1,
              patch: patch_1,
              post: post_1,
              put: put_1,
              send: send_1
            }));

            var ServerError =
            /** @class */
            function (_super) {
              __extends(ServerError, _super);

              function ServerError(code, message) {
                var _this = _super.call(this, message) || this;

                _this.name = "ServerError";
                _this.code = code;
                return _this;
              }

              return ServerError;
            }(Error);
            /**
             * Copyright (c) 2014 Ion Drive Software Ltd.
             * https://github.com/darrachequesne/notepack/
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in all
             * copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
             * SOFTWARE.
             */

            /**
             * Patch for Colyseus:
             * -------------------
             *
             * added `offset` on Decoder constructor, for messages arriving with a code
             * before actual msgpack data
             */
            // 
            // DECODER
            // 


            function Decoder(buffer, offset) {
              this._offset = offset;

              if (buffer instanceof ArrayBuffer) {
                this._buffer = buffer;
                this._view = new DataView(this._buffer);
              } else if (ArrayBuffer.isView(buffer)) {
                this._buffer = buffer.buffer;
                this._view = new DataView(this._buffer, buffer.byteOffset, buffer.byteLength);
              } else {
                throw new Error('Invalid argument');
              }
            }

            function utf8Read$1(view, offset, length) {
              var string = '',
                  chr = 0;

              for (var i = offset, end = offset + length; i < end; i++) {
                var _byte = view.getUint8(i);

                if ((_byte & 0x80) === 0x00) {
                  string += String.fromCharCode(_byte);
                  continue;
                }

                if ((_byte & 0xe0) === 0xc0) {
                  string += String.fromCharCode((_byte & 0x1f) << 6 | view.getUint8(++i) & 0x3f);
                  continue;
                }

                if ((_byte & 0xf0) === 0xe0) {
                  string += String.fromCharCode((_byte & 0x0f) << 12 | (view.getUint8(++i) & 0x3f) << 6 | (view.getUint8(++i) & 0x3f) << 0);
                  continue;
                }

                if ((_byte & 0xf8) === 0xf0) {
                  chr = (_byte & 0x07) << 18 | (view.getUint8(++i) & 0x3f) << 12 | (view.getUint8(++i) & 0x3f) << 6 | (view.getUint8(++i) & 0x3f) << 0;

                  if (chr >= 0x010000) {
                    // surrogate pair
                    chr -= 0x010000;
                    string += String.fromCharCode((chr >>> 10) + 0xD800, (chr & 0x3FF) + 0xDC00);
                  } else {
                    string += String.fromCharCode(chr);
                  }

                  continue;
                }

                throw new Error('Invalid byte ' + _byte.toString(16));
              }

              return string;
            }

            Decoder.prototype._array = function (length) {
              var value = new Array(length);

              for (var i = 0; i < length; i++) {
                value[i] = this._parse();
              }

              return value;
            };

            Decoder.prototype._map = function (length) {
              var key = '',
                  value = {};

              for (var i = 0; i < length; i++) {
                key = this._parse();
                value[key] = this._parse();
              }

              return value;
            };

            Decoder.prototype._str = function (length) {
              var value = utf8Read$1(this._view, this._offset, length);
              this._offset += length;
              return value;
            };

            Decoder.prototype._bin = function (length) {
              var value = this._buffer.slice(this._offset, this._offset + length);

              this._offset += length;
              return value;
            };

            Decoder.prototype._parse = function () {
              var prefix = this._view.getUint8(this._offset++);

              var value,
                  length = 0,
                  type = 0,
                  hi = 0,
                  lo = 0;

              if (prefix < 0xc0) {
                // positive fixint
                if (prefix < 0x80) {
                  return prefix;
                } // fixmap


                if (prefix < 0x90) {
                  return this._map(prefix & 0x0f);
                } // fixarray


                if (prefix < 0xa0) {
                  return this._array(prefix & 0x0f);
                } // fixstr


                return this._str(prefix & 0x1f);
              } // negative fixint


              if (prefix > 0xdf) {
                return (0xff - prefix + 1) * -1;
              }

              switch (prefix) {
                // nil
                case 0xc0:
                  return null;
                // false

                case 0xc2:
                  return false;
                // true

                case 0xc3:
                  return true;
                // bin

                case 0xc4:
                  length = this._view.getUint8(this._offset);
                  this._offset += 1;
                  return this._bin(length);

                case 0xc5:
                  length = this._view.getUint16(this._offset);
                  this._offset += 2;
                  return this._bin(length);

                case 0xc6:
                  length = this._view.getUint32(this._offset);
                  this._offset += 4;
                  return this._bin(length);
                // ext

                case 0xc7:
                  length = this._view.getUint8(this._offset);
                  type = this._view.getInt8(this._offset + 1);
                  this._offset += 2;
                  return [type, this._bin(length)];

                case 0xc8:
                  length = this._view.getUint16(this._offset);
                  type = this._view.getInt8(this._offset + 2);
                  this._offset += 3;
                  return [type, this._bin(length)];

                case 0xc9:
                  length = this._view.getUint32(this._offset);
                  type = this._view.getInt8(this._offset + 4);
                  this._offset += 5;
                  return [type, this._bin(length)];
                // float

                case 0xca:
                  value = this._view.getFloat32(this._offset);
                  this._offset += 4;
                  return value;

                case 0xcb:
                  value = this._view.getFloat64(this._offset);
                  this._offset += 8;
                  return value;
                // uint

                case 0xcc:
                  value = this._view.getUint8(this._offset);
                  this._offset += 1;
                  return value;

                case 0xcd:
                  value = this._view.getUint16(this._offset);
                  this._offset += 2;
                  return value;

                case 0xce:
                  value = this._view.getUint32(this._offset);
                  this._offset += 4;
                  return value;

                case 0xcf:
                  hi = this._view.getUint32(this._offset) * Math.pow(2, 32);
                  lo = this._view.getUint32(this._offset + 4);
                  this._offset += 8;
                  return hi + lo;
                // int

                case 0xd0:
                  value = this._view.getInt8(this._offset);
                  this._offset += 1;
                  return value;

                case 0xd1:
                  value = this._view.getInt16(this._offset);
                  this._offset += 2;
                  return value;

                case 0xd2:
                  value = this._view.getInt32(this._offset);
                  this._offset += 4;
                  return value;

                case 0xd3:
                  hi = this._view.getInt32(this._offset) * Math.pow(2, 32);
                  lo = this._view.getUint32(this._offset + 4);
                  this._offset += 8;
                  return hi + lo;
                // fixext

                case 0xd4:
                  type = this._view.getInt8(this._offset);
                  this._offset += 1;

                  if (type === 0x00) {
                    this._offset += 1;
                    return void 0;
                  }

                  return [type, this._bin(1)];

                case 0xd5:
                  type = this._view.getInt8(this._offset);
                  this._offset += 1;
                  return [type, this._bin(2)];

                case 0xd6:
                  type = this._view.getInt8(this._offset);
                  this._offset += 1;
                  return [type, this._bin(4)];

                case 0xd7:
                  type = this._view.getInt8(this._offset);
                  this._offset += 1;

                  if (type === 0x00) {
                    hi = this._view.getInt32(this._offset) * Math.pow(2, 32);
                    lo = this._view.getUint32(this._offset + 4);
                    this._offset += 8;
                    return new Date(hi + lo);
                  }

                  return [type, this._bin(8)];

                case 0xd8:
                  type = this._view.getInt8(this._offset);
                  this._offset += 1;
                  return [type, this._bin(16)];
                // str

                case 0xd9:
                  length = this._view.getUint8(this._offset);
                  this._offset += 1;
                  return this._str(length);

                case 0xda:
                  length = this._view.getUint16(this._offset);
                  this._offset += 2;
                  return this._str(length);

                case 0xdb:
                  length = this._view.getUint32(this._offset);
                  this._offset += 4;
                  return this._str(length);
                // array

                case 0xdc:
                  length = this._view.getUint16(this._offset);
                  this._offset += 2;
                  return this._array(length);

                case 0xdd:
                  length = this._view.getUint32(this._offset);
                  this._offset += 4;
                  return this._array(length);
                // map

                case 0xde:
                  length = this._view.getUint16(this._offset);
                  this._offset += 2;
                  return this._map(length);

                case 0xdf:
                  length = this._view.getUint32(this._offset);
                  this._offset += 4;
                  return this._map(length);
              }

              throw new Error('Could not parse');
            };

            function decode(buffer, offset) {
              if (offset === void 0) {
                offset = 0;
              }

              var decoder = new Decoder(buffer, offset);

              var value = decoder._parse();

              if (decoder._offset !== buffer.byteLength) {
                throw new Error(buffer.byteLength - decoder._offset + ' trailing bytes');
              }

              return value;
            } // 
            // ENCODER
            // 


            function utf8Write(view, offset, str) {
              var c = 0;

              for (var i = 0, l = str.length; i < l; i++) {
                c = str.charCodeAt(i);

                if (c < 0x80) {
                  view.setUint8(offset++, c);
                } else if (c < 0x800) {
                  view.setUint8(offset++, 0xc0 | c >> 6);
                  view.setUint8(offset++, 0x80 | c & 0x3f);
                } else if (c < 0xd800 || c >= 0xe000) {
                  view.setUint8(offset++, 0xe0 | c >> 12);
                  view.setUint8(offset++, 0x80 | c >> 6 & 0x3f);
                  view.setUint8(offset++, 0x80 | c & 0x3f);
                } else {
                  i++;
                  c = 0x10000 + ((c & 0x3ff) << 10 | str.charCodeAt(i) & 0x3ff);
                  view.setUint8(offset++, 0xf0 | c >> 18);
                  view.setUint8(offset++, 0x80 | c >> 12 & 0x3f);
                  view.setUint8(offset++, 0x80 | c >> 6 & 0x3f);
                  view.setUint8(offset++, 0x80 | c & 0x3f);
                }
              }
            }

            function utf8Length$1(str) {
              var c = 0,
                  length = 0;

              for (var i = 0, l = str.length; i < l; i++) {
                c = str.charCodeAt(i);

                if (c < 0x80) {
                  length += 1;
                } else if (c < 0x800) {
                  length += 2;
                } else if (c < 0xd800 || c >= 0xe000) {
                  length += 3;
                } else {
                  i++;
                  length += 4;
                }
              }

              return length;
            }

            function _encode(bytes, defers, value) {
              var type = typeof value,
                  i = 0,
                  l = 0,
                  hi = 0,
                  lo = 0,
                  length = 0,
                  size = 0;

              if (type === 'string') {
                length = utf8Length$1(value); // fixstr

                if (length < 0x20) {
                  bytes.push(length | 0xa0);
                  size = 1;
                } // str 8
                else if (length < 0x100) {
                    bytes.push(0xd9, length);
                    size = 2;
                  } // str 16
                  else if (length < 0x10000) {
                      bytes.push(0xda, length >> 8, length);
                      size = 3;
                    } // str 32
                    else if (length < 0x100000000) {
                        bytes.push(0xdb, length >> 24, length >> 16, length >> 8, length);
                        size = 5;
                      } else {
                        throw new Error('String too long');
                      }

                defers.push({
                  _str: value,
                  _length: length,
                  _offset: bytes.length
                });
                return size + length;
              }

              if (type === 'number') {
                // TODO: encode to float 32?
                // float 64
                if (Math.floor(value) !== value || !isFinite(value)) {
                  bytes.push(0xcb);
                  defers.push({
                    _float: value,
                    _length: 8,
                    _offset: bytes.length
                  });
                  return 9;
                }

                if (value >= 0) {
                  // positive fixnum
                  if (value < 0x80) {
                    bytes.push(value);
                    return 1;
                  } // uint 8


                  if (value < 0x100) {
                    bytes.push(0xcc, value);
                    return 2;
                  } // uint 16


                  if (value < 0x10000) {
                    bytes.push(0xcd, value >> 8, value);
                    return 3;
                  } // uint 32


                  if (value < 0x100000000) {
                    bytes.push(0xce, value >> 24, value >> 16, value >> 8, value);
                    return 5;
                  } // uint 64


                  hi = value / Math.pow(2, 32) >> 0;
                  lo = value >>> 0;
                  bytes.push(0xcf, hi >> 24, hi >> 16, hi >> 8, hi, lo >> 24, lo >> 16, lo >> 8, lo);
                  return 9;
                } else {
                  // negative fixnum
                  if (value >= -0x20) {
                    bytes.push(value);
                    return 1;
                  } // int 8


                  if (value >= -0x80) {
                    bytes.push(0xd0, value);
                    return 2;
                  } // int 16


                  if (value >= -0x8000) {
                    bytes.push(0xd1, value >> 8, value);
                    return 3;
                  } // int 32


                  if (value >= -0x80000000) {
                    bytes.push(0xd2, value >> 24, value >> 16, value >> 8, value);
                    return 5;
                  } // int 64


                  hi = Math.floor(value / Math.pow(2, 32));
                  lo = value >>> 0;
                  bytes.push(0xd3, hi >> 24, hi >> 16, hi >> 8, hi, lo >> 24, lo >> 16, lo >> 8, lo);
                  return 9;
                }
              }

              if (type === 'object') {
                // nil
                if (value === null) {
                  bytes.push(0xc0);
                  return 1;
                }

                if (Array.isArray(value)) {
                  length = value.length; // fixarray

                  if (length < 0x10) {
                    bytes.push(length | 0x90);
                    size = 1;
                  } // array 16
                  else if (length < 0x10000) {
                      bytes.push(0xdc, length >> 8, length);
                      size = 3;
                    } // array 32
                    else if (length < 0x100000000) {
                        bytes.push(0xdd, length >> 24, length >> 16, length >> 8, length);
                        size = 5;
                      } else {
                        throw new Error('Array too large');
                      }

                  for (i = 0; i < length; i++) {
                    size += _encode(bytes, defers, value[i]);
                  }

                  return size;
                } // fixext 8 / Date


                if (value instanceof Date) {
                  var time = value.getTime();
                  hi = Math.floor(time / Math.pow(2, 32));
                  lo = time >>> 0;
                  bytes.push(0xd7, 0, hi >> 24, hi >> 16, hi >> 8, hi, lo >> 24, lo >> 16, lo >> 8, lo);
                  return 10;
                }

                if (value instanceof ArrayBuffer) {
                  length = value.byteLength; // bin 8

                  if (length < 0x100) {
                    bytes.push(0xc4, length);
                    size = 2;
                  } else // bin 16
                    if (length < 0x10000) {
                      bytes.push(0xc5, length >> 8, length);
                      size = 3;
                    } else // bin 32
                      if (length < 0x100000000) {
                        bytes.push(0xc6, length >> 24, length >> 16, length >> 8, length);
                        size = 5;
                      } else {
                        throw new Error('Buffer too large');
                      }

                  defers.push({
                    _bin: value,
                    _length: length,
                    _offset: bytes.length
                  });
                  return size + length;
                }

                if (typeof value.toJSON === 'function') {
                  return _encode(bytes, defers, value.toJSON());
                }

                var keys = [],
                    key = '';
                var allKeys = Object.keys(value);

                for (i = 0, l = allKeys.length; i < l; i++) {
                  key = allKeys[i];

                  if (typeof value[key] !== 'function') {
                    keys.push(key);
                  }
                }

                length = keys.length; // fixmap

                if (length < 0x10) {
                  bytes.push(length | 0x80);
                  size = 1;
                } // map 16
                else if (length < 0x10000) {
                    bytes.push(0xde, length >> 8, length);
                    size = 3;
                  } // map 32
                  else if (length < 0x100000000) {
                      bytes.push(0xdf, length >> 24, length >> 16, length >> 8, length);
                      size = 5;
                    } else {
                      throw new Error('Object too large');
                    }

                for (i = 0; i < length; i++) {
                  key = keys[i];
                  size += _encode(bytes, defers, key);
                  size += _encode(bytes, defers, value[key]);
                }

                return size;
              } // false/true


              if (type === 'boolean') {
                bytes.push(value ? 0xc3 : 0xc2);
                return 1;
              } // fixext 1 / undefined


              if (type === 'undefined') {
                bytes.push(0xd4, 0, 0);
                return 3;
              }

              throw new Error('Could not encode');
            }

            function encode(value) {
              var bytes = [];
              var defers = [];

              var size = _encode(bytes, defers, value);

              var buf = new ArrayBuffer(size);
              var view = new DataView(buf);
              var deferIndex = 0;
              var deferWritten = 0;
              var nextOffset = -1;

              if (defers.length > 0) {
                nextOffset = defers[0]._offset;
              }

              var defer,
                  deferLength = 0,
                  offset = 0;

              for (var i = 0, l = bytes.length; i < l; i++) {
                view.setUint8(deferWritten + i, bytes[i]);

                if (i + 1 !== nextOffset) {
                  continue;
                }

                defer = defers[deferIndex];
                deferLength = defer._length;
                offset = deferWritten + nextOffset;

                if (defer._bin) {
                  var bin = new Uint8Array(defer._bin);

                  for (var j = 0; j < deferLength; j++) {
                    view.setUint8(offset + j, bin[j]);
                  }
                } else if (defer._str) {
                  utf8Write(view, offset, defer._str);
                } else if (defer._float !== undefined) {
                  view.setFloat64(offset, defer._float);
                }

                deferIndex++;
                deferWritten += deferLength;

                if (defers[deferIndex]) {
                  nextOffset = defers[deferIndex]._offset;
                }
              }

              return buf;
            }

            var browser = function browser() {
              throw new Error('ws does not work in the browser. Browser clients must use the native ' + 'WebSocket object');
            };

            var WebSocket = globalThis.WebSocket || browser;

            var WebSocketTransport =
            /** @class */
            function () {
              function WebSocketTransport(events) {
                this.events = events;
              }

              WebSocketTransport.prototype.send = function (data) {
                if (data instanceof ArrayBuffer) {
                  this.ws.send(data);
                } else if (Array.isArray(data)) {
                  this.ws.send(new Uint8Array(data).buffer);
                }
              };

              WebSocketTransport.prototype.connect = function (url) {
                this.ws = new WebSocket(url, this.protocols);
                this.ws.binaryType = 'arraybuffer';
                this.ws.onopen = this.events.onopen;
                this.ws.onmessage = this.events.onmessage;
                this.ws.onclose = this.events.onclose;
                this.ws.onerror = this.events.onerror;
              };

              WebSocketTransport.prototype.close = function (code, reason) {
                this.ws.close(code, reason);
              };

              return WebSocketTransport;
            }();

            var Connection =
            /** @class */
            function () {
              function Connection() {
                this.events = {};
                this.transport = new WebSocketTransport(this.events);
              }

              Connection.prototype.send = function (data) {
                this.transport.send(data);
              };

              Connection.prototype.connect = function (url) {
                this.transport.connect(url);
              };

              Connection.prototype.close = function (code, reason) {
                this.transport.close(code, reason);
              };

              return Connection;
            }();

            var serializers = {};

            function registerSerializer(id, serializer) {
              serializers[id] = serializer;
            }

            function getSerializer(id) {
              var serializer = serializers[id];

              if (!serializer) {
                throw new Error("missing serializer: " + id);
              }

              return serializer;
            } // Use codes between 0~127 for lesser throughput (1 byte)


            exports.Protocol = void 0;

            (function (Protocol) {
              // Room-related (10~19)
              Protocol[Protocol["HANDSHAKE"] = 9] = "HANDSHAKE";
              Protocol[Protocol["JOIN_ROOM"] = 10] = "JOIN_ROOM";
              Protocol[Protocol["ERROR"] = 11] = "ERROR";
              Protocol[Protocol["LEAVE_ROOM"] = 12] = "LEAVE_ROOM";
              Protocol[Protocol["ROOM_DATA"] = 13] = "ROOM_DATA";
              Protocol[Protocol["ROOM_STATE"] = 14] = "ROOM_STATE";
              Protocol[Protocol["ROOM_STATE_PATCH"] = 15] = "ROOM_STATE_PATCH";
              Protocol[Protocol["ROOM_DATA_SCHEMA"] = 16] = "ROOM_DATA_SCHEMA";
            })(exports.Protocol || (exports.Protocol = {}));

            exports.ErrorCode = void 0;

            (function (ErrorCode) {
              ErrorCode[ErrorCode["MATCHMAKE_NO_HANDLER"] = 4210] = "MATCHMAKE_NO_HANDLER";
              ErrorCode[ErrorCode["MATCHMAKE_INVALID_CRITERIA"] = 4211] = "MATCHMAKE_INVALID_CRITERIA";
              ErrorCode[ErrorCode["MATCHMAKE_INVALID_ROOM_ID"] = 4212] = "MATCHMAKE_INVALID_ROOM_ID";
              ErrorCode[ErrorCode["MATCHMAKE_UNHANDLED"] = 4213] = "MATCHMAKE_UNHANDLED";
              ErrorCode[ErrorCode["MATCHMAKE_EXPIRED"] = 4214] = "MATCHMAKE_EXPIRED";
              ErrorCode[ErrorCode["AUTH_FAILED"] = 4215] = "AUTH_FAILED";
              ErrorCode[ErrorCode["APPLICATION_ERROR"] = 4216] = "APPLICATION_ERROR";
            })(exports.ErrorCode || (exports.ErrorCode = {}));

            function utf8Read(view, offset) {
              var length = view[offset++];
              var string = '',
                  chr = 0;

              for (var i = offset, end = offset + length; i < end; i++) {
                var _byte2 = view[i];

                if ((_byte2 & 0x80) === 0x00) {
                  string += String.fromCharCode(_byte2);
                  continue;
                }

                if ((_byte2 & 0xe0) === 0xc0) {
                  string += String.fromCharCode((_byte2 & 0x1f) << 6 | view[++i] & 0x3f);
                  continue;
                }

                if ((_byte2 & 0xf0) === 0xe0) {
                  string += String.fromCharCode((_byte2 & 0x0f) << 12 | (view[++i] & 0x3f) << 6 | (view[++i] & 0x3f) << 0);
                  continue;
                }

                if ((_byte2 & 0xf8) === 0xf0) {
                  chr = (_byte2 & 0x07) << 18 | (view[++i] & 0x3f) << 12 | (view[++i] & 0x3f) << 6 | (view[++i] & 0x3f) << 0;

                  if (chr >= 0x010000) {
                    // surrogate pair
                    chr -= 0x010000;
                    string += String.fromCharCode((chr >>> 10) + 0xD800, (chr & 0x3FF) + 0xDC00);
                  } else {
                    string += String.fromCharCode(chr);
                  }

                  continue;
                }

                throw new Error('Invalid byte ' + _byte2.toString(16));
              }

              return string;
            } // Faster for short strings than Buffer.byteLength


            function utf8Length(str) {
              if (str === void 0) {
                str = '';
              }

              var c = 0;
              var length = 0;

              for (var i = 0, l = str.length; i < l; i++) {
                c = str.charCodeAt(i);

                if (c < 0x80) {
                  length += 1;
                } else if (c < 0x800) {
                  length += 2;
                } else if (c < 0xd800 || c >= 0xe000) {
                  length += 3;
                } else {
                  i++;
                  length += 4;
                }
              }

              return length + 1;
            }

            var createNanoEvents = function createNanoEvents() {
              return {
                events: {},
                emit: function emit(event) {
                  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = arguments[_key];
                  }

                  (this.events[event] || []).forEach(function (i) {
                    return i.apply(void 0, args);
                  });
                },
                on: function on(event, cb) {
                  var _this2 = this;

                  (this.events[event] = this.events[event] || []).push(cb);
                  return function () {
                    return _this2.events[event] = (_this2.events[event] || []).filter(function (i) {
                      return i !== cb;
                    });
                  };
                }
              };
            };

            var EventEmitter =
            /** @class */
            function () {
              function EventEmitter() {
                this.handlers = [];
              }

              EventEmitter.prototype.register = function (cb, once) {
                this.handlers.push(cb);
                return this;
              };

              EventEmitter.prototype.invoke = function () {
                var _this = this;

                var args = [];

                for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
                }

                this.handlers.forEach(function (handler) {
                  return handler.apply(_this, args);
                });
              };

              EventEmitter.prototype.invokeAsync = function () {
                var _this = this;

                var args = [];

                for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
                }

                return Promise.all(this.handlers.map(function (handler) {
                  return handler.apply(_this, args);
                }));
              };

              EventEmitter.prototype.remove = function (cb) {
                var index = this.handlers.indexOf(cb);
                this.handlers[index] = this.handlers[this.handlers.length - 1];
                this.handlers.pop();
              };

              EventEmitter.prototype.clear = function () {
                this.handlers = [];
              };

              return EventEmitter;
            }();

            function createSignal() {
              var emitter = new EventEmitter();

              function register(cb) {
                return emitter.register(cb, this === null);
              }

              register.once = function (cb) {
                var callback = function callback() {
                  var args = [];

                  for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                  }

                  cb.apply(this, args);
                  emitter.remove(callback);
                };

                emitter.register(callback);
              };

              register.remove = function (cb) {
                return emitter.remove(cb);
              };

              register.invoke = function () {
                var args = [];

                for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
                }

                return emitter.invoke.apply(emitter, args);
              };

              register.invokeAsync = function () {
                var args = [];

                for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
                }

                return emitter.invokeAsync.apply(emitter, args);
              };

              register.clear = function () {
                return emitter.clear();
              };

              return register;
            }

            var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

            function createCommonjsModule(fn) {
              var module = {
                exports: {}
              };
              return fn(module, module.exports), module.exports;
            }

            var umd = createCommonjsModule(function (module, exports) {
              (function (global, factory) {
                factory(exports);
              })(commonjsGlobal, function (exports) {
                /*! *****************************************************************************
                Copyright (c) Microsoft Corporation.
                 Permission to use, copy, modify, and/or distribute this software for any
                purpose with or without fee is hereby granted.
                 THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
                REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
                AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
                INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
                LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
                OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
                PERFORMANCE OF THIS SOFTWARE.
                ***************************************************************************** */

                /* global Reflect, Promise */
                var _extendStatics2 = function extendStatics(d, b) {
                  _extendStatics2 = Object.setPrototypeOf || {
                    __proto__: []
                  } instanceof Array && function (d, b) {
                    d.__proto__ = b;
                  } || function (d, b) {
                    for (var p in b) {
                      if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                    }
                  };

                  return _extendStatics2(d, b);
                };

                function __extends(d, b) {
                  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

                  _extendStatics2(d, b);

                  function __() {
                    this.constructor = d;
                  }

                  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                }

                function __decorate(decorators, target, key, desc) {
                  var c = arguments.length,
                      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                      d;
                  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                  }
                  return c > 3 && r && Object.defineProperty(target, key, r), r;
                }

                function __spreadArray(to, from) {
                  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
                    to[j] = from[i];
                  }

                  return to;
                } // export const SWITCH_TO_STRUCTURE = 193; (easily collides with DELETE_AND_ADD + fieldIndex = 2)


                var SWITCH_TO_STRUCTURE = 255; // (decoding collides with DELETE_AND_ADD + fieldIndex = 63)

                var TYPE_ID = 213;
                /**
                 * Encoding Schema field operations.
                 */

                exports.OPERATION = void 0;

                (function (OPERATION) {
                  // add new structure/primitive
                  OPERATION[OPERATION["ADD"] = 128] = "ADD"; // replace structure/primitive

                  OPERATION[OPERATION["REPLACE"] = 0] = "REPLACE"; // delete field

                  OPERATION[OPERATION["DELETE"] = 64] = "DELETE"; // DELETE field, followed by an ADD

                  OPERATION[OPERATION["DELETE_AND_ADD"] = 192] = "DELETE_AND_ADD"; // TOUCH is used to determine hierarchy of nested Schema structures during serialization.
                  // touches are NOT encoded.

                  OPERATION[OPERATION["TOUCH"] = 1] = "TOUCH"; // MapSchema Operations

                  OPERATION[OPERATION["CLEAR"] = 10] = "CLEAR";
                })(exports.OPERATION || (exports.OPERATION = {})); // export enum OPERATION {
                //     // add new structure/primitive
                //     // (128)
                //     ADD = 128, // 10000000,
                //     // replace structure/primitive
                //     REPLACE = 1,// 00000001
                //     // delete field
                //     DELETE = 192, // 11000000
                //     // DELETE field, followed by an ADD
                //     DELETE_AND_ADD = 224, // 11100000
                //     // TOUCH is used to determine hierarchy of nested Schema structures during serialization.
                //     // touches are NOT encoded.
                //     TOUCH = 0, // 00000000
                //     // MapSchema Operations
                //     CLEAR = 10,
                // }
                //
                // Root holds all schema references by unique id
                //


                var Root =
                /** @class */
                function () {
                  function Root() {
                    //
                    // Relation of refId => Schema structure
                    // For direct access of structures during decoding time.
                    //
                    this.refs = new Map();
                    this.refCounts = {};
                    this.deletedRefs = new Set();
                    this.nextUniqueId = 0;
                  }

                  Root.prototype.getNextUniqueId = function () {
                    return this.nextUniqueId++;
                  }; // for decoding


                  Root.prototype.addRef = function (refId, ref, incrementCount) {
                    if (incrementCount === void 0) {
                      incrementCount = true;
                    }

                    this.refs.set(refId, ref);

                    if (incrementCount) {
                      this.refCounts[refId] = (this.refCounts[refId] || 0) + 1;
                    }
                  }; // for decoding


                  Root.prototype.removeRef = function (refId) {
                    this.refCounts[refId] = this.refCounts[refId] - 1;
                    this.deletedRefs.add(refId);
                  };

                  Root.prototype.clearRefs = function () {
                    this.refs.clear();
                    this.deletedRefs.clear();
                    this.refCounts = {};
                  }; // for decoding


                  Root.prototype.garbageCollectDeletedRefs = function () {
                    var _this = this;

                    this.deletedRefs.forEach(function (refId) {
                      if (_this.refCounts[refId] <= 0) {
                        var ref = _this.refs.get(refId); //
                        // Ensure child schema instances have their references removed as well.
                        //


                        if (ref instanceof Schema) {
                          for (var fieldName in ref['_definition'].schema) {
                            if (typeof ref['_definition'].schema[fieldName] !== "string" && ref[fieldName] && ref[fieldName]['$changes']) {
                              _this.removeRef(ref[fieldName]['$changes'].refId);
                            }
                          }
                        } else {
                          var definition = ref['$changes'].parent._definition;
                          var type = definition.schema[definition.fieldsByIndex[ref['$changes'].parentIndex]];

                          if (typeof Object.values(type)[0] === "function") {
                            Array.from(ref.values()).forEach(function (child) {
                              return _this.removeRef(child['$changes'].refId);
                            });
                          }
                        }

                        _this.refs["delete"](refId);

                        delete _this.refCounts[refId];
                      }
                    }); // clear deleted refs.

                    this.deletedRefs.clear();
                  };

                  return Root;
                }();

                var ChangeTree =
                /** @class */
                function () {
                  function ChangeTree(ref, parent, root) {
                    this.changed = false;
                    this.changes = new Map();
                    this.allChanges = new Set(); // cached indexes for filtering

                    this.caches = {};
                    this.currentCustomOperation = 0;
                    this.ref = ref;
                    this.setParent(parent, root);
                  }

                  ChangeTree.prototype.setParent = function (parent, root, parentIndex) {
                    var _this = this;

                    if (!this.indexes) {
                      this.indexes = this.ref instanceof Schema ? this.ref['_definition'].indexes : {};
                    }

                    this.parent = parent;
                    this.parentIndex = parentIndex; // avoid setting parents with empty `root`

                    if (!root) {
                      return;
                    }

                    this.root = root; //
                    // assign same parent on child structures
                    //

                    if (this.ref instanceof Schema) {
                      var definition = this.ref['_definition'];

                      for (var field in definition.schema) {
                        var value = this.ref[field];

                        if (value && value['$changes']) {
                          var parentIndex_1 = definition.indexes[field];
                          value['$changes'].setParent(this.ref, root, parentIndex_1);
                        }
                      }
                    } else if (typeof this.ref === "object") {
                      this.ref.forEach(function (value, key) {
                        if (value instanceof Schema) {
                          var changeTreee = value['$changes'];
                          var parentIndex_2 = _this.ref['$changes'].indexes[key];
                          changeTreee.setParent(_this.ref, _this.root, parentIndex_2);
                        }
                      });
                    }
                  };

                  ChangeTree.prototype.operation = function (op) {
                    this.changes.set(--this.currentCustomOperation, op);
                  };

                  ChangeTree.prototype.change = function (fieldName, operation) {
                    if (operation === void 0) {
                      operation = exports.OPERATION.ADD;
                    }

                    var index = typeof fieldName === "number" ? fieldName : this.indexes[fieldName];
                    this.assertValidIndex(index, fieldName);
                    var previousChange = this.changes.get(index);

                    if (!previousChange || previousChange.op === exports.OPERATION.DELETE || previousChange.op === exports.OPERATION.TOUCH // (mazmorra.io's BattleAction issue)
                    ) {
                        this.changes.set(index, {
                          op: !previousChange ? operation : previousChange.op === exports.OPERATION.DELETE ? exports.OPERATION.DELETE_AND_ADD : operation,
                          // : OPERATION.REPLACE,
                          index: index
                        });
                      }

                    this.allChanges.add(index);
                    this.changed = true;
                    this.touchParents();
                  };

                  ChangeTree.prototype.touch = function (fieldName) {
                    var index = typeof fieldName === "number" ? fieldName : this.indexes[fieldName];
                    this.assertValidIndex(index, fieldName);

                    if (!this.changes.has(index)) {
                      this.changes.set(index, {
                        op: exports.OPERATION.TOUCH,
                        index: index
                      });
                    }

                    this.allChanges.add(index); // ensure touch is placed until the $root is found.

                    this.touchParents();
                  };

                  ChangeTree.prototype.touchParents = function () {
                    if (this.parent) {
                      this.parent['$changes'].touch(this.parentIndex);
                    }
                  };

                  ChangeTree.prototype.getType = function (index) {
                    if (this.ref['_definition']) {
                      var definition = this.ref['_definition'];
                      return definition.schema[definition.fieldsByIndex[index]];
                    } else {
                      var definition = this.parent['_definition'];
                      var parentType = definition.schema[definition.fieldsByIndex[this.parentIndex]]; //
                      // Get the child type from parent structure.
                      // - ["string"] => "string"
                      // - { map: "string" } => "string"
                      // - { set: "string" } => "string"
                      //

                      return Object.values(parentType)[0];
                    }
                  };

                  ChangeTree.prototype.getChildrenFilter = function () {
                    var childFilters = this.parent['_definition'].childFilters;
                    return childFilters && childFilters[this.parentIndex];
                  }; //
                  // used during `.encode()`
                  //


                  ChangeTree.prototype.getValue = function (index) {
                    return this.ref['getByIndex'](index);
                  };

                  ChangeTree.prototype["delete"] = function (fieldName) {
                    var index = typeof fieldName === "number" ? fieldName : this.indexes[fieldName];

                    if (index === undefined) {
                      console.warn("@colyseus/schema " + this.ref.constructor.name + ": trying to delete non-existing index: " + fieldName + " (" + index + ")");
                      return;
                    }

                    var previousValue = this.getValue(index); // console.log("$changes.delete =>", { fieldName, index, previousValue });

                    this.changes.set(index, {
                      op: exports.OPERATION.DELETE,
                      index: index
                    });
                    this.allChanges["delete"](index); // delete cache

                    delete this.caches[index]; // remove `root` reference

                    if (previousValue && previousValue['$changes']) {
                      previousValue['$changes'].parent = undefined;
                    }

                    this.changed = true;
                    this.touchParents();
                  };

                  ChangeTree.prototype.discard = function (changed, discardAll) {
                    var _this = this;

                    if (changed === void 0) {
                      changed = false;
                    }

                    if (discardAll === void 0) {
                      discardAll = false;
                    } //
                    // Map, Array, etc:
                    // Remove cached key to ensure ADD operations is unsed instead of
                    // REPLACE in case same key is used on next patches.
                    //
                    // TODO: refactor this. this is not relevant for Collection and Set.
                    //


                    if (!(this.ref instanceof Schema)) {
                      this.changes.forEach(function (change) {
                        if (change.op === exports.OPERATION.DELETE) {
                          var index = _this.ref['getIndex'](change.index);

                          delete _this.indexes[index];
                        }
                      });
                    }

                    this.changes.clear();
                    this.changed = changed;

                    if (discardAll) {
                      this.allChanges.clear();
                    } // re-set `currentCustomOperation`


                    this.currentCustomOperation = 0;
                  };
                  /**
                   * Recursively discard all changes from this, and child structures.
                   */


                  ChangeTree.prototype.discardAll = function () {
                    var _this = this;

                    this.changes.forEach(function (change) {
                      var value = _this.getValue(change.index);

                      if (value && value['$changes']) {
                        value['$changes'].discardAll();
                      }
                    });
                    this.discard();
                  }; // cache(field: number, beginIndex: number, endIndex: number) {


                  ChangeTree.prototype.cache = function (field, cachedBytes) {
                    this.caches[field] = cachedBytes;
                  };

                  ChangeTree.prototype.clone = function () {
                    return new ChangeTree(this.ref, this.parent, this.root);
                  };

                  ChangeTree.prototype.ensureRefId = function () {
                    // skip if refId is already set.
                    if (this.refId !== undefined) {
                      return;
                    }

                    this.refId = this.root.getNextUniqueId();
                  };

                  ChangeTree.prototype.assertValidIndex = function (index, fieldName) {
                    if (index === undefined) {
                      throw new Error("ChangeTree: missing index for field \"" + fieldName + "\"");
                    }
                  };

                  return ChangeTree;
                }(); //
                // Notes:
                // -----
                //
                // - The tsconfig.json of @colyseus/schema uses ES2018.
                // - ES2019 introduces `flatMap` / `flat`, which is not currently relevant, and caused other issues.
                //


                var DEFAULT_SORT = function DEFAULT_SORT(a, b) {
                  var A = a.toString();
                  var B = b.toString();
                  if (A < B) return -1;else if (A > B) return 1;else return 0;
                };

                function getArrayProxy(value) {
                  value['$proxy'] = true; //
                  // compatibility with @colyseus/schema 0.5.x
                  // - allow `map["key"]`
                  // - allow `map["key"] = "xxx"`
                  // - allow `delete map["key"]`
                  //

                  value = new Proxy(value, {
                    get: function get(obj, prop) {
                      if (typeof prop !== "symbol" && !isNaN(prop) // https://stackoverflow.com/a/175787/892698
                      ) {
                          return obj.at(prop);
                        } else {
                        return obj[prop];
                      }
                    },
                    set: function set(obj, prop, setValue) {
                      if (typeof prop !== "symbol" && !isNaN(prop)) {
                        var indexes = Array.from(obj['$items'].keys());
                        var key = parseInt(indexes[prop] || prop);

                        if (setValue === undefined || setValue === null) {
                          obj.deleteAt(key);
                        } else {
                          obj.setAt(key, setValue);
                        }
                      } else {
                        obj[prop] = setValue;
                      }

                      return true;
                    },
                    deleteProperty: function deleteProperty(obj, prop) {
                      if (typeof prop === "number") {
                        obj.deleteAt(prop);
                      } else {
                        delete obj[prop];
                      }

                      return true;
                    }
                  });
                  return value;
                }

                var ArraySchema =
                /** @class */
                function () {
                  function ArraySchema() {
                    var items = [];

                    for (var _i = 0; _i < arguments.length; _i++) {
                      items[_i] = arguments[_i];
                    }

                    this.$changes = new ChangeTree(this);
                    this.$items = new Map();
                    this.$indexes = new Map();
                    this.$refId = 0;
                    this.push.apply(this, items);
                  }

                  ArraySchema.is = function (type) {
                    return Array.isArray(type);
                  };

                  Object.defineProperty(ArraySchema.prototype, "length", {
                    get: function get() {
                      return this.$items.size;
                    },
                    set: function set(value) {
                      if (value === 0) {
                        this.clear();
                      } else {
                        this.splice(value, this.length - value);
                      }
                    },
                    enumerable: false,
                    configurable: true
                  });

                  ArraySchema.prototype.push = function () {
                    var _this = this;

                    var values = [];

                    for (var _i = 0; _i < arguments.length; _i++) {
                      values[_i] = arguments[_i];
                    }

                    var lastIndex;
                    values.forEach(function (value) {
                      // set "index" for reference.
                      lastIndex = _this.$refId++;

                      _this.setAt(lastIndex, value);
                    });
                    return lastIndex;
                  };
                  /**
                   * Removes the last element from an array and returns it.
                   */


                  ArraySchema.prototype.pop = function () {
                    var key = Array.from(this.$indexes.values()).pop();

                    if (key === undefined) {
                      return undefined;
                    }

                    this.$changes["delete"](key);
                    this.$indexes["delete"](key);
                    var value = this.$items.get(key);
                    this.$items["delete"](key);
                    return value;
                  };

                  ArraySchema.prototype.at = function (index) {
                    //
                    // FIXME: this should be O(1)
                    //
                    var key = Array.from(this.$items.keys())[index];
                    return this.$items.get(key);
                  };

                  ArraySchema.prototype.setAt = function (index, value) {
                    var _a, _b;

                    if (value['$changes'] !== undefined) {
                      value['$changes'].setParent(this, this.$changes.root, index);
                    }

                    var operation = (_b = (_a = this.$changes.indexes[index]) === null || _a === void 0 ? void 0 : _a.op) !== null && _b !== void 0 ? _b : exports.OPERATION.ADD;
                    this.$changes.indexes[index] = index;
                    this.$indexes.set(index, index);
                    this.$items.set(index, value);
                    this.$changes.change(index, operation);
                  };

                  ArraySchema.prototype.deleteAt = function (index) {
                    var key = Array.from(this.$items.keys())[index];

                    if (key === undefined) {
                      return false;
                    }

                    return this.$deleteAt(key);
                  };

                  ArraySchema.prototype.$deleteAt = function (index) {
                    // delete at internal index
                    this.$changes["delete"](index);
                    this.$indexes["delete"](index);
                    return this.$items["delete"](index);
                  };

                  ArraySchema.prototype.clear = function (isDecoding) {
                    var _this = this; // discard previous operations.


                    this.$changes.discard(true, true);
                    this.$changes.indexes = {}; // clear previous indexes

                    this.$indexes.clear(); // flag child items for garbage collection.

                    if (isDecoding && typeof this.$changes.getType() !== "string") {
                      this.$items.forEach(function (item) {
                        _this.$changes.root.removeRef(item['$changes'].refId);
                      });
                    } // clear items


                    this.$items.clear();
                    this.$changes.operation({
                      index: 0,
                      op: exports.OPERATION.CLEAR
                    }); // touch all structures until reach root

                    this.$changes.touchParents();
                  };
                  /**
                   * Combines two or more arrays.
                   * @param items Additional items to add to the end of array1.
                   */


                  ArraySchema.prototype.concat = function () {
                    var _a;

                    var items = [];

                    for (var _i = 0; _i < arguments.length; _i++) {
                      items[_i] = arguments[_i];
                    }

                    return new (ArraySchema.bind.apply(ArraySchema, __spreadArray([void 0], (_a = Array.from(this.$items.values())).concat.apply(_a, items))))();
                  };
                  /**
                   * Adds all the elements of an array separated by the specified separator string.
                   * @param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
                   */


                  ArraySchema.prototype.join = function (separator) {
                    return Array.from(this.$items.values()).join(separator);
                  };
                  /**
                   * Reverses the elements in an Array.
                   */


                  ArraySchema.prototype.reverse = function () {
                    var _this = this;

                    var indexes = Array.from(this.$items.keys());
                    var reversedItems = Array.from(this.$items.values()).reverse();
                    reversedItems.forEach(function (item, i) {
                      _this.setAt(indexes[i], item);
                    });
                    return this;
                  };
                  /**
                   * Removes the first element from an array and returns it.
                   */


                  ArraySchema.prototype.shift = function () {
                    var indexes = Array.from(this.$items.keys());
                    var shiftAt = indexes.shift();

                    if (shiftAt === undefined) {
                      return undefined;
                    }

                    var value = this.$items.get(shiftAt);
                    this.$deleteAt(shiftAt);
                    return value;
                  };
                  /**
                   * Returns a section of an array.
                   * @param start The beginning of the specified portion of the array.
                   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
                   */


                  ArraySchema.prototype.slice = function (start, end) {
                    return new (ArraySchema.bind.apply(ArraySchema, __spreadArray([void 0], Array.from(this.$items.values()).slice(start, end))))();
                  };
                  /**
                   * Sorts an array.
                   * @param compareFn Function used to determine the order of the elements. It is expected to return
                   * a negative value if first argument is less than second argument, zero if they're equal and a positive
                   * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
                   * ```ts
                   * [11,2,22,1].sort((a, b) => a - b)
                   * ```
                   */


                  ArraySchema.prototype.sort = function (compareFn) {
                    var _this = this;

                    if (compareFn === void 0) {
                      compareFn = DEFAULT_SORT;
                    }

                    var indexes = Array.from(this.$items.keys());
                    var sortedItems = Array.from(this.$items.values()).sort(compareFn);
                    sortedItems.forEach(function (item, i) {
                      _this.setAt(indexes[i], item);
                    });
                    return this;
                  };
                  /**
                   * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
                   * @param start The zero-based location in the array from which to start removing elements.
                   * @param deleteCount The number of elements to remove.
                   * @param items Elements to insert into the array in place of the deleted elements.
                   */


                  ArraySchema.prototype.splice = function (start, deleteCount) {
                    if (deleteCount === void 0) {
                      deleteCount = this.length - start;
                    }

                    var items = [];

                    for (var _i = 2; _i < arguments.length; _i++) {
                      items[_i - 2] = arguments[_i];
                    }

                    var indexes = Array.from(this.$items.keys());
                    var removedItems = [];

                    for (var i = start; i < start + deleteCount; i++) {
                      removedItems.push(this.$items.get(indexes[i]));
                      this.$deleteAt(indexes[i]);
                    }

                    return removedItems;
                  };
                  /**
                   * Inserts new elements at the start of an array.
                   * @param items  Elements to insert at the start of the Array.
                   */


                  ArraySchema.prototype.unshift = function () {
                    var _this = this;

                    var items = [];

                    for (var _i = 0; _i < arguments.length; _i++) {
                      items[_i] = arguments[_i];
                    }

                    var length = this.length;
                    var addedLength = items.length; // const indexes = Array.from(this.$items.keys());

                    var previousValues = Array.from(this.$items.values());
                    items.forEach(function (item, i) {
                      _this.setAt(i, item);
                    });
                    previousValues.forEach(function (previousValue, i) {
                      _this.setAt(addedLength + i, previousValue);
                    });
                    return length + addedLength;
                  };
                  /**
                   * Returns the index of the first occurrence of a value in an array.
                   * @param searchElement The value to locate in the array.
                   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
                   */


                  ArraySchema.prototype.indexOf = function (searchElement, fromIndex) {
                    return Array.from(this.$items.values()).indexOf(searchElement, fromIndex);
                  };
                  /**
                   * Returns the index of the last occurrence of a specified value in an array.
                   * @param searchElement The value to locate in the array.
                   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.
                   */


                  ArraySchema.prototype.lastIndexOf = function (searchElement, fromIndex) {
                    if (fromIndex === void 0) {
                      fromIndex = this.length - 1;
                    }

                    return Array.from(this.$items.values()).lastIndexOf(searchElement, fromIndex);
                  };
                  /**
                   * Determines whether all the members of an array satisfy the specified test.
                   * @param callbackfn A function that accepts up to three arguments. The every method calls
                   * the callbackfn function for each element in the array until the callbackfn returns a value
                   * which is coercible to the Boolean value false, or until the end of the array.
                   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
                   * If thisArg is omitted, undefined is used as the this value.
                   */


                  ArraySchema.prototype.every = function (callbackfn, thisArg) {
                    return Array.from(this.$items.values()).every(callbackfn, thisArg);
                  };
                  /**
                   * Determines whether the specified callback function returns true for any element of an array.
                   * @param callbackfn A function that accepts up to three arguments. The some method calls
                   * the callbackfn function for each element in the array until the callbackfn returns a value
                   * which is coercible to the Boolean value true, or until the end of the array.
                   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
                   * If thisArg is omitted, undefined is used as the this value.
                   */


                  ArraySchema.prototype.some = function (callbackfn, thisArg) {
                    return Array.from(this.$items.values()).some(callbackfn, thisArg);
                  };
                  /**
                   * Performs the specified action for each element in an array.
                   * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
                   * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
                   */


                  ArraySchema.prototype.forEach = function (callbackfn, thisArg) {
                    Array.from(this.$items.values()).forEach(callbackfn, thisArg);
                  };
                  /**
                   * Calls a defined callback function on each element of an array, and returns an array that contains the results.
                   * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
                   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
                   */


                  ArraySchema.prototype.map = function (callbackfn, thisArg) {
                    return Array.from(this.$items.values()).map(callbackfn, thisArg);
                  };

                  ArraySchema.prototype.filter = function (callbackfn, thisArg) {
                    return Array.from(this.$items.values()).filter(callbackfn, thisArg);
                  };
                  /**
                   * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
                   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
                   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
                   */


                  ArraySchema.prototype.reduce = function (callbackfn, initialValue) {
                    return Array.from(this.$items.values()).reduce(callbackfn, initialValue);
                  };
                  /**
                   * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
                   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
                   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
                   */


                  ArraySchema.prototype.reduceRight = function (callbackfn, initialValue) {
                    return Array.from(this.$items.values()).reduceRight(callbackfn, initialValue);
                  };
                  /**
                   * Returns the value of the first element in the array where predicate is true, and undefined
                   * otherwise.
                   * @param predicate find calls predicate once for each element of the array, in ascending
                   * order, until it finds one where predicate returns true. If such an element is found, find
                   * immediately returns that element value. Otherwise, find returns undefined.
                   * @param thisArg If provided, it will be used as the this value for each invocation of
                   * predicate. If it is not provided, undefined is used instead.
                   */


                  ArraySchema.prototype.find = function (predicate, thisArg) {
                    return Array.from(this.$items.values()).find(predicate, thisArg);
                  };
                  /**
                   * Returns the index of the first element in the array where predicate is true, and -1
                   * otherwise.
                   * @param predicate find calls predicate once for each element of the array, in ascending
                   * order, until it finds one where predicate returns true. If such an element is found,
                   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
                   * @param thisArg If provided, it will be used as the this value for each invocation of
                   * predicate. If it is not provided, undefined is used instead.
                   */


                  ArraySchema.prototype.findIndex = function (predicate, thisArg) {
                    return Array.from(this.$items.values()).findIndex(predicate, thisArg);
                  };
                  /**
                   * Returns the this object after filling the section identified by start and end with value
                   * @param value value to fill array section with
                   * @param start index to start filling the array at. If start is negative, it is treated as
                   * length+start where length is the length of the array.
                   * @param end index to stop filling the array at. If end is negative, it is treated as
                   * length+end.
                   */


                  ArraySchema.prototype.fill = function (value, start, end) {
                    //
                    // TODO
                    //
                    throw new Error("ArraySchema#fill() not implemented");
                  };
                  /**
                   * Returns the this object after copying a section of the array identified by start and end
                   * to the same array starting at position target
                   * @param target If target is negative, it is treated as length+target where length is the
                   * length of the array.
                   * @param start If start is negative, it is treated as length+start. If end is negative, it
                   * is treated as length+end.
                   * @param end If not specified, length of the this object is used as its default value.
                   */


                  ArraySchema.prototype.copyWithin = function (target, start, end) {
                    //
                    // TODO
                    //
                    throw new Error("ArraySchema#copyWithin() not implemented");
                  };
                  /**
                   * Returns a string representation of an array.
                   */


                  ArraySchema.prototype.toString = function () {
                    return this.$items.toString();
                  };
                  /**
                   * Returns a string representation of an array. The elements are converted to string using their toLocalString methods.
                   */


                  ArraySchema.prototype.toLocaleString = function () {
                    return this.$items.toLocaleString();
                  };
                  /** Iterator */


                  ArraySchema.prototype[Symbol.iterator] = function () {
                    return Array.from(this.$items.values())[Symbol.iterator]();
                  };

                  ArraySchema.prototype[Symbol.unscopables] = function () {
                    return this.$items[Symbol.unscopables]();
                  };
                  /**
                   * Returns an iterable of key, value pairs for every entry in the array
                   */


                  ArraySchema.prototype.entries = function () {
                    return this.$items.entries();
                  };
                  /**
                   * Returns an iterable of keys in the array
                   */


                  ArraySchema.prototype.keys = function () {
                    return this.$items.keys();
                  };
                  /**
                   * Returns an iterable of values in the array
                   */


                  ArraySchema.prototype.values = function () {
                    return this.$items.values();
                  };
                  /**
                   * Determines whether an array includes a certain element, returning true or false as appropriate.
                   * @param searchElement The element to search for.
                   * @param fromIndex The position in this array at which to begin searching for searchElement.
                   */


                  ArraySchema.prototype.includes = function (searchElement, fromIndex) {
                    return Array.from(this.$items.values()).includes(searchElement, fromIndex);
                  };
                  /**
                   * Calls a defined callback function on each element of an array. Then, flattens the result into
                   * a new array.
                   * This is identical to a map followed by flat with depth 1.
                   *
                   * @param callback A function that accepts up to three arguments. The flatMap method calls the
                   * callback function one time for each element in the array.
                   * @param thisArg An object to which the this keyword can refer in the callback function. If
                   * thisArg is omitted, undefined is used as the this value.
                   */
                  // @ts-ignore


                  ArraySchema.prototype.flatMap = function (callback, thisArg) {
                    // @ts-ignore
                    throw new Error("ArraySchema#flatMap() is not supported.");
                  };
                  /**
                   * Returns a new array with all sub-array elements concatenated into it recursively up to the
                   * specified depth.
                   *
                   * @param depth The maximum recursion depth
                   */
                  // @ts-ignore


                  ArraySchema.prototype.flat = function (depth) {
                    // @ts-ignore
                    throw new Error("ArraySchema#flat() is not supported.");
                  }; // get size () {
                  //     return this.$items.size;
                  // }


                  ArraySchema.prototype.setIndex = function (index, key) {
                    this.$indexes.set(index, key);
                  };

                  ArraySchema.prototype.getIndex = function (index) {
                    return this.$indexes.get(index);
                  };

                  ArraySchema.prototype.getByIndex = function (index) {
                    return this.$items.get(this.$indexes.get(index));
                  };

                  ArraySchema.prototype.deleteByIndex = function (index) {
                    var key = this.$indexes.get(index);
                    this.$items["delete"](key);
                    this.$indexes["delete"](index);
                  };

                  ArraySchema.prototype.toArray = function () {
                    return Array.from(this.$items.values());
                  };

                  ArraySchema.prototype.toJSON = function () {
                    return this.toArray().map(function (value) {
                      return typeof value['toJSON'] === "function" ? value['toJSON']() : value;
                    });
                  }; //
                  // Decoding utilities
                  //


                  ArraySchema.prototype.clone = function (isDecoding) {
                    var cloned;

                    if (isDecoding) {
                      cloned = new (ArraySchema.bind.apply(ArraySchema, __spreadArray([void 0], Array.from(this.$items.values()))))();
                    } else {
                      cloned = new (ArraySchema.bind.apply(ArraySchema, __spreadArray([void 0], this.map(function (item) {
                        return item['$changes'] ? item.clone() : item;
                      }))))();
                    }

                    return cloned;
                  };

                  ArraySchema.prototype.triggerAll = function () {
                    Schema.prototype.triggerAll.apply(this);
                  };

                  return ArraySchema;
                }();

                function getMapProxy(value) {
                  value['$proxy'] = true;
                  value = new Proxy(value, {
                    get: function get(obj, prop) {
                      if (typeof prop !== "symbol" && // accessing properties
                      typeof obj[prop] === "undefined") {
                        return obj.get(prop);
                      } else {
                        return obj[prop];
                      }
                    },
                    set: function set(obj, prop, setValue) {
                      if (typeof prop !== "symbol" && prop.indexOf("$") === -1 && prop !== "onAdd" && prop !== "onRemove" && prop !== "onChange") {
                        obj.set(prop, setValue);
                      } else {
                        obj[prop] = setValue;
                      }

                      return true;
                    },
                    deleteProperty: function deleteProperty(obj, prop) {
                      obj["delete"](prop);
                      return true;
                    }
                  });
                  return value;
                }

                var MapSchema =
                /** @class */
                function () {
                  function MapSchema(initialValues) {
                    var _this = this;

                    this.$changes = new ChangeTree(this);
                    this.$items = new Map();
                    this.$indexes = new Map();
                    this.$refId = 0;

                    if (initialValues) {
                      if (initialValues instanceof Map) {
                        initialValues.forEach(function (v, k) {
                          return _this.set(k, v);
                        });
                      } else {
                        for (var k in initialValues) {
                          this.set(k, initialValues[k]);
                        }
                      }
                    }
                  }

                  MapSchema.is = function (type) {
                    return type['map'] !== undefined;
                  };
                  /** Iterator */


                  MapSchema.prototype[Symbol.iterator] = function () {
                    return this.$items[Symbol.iterator]();
                  };

                  Object.defineProperty(MapSchema.prototype, Symbol.toStringTag, {
                    get: function get() {
                      return this.$items[Symbol.toStringTag];
                    },
                    enumerable: false,
                    configurable: true
                  });

                  MapSchema.prototype.set = function (key, value) {
                    // get "index" for this value.
                    var hasIndex = typeof this.$changes.indexes[key] !== "undefined";
                    var index = hasIndex ? this.$changes.indexes[key] : this.$refId++;
                    var operation = hasIndex ? exports.OPERATION.REPLACE : exports.OPERATION.ADD;
                    var isRef = value['$changes'] !== undefined;

                    if (isRef) {
                      value['$changes'].setParent(this, this.$changes.root, index);
                    } //
                    // (encoding)
                    // set a unique id to relate directly with this key/value.
                    //


                    if (!hasIndex) {
                      this.$changes.indexes[key] = index;
                      this.$indexes.set(index, key);
                    } else if (isRef && // if is schema, force ADD operation if value differ from previous one.
                    this.$items.get(key) !== value) {
                      operation = exports.OPERATION.ADD;
                    }

                    this.$items.set(key, value);
                    this.$changes.change(key, operation);
                    return this;
                  };

                  MapSchema.prototype.get = function (key) {
                    return this.$items.get(key);
                  };

                  MapSchema.prototype["delete"] = function (key) {
                    //
                    // TODO: add a "purge" method after .encode() runs, to cleanup removed `$indexes`
                    //
                    // We don't remove $indexes to allow setting the same key in the same patch
                    // (See "should allow to remove and set an item in the same place" test)
                    //
                    // // const index = this.$changes.indexes[key];
                    // // this.$indexes.delete(index);
                    this.$changes["delete"](key);
                    return this.$items["delete"](key);
                  };

                  MapSchema.prototype.clear = function (isDecoding) {
                    var _this = this; // discard previous operations.


                    this.$changes.discard(true, true);
                    this.$changes.indexes = {}; // clear previous indexes

                    this.$indexes.clear(); // flag child items for garbage collection.

                    if (isDecoding && typeof this.$changes.getType() !== "string") {
                      this.$items.forEach(function (item) {
                        _this.$changes.root.removeRef(item['$changes'].refId);
                      });
                    } // clear items


                    this.$items.clear();
                    this.$changes.operation({
                      index: 0,
                      op: exports.OPERATION.CLEAR
                    }); // touch all structures until reach root

                    this.$changes.touchParents();
                  };

                  MapSchema.prototype.has = function (key) {
                    return this.$items.has(key);
                  };

                  MapSchema.prototype.forEach = function (callbackfn) {
                    this.$items.forEach(callbackfn);
                  };

                  MapSchema.prototype.entries = function () {
                    return this.$items.entries();
                  };

                  MapSchema.prototype.keys = function () {
                    return this.$items.keys();
                  };

                  MapSchema.prototype.values = function () {
                    return this.$items.values();
                  };

                  Object.defineProperty(MapSchema.prototype, "size", {
                    get: function get() {
                      return this.$items.size;
                    },
                    enumerable: false,
                    configurable: true
                  });

                  MapSchema.prototype.setIndex = function (index, key) {
                    this.$indexes.set(index, key);
                  };

                  MapSchema.prototype.getIndex = function (index) {
                    return this.$indexes.get(index);
                  };

                  MapSchema.prototype.getByIndex = function (index) {
                    return this.$items.get(this.$indexes.get(index));
                  };

                  MapSchema.prototype.deleteByIndex = function (index) {
                    var key = this.$indexes.get(index);
                    this.$items["delete"](key);
                    this.$indexes["delete"](index);
                  };

                  MapSchema.prototype.toJSON = function () {
                    var map = {};
                    this.forEach(function (value, key) {
                      map[key] = typeof value['toJSON'] === "function" ? value['toJSON']() : value;
                    });
                    return map;
                  }; //
                  // Decoding utilities
                  //


                  MapSchema.prototype.clone = function (isDecoding) {
                    var cloned;

                    if (isDecoding) {
                      // client-side
                      cloned = Object.assign(new MapSchema(), this);
                    } else {
                      // server-side
                      cloned = new MapSchema();
                      this.forEach(function (value, key) {
                        if (value['$changes']) {
                          cloned.set(key, value['clone']());
                        } else {
                          cloned.set(key, value);
                        }
                      });
                    }

                    return cloned;
                  };

                  MapSchema.prototype.triggerAll = function () {
                    Schema.prototype.triggerAll.apply(this);
                  };

                  return MapSchema;
                }();

                var registeredTypes = {};

                function registerType(identifier, definition) {
                  registeredTypes[identifier] = definition;
                }

                function getType(identifier) {
                  return registeredTypes[identifier];
                }

                var SchemaDefinition =
                /** @class */
                function () {
                  function SchemaDefinition() {
                    //
                    // TODO: use a "field" structure combining all these properties per-field.
                    //
                    this.indexes = {};
                    this.fieldsByIndex = {};
                    this.deprecated = {};
                    this.descriptors = {};
                  }

                  SchemaDefinition.create = function (parent) {
                    var definition = new SchemaDefinition(); // support inheritance

                    definition.schema = Object.assign({}, parent && parent.schema || {});
                    definition.indexes = Object.assign({}, parent && parent.indexes || {});
                    definition.fieldsByIndex = Object.assign({}, parent && parent.fieldsByIndex || {});
                    definition.descriptors = Object.assign({}, parent && parent.descriptors || {});
                    definition.deprecated = Object.assign({}, parent && parent.deprecated || {});
                    return definition;
                  };

                  SchemaDefinition.prototype.addField = function (field, type) {
                    var index = this.getNextFieldIndex();
                    this.fieldsByIndex[index] = field;
                    this.indexes[field] = index;
                    this.schema[field] = Array.isArray(type) ? {
                      array: type[0]
                    } : type;
                  };

                  SchemaDefinition.prototype.addFilter = function (field, cb) {
                    if (!this.filters) {
                      this.filters = {};
                      this.indexesWithFilters = [];
                    }

                    this.filters[this.indexes[field]] = cb;
                    this.indexesWithFilters.push(this.indexes[field]);
                    return true;
                  };

                  SchemaDefinition.prototype.addChildrenFilter = function (field, cb) {
                    var index = this.indexes[field];
                    var type = this.schema[field];

                    if (getType(Object.keys(type)[0])) {
                      if (!this.childFilters) {
                        this.childFilters = {};
                      }

                      this.childFilters[index] = cb;
                      return true;
                    } else {
                      console.warn("@filterChildren: field '" + field + "' can't have children. Ignoring filter.");
                    }
                  };

                  SchemaDefinition.prototype.getChildrenFilter = function (field) {
                    return this.childFilters && this.childFilters[this.indexes[field]];
                  };

                  SchemaDefinition.prototype.getNextFieldIndex = function () {
                    return Object.keys(this.schema || {}).length;
                  };

                  return SchemaDefinition;
                }();

                function hasFilter(klass) {
                  return klass._context && klass._context.useFilters;
                }

                var Context =
                /** @class */
                function () {
                  function Context() {
                    this.types = {};
                    this.schemas = new Map();
                    this.useFilters = false;
                  }

                  Context.prototype.has = function (schema) {
                    return this.schemas.has(schema);
                  };

                  Context.prototype.get = function (typeid) {
                    return this.types[typeid];
                  };

                  Context.prototype.add = function (schema, typeid) {
                    if (typeid === void 0) {
                      typeid = this.schemas.size;
                    } // FIXME: move this to somewhere else?
                    // support inheritance


                    schema._definition = SchemaDefinition.create(schema._definition);
                    schema._typeid = typeid;
                    this.types[typeid] = schema;
                    this.schemas.set(schema, typeid);
                  };

                  Context.create = function (context) {
                    if (context === void 0) {
                      context = new Context();
                    }

                    return function (definition) {
                      return type(definition, context);
                    };
                  };

                  return Context;
                }();

                var globalContext = new Context();
                /**
                 * `@type()` decorator for proxies
                 */

                function type(type, context) {
                  if (context === void 0) {
                    context = globalContext;
                  }

                  return function (target, field) {
                    var constructor = target.constructor;
                    constructor._context = context;
                    /*
                     * static schema
                     */

                    if (!context.has(constructor)) {
                      context.add(constructor);
                    }

                    var definition = constructor._definition;
                    definition.addField(field, type);
                    /**
                     * skip if descriptor already exists for this field (`@deprecated()`)
                     */

                    if (definition.descriptors[field]) {
                      if (definition.deprecated[field]) {
                        // do not create accessors for deprecated properties.
                        return;
                      } else {
                        // trying to define same property multiple times across inheritance.
                        // https://github.com/colyseus/colyseus-unity3d/issues/131#issuecomment-814308572
                        try {
                          throw new Error("@colyseus/schema: Duplicate '" + field + "' definition on '" + constructor.name + "'.\nCheck @type() annotation");
                        } catch (e) {
                          var definitionAtLine = e.stack.split("\n")[4].trim();
                          throw new Error(e.message + " " + definitionAtLine);
                        }
                      }
                    }

                    var isArray = ArraySchema.is(type);
                    var isMap = !isArray && MapSchema.is(type); // TODO: refactor me.
                    // Allow abstract intermediary classes with no fields to be serialized
                    // (See "should support an inheritance with a Schema type without fields" test)

                    if (typeof type !== "string" && !Schema.is(type)) {
                      var childType = Object.values(type)[0];

                      if (typeof childType !== "string" && !context.has(childType)) {
                        context.add(childType);
                      }
                    }

                    var fieldCached = "_" + field;
                    definition.descriptors[fieldCached] = {
                      enumerable: false,
                      configurable: false,
                      writable: true
                    };
                    definition.descriptors[field] = {
                      get: function get() {
                        return this[fieldCached];
                      },
                      set: function set(value) {
                        /**
                         * Create Proxy for array or map items
                         */
                        // skip if value is the same as cached.
                        if (value === this[fieldCached]) {
                          return;
                        }

                        if (value !== undefined && value !== null) {
                          // automaticallty transform Array into ArraySchema
                          if (isArray && !(value instanceof ArraySchema)) {
                            value = new (ArraySchema.bind.apply(ArraySchema, __spreadArray([void 0], value)))();
                          } // automaticallty transform Map into MapSchema


                          if (isMap && !(value instanceof MapSchema)) {
                            value = new MapSchema(value);
                          } // try to turn provided structure into a Proxy


                          if (value['$proxy'] === undefined) {
                            if (isMap) {
                              value = getMapProxy(value);
                            } else if (isArray) {
                              value = getArrayProxy(value);
                            }
                          } // flag the change for encoding.


                          this.$changes.change(field); //
                          // call setParent() recursively for this and its child
                          // structures.
                          //

                          if (value['$changes']) {
                            value['$changes'].setParent(this, this.$changes.root, this._definition.indexes[field]);
                          }
                        } else {
                          //
                          // Setting a field to `null` or `undefined` will delete it.
                          //
                          this.$changes["delete"](field);
                        }

                        this[fieldCached] = value;
                      },
                      enumerable: true,
                      configurable: true
                    };
                  };
                }
                /**
                 * `@filter()` decorator for defining data filters per client
                 */


                function filter(cb) {
                  return function (target, field) {
                    var constructor = target.constructor;
                    var definition = constructor._definition;

                    if (definition.addFilter(field, cb)) {
                      constructor._context.useFilters = true;
                    }
                  };
                }

                function filterChildren(cb) {
                  return function (target, field) {
                    var constructor = target.constructor;
                    var definition = constructor._definition;

                    if (definition.addChildrenFilter(field, cb)) {
                      constructor._context.useFilters = true;
                    }
                  };
                }
                /**
                 * `@deprecated()` flag a field as deprecated.
                 * The previous `@type()` annotation should remain along with this one.
                 */


                function deprecated(_throws, context) {
                  if (_throws === void 0) {
                    _throws = true;
                  }

                  return function (target, field) {
                    var constructor = target.constructor;
                    var definition = constructor._definition;
                    definition.deprecated[field] = true;

                    if (_throws) {
                      definition.descriptors[field] = {
                        get: function get() {
                          throw new Error(field + " is deprecated.");
                        },
                        set: function set(value) {},
                        enumerable: false,
                        configurable: true
                      };
                    }
                  };
                }

                function defineTypes(target, fields, context) {
                  if (context === void 0) {
                    context = target._context || globalContext;
                  }

                  for (var field in fields) {
                    type(fields[field], context)(target.prototype, field);
                  }

                  return target;
                }
                /**
                 * Copyright (c) 2018 Endel Dreyer
                 * Copyright (c) 2014 Ion Drive Software Ltd.
                 *
                 * Permission is hereby granted, free of charge, to any person obtaining a copy
                 * of this software and associated documentation files (the "Software"), to deal
                 * in the Software without restriction, including without limitation the rights
                 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                 * copies of the Software, and to permit persons to whom the Software is
                 * furnished to do so, subject to the following conditions:
                 *
                 * The above copyright notice and this permission notice shall be included in all
                 * copies or substantial portions of the Software.
                 *
                 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                 * SOFTWARE
                 */

                /**
                 * msgpack implementation highly based on notepack.io
                 * https://github.com/darrachequesne/notepack
                 */


                function utf8Length(str) {
                  var c = 0,
                      length = 0;

                  for (var i = 0, l = str.length; i < l; i++) {
                    c = str.charCodeAt(i);

                    if (c < 0x80) {
                      length += 1;
                    } else if (c < 0x800) {
                      length += 2;
                    } else if (c < 0xd800 || c >= 0xe000) {
                      length += 3;
                    } else {
                      i++;
                      length += 4;
                    }
                  }

                  return length;
                }

                function utf8Write(view, offset, str) {
                  var c = 0;

                  for (var i = 0, l = str.length; i < l; i++) {
                    c = str.charCodeAt(i);

                    if (c < 0x80) {
                      view[offset++] = c;
                    } else if (c < 0x800) {
                      view[offset++] = 0xc0 | c >> 6;
                      view[offset++] = 0x80 | c & 0x3f;
                    } else if (c < 0xd800 || c >= 0xe000) {
                      view[offset++] = 0xe0 | c >> 12;
                      view[offset++] = 0x80 | c >> 6 & 0x3f;
                      view[offset++] = 0x80 | c & 0x3f;
                    } else {
                      i++;
                      c = 0x10000 + ((c & 0x3ff) << 10 | str.charCodeAt(i) & 0x3ff);
                      view[offset++] = 0xf0 | c >> 18;
                      view[offset++] = 0x80 | c >> 12 & 0x3f;
                      view[offset++] = 0x80 | c >> 6 & 0x3f;
                      view[offset++] = 0x80 | c & 0x3f;
                    }
                  }
                }

                function int8$1(bytes, value) {
                  bytes.push(value & 255);
                }

                function uint8$1(bytes, value) {
                  bytes.push(value & 255);
                }

                function int16$1(bytes, value) {
                  bytes.push(value & 255);
                  bytes.push(value >> 8 & 255);
                }

                function uint16$1(bytes, value) {
                  bytes.push(value & 255);
                  bytes.push(value >> 8 & 255);
                }

                function int32$1(bytes, value) {
                  bytes.push(value & 255);
                  bytes.push(value >> 8 & 255);
                  bytes.push(value >> 16 & 255);
                  bytes.push(value >> 24 & 255);
                }

                function uint32$1(bytes, value) {
                  var b4 = value >> 24;
                  var b3 = value >> 16;
                  var b2 = value >> 8;
                  var b1 = value;
                  bytes.push(b1 & 255);
                  bytes.push(b2 & 255);
                  bytes.push(b3 & 255);
                  bytes.push(b4 & 255);
                }

                function int64$1(bytes, value) {
                  var high = Math.floor(value / Math.pow(2, 32));
                  var low = value >>> 0;
                  uint32$1(bytes, low);
                  uint32$1(bytes, high);
                }

                function uint64$1(bytes, value) {
                  var high = value / Math.pow(2, 32) >> 0;
                  var low = value >>> 0;
                  uint32$1(bytes, low);
                  uint32$1(bytes, high);
                }

                function float32$1(bytes, value) {
                  writeFloat32(bytes, value);
                }

                function float64$1(bytes, value) {
                  writeFloat64(bytes, value);
                }

                var _int32$1 = new Int32Array(2);

                var _float32$1 = new Float32Array(_int32$1.buffer);

                var _float64$1 = new Float64Array(_int32$1.buffer);

                function writeFloat32(bytes, value) {
                  _float32$1[0] = value;
                  int32$1(bytes, _int32$1[0]);
                }

                function writeFloat64(bytes, value) {
                  _float64$1[0] = value;
                  int32$1(bytes, _int32$1[0]);
                  int32$1(bytes, _int32$1[1]);
                }

                function boolean$1(bytes, value) {
                  return uint8$1(bytes, value ? 1 : 0);
                }

                function string$1(bytes, value) {
                  // encode `null` strings as empty.
                  if (!value) {
                    value = "";
                  }

                  var length = utf8Length(value);
                  var size = 0; // fixstr

                  if (length < 0x20) {
                    bytes.push(length | 0xa0);
                    size = 1;
                  } // str 8
                  else if (length < 0x100) {
                      bytes.push(0xd9);
                      uint8$1(bytes, length);
                      size = 2;
                    } // str 16
                    else if (length < 0x10000) {
                        bytes.push(0xda);
                        uint16$1(bytes, length);
                        size = 3;
                      } // str 32
                      else if (length < 0x100000000) {
                          bytes.push(0xdb);
                          uint32$1(bytes, length);
                          size = 5;
                        } else {
                          throw new Error('String too long');
                        }

                  utf8Write(bytes, bytes.length, value);
                  return size + length;
                }

                function number$1(bytes, value) {
                  if (isNaN(value)) {
                    return number$1(bytes, 0);
                  } else if (!isFinite(value)) {
                    return number$1(bytes, value > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER);
                  } else if (value !== (value | 0)) {
                    bytes.push(0xcb);
                    writeFloat64(bytes, value);
                    return 9; // TODO: encode float 32?
                    // is it possible to differentiate between float32 / float64 here?
                    // // float 32
                    // bytes.push(0xca);
                    // writeFloat32(bytes, value);
                    // return 5;
                  }

                  if (value >= 0) {
                    // positive fixnum
                    if (value < 0x80) {
                      uint8$1(bytes, value);
                      return 1;
                    } // uint 8


                    if (value < 0x100) {
                      bytes.push(0xcc);
                      uint8$1(bytes, value);
                      return 2;
                    } // uint 16


                    if (value < 0x10000) {
                      bytes.push(0xcd);
                      uint16$1(bytes, value);
                      return 3;
                    } // uint 32


                    if (value < 0x100000000) {
                      bytes.push(0xce);
                      uint32$1(bytes, value);
                      return 5;
                    } // uint 64


                    bytes.push(0xcf);
                    uint64$1(bytes, value);
                    return 9;
                  } else {
                    // negative fixnum
                    if (value >= -0x20) {
                      bytes.push(0xe0 | value + 0x20);
                      return 1;
                    } // int 8


                    if (value >= -0x80) {
                      bytes.push(0xd0);
                      int8$1(bytes, value);
                      return 2;
                    } // int 16


                    if (value >= -0x8000) {
                      bytes.push(0xd1);
                      int16$1(bytes, value);
                      return 3;
                    } // int 32


                    if (value >= -0x80000000) {
                      bytes.push(0xd2);
                      int32$1(bytes, value);
                      return 5;
                    } // int 64


                    bytes.push(0xd3);
                    int64$1(bytes, value);
                    return 9;
                  }
                }

                var encode = /*#__PURE__*/Object.freeze({
                  __proto__: null,
                  utf8Write: utf8Write,
                  int8: int8$1,
                  uint8: uint8$1,
                  int16: int16$1,
                  uint16: uint16$1,
                  int32: int32$1,
                  uint32: uint32$1,
                  int64: int64$1,
                  uint64: uint64$1,
                  float32: float32$1,
                  float64: float64$1,
                  writeFloat32: writeFloat32,
                  writeFloat64: writeFloat64,
                  "boolean": boolean$1,
                  string: string$1,
                  number: number$1
                });
                /**
                 * Copyright (c) 2018 Endel Dreyer
                 * Copyright (c) 2014 Ion Drive Software Ltd.
                 *
                 * Permission is hereby granted, free of charge, to any person obtaining a copy
                 * of this software and associated documentation files (the "Software"), to deal
                 * in the Software without restriction, including without limitation the rights
                 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                 * copies of the Software, and to permit persons to whom the Software is
                 * furnished to do so, subject to the following conditions:
                 *
                 * The above copyright notice and this permission notice shall be included in all
                 * copies or substantial portions of the Software.
                 *
                 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                 * SOFTWARE
                 */

                function utf8Read(bytes, offset, length) {
                  var string = '',
                      chr = 0;

                  for (var i = offset, end = offset + length; i < end; i++) {
                    var _byte3 = bytes[i];

                    if ((_byte3 & 0x80) === 0x00) {
                      string += String.fromCharCode(_byte3);
                      continue;
                    }

                    if ((_byte3 & 0xe0) === 0xc0) {
                      string += String.fromCharCode((_byte3 & 0x1f) << 6 | bytes[++i] & 0x3f);
                      continue;
                    }

                    if ((_byte3 & 0xf0) === 0xe0) {
                      string += String.fromCharCode((_byte3 & 0x0f) << 12 | (bytes[++i] & 0x3f) << 6 | (bytes[++i] & 0x3f) << 0);
                      continue;
                    }

                    if ((_byte3 & 0xf8) === 0xf0) {
                      chr = (_byte3 & 0x07) << 18 | (bytes[++i] & 0x3f) << 12 | (bytes[++i] & 0x3f) << 6 | (bytes[++i] & 0x3f) << 0;

                      if (chr >= 0x010000) {
                        // surrogate pair
                        chr -= 0x010000;
                        string += String.fromCharCode((chr >>> 10) + 0xD800, (chr & 0x3FF) + 0xDC00);
                      } else {
                        string += String.fromCharCode(chr);
                      }

                      continue;
                    }

                    console.error('Invalid byte ' + _byte3.toString(16)); // (do not throw error to avoid server/client from crashing due to hack attemps)
                    // throw new Error('Invalid byte ' + byte.toString(16));
                  }

                  return string;
                }

                function int8(bytes, it) {
                  return uint8(bytes, it) << 24 >> 24;
                }

                function uint8(bytes, it) {
                  return bytes[it.offset++];
                }

                function int16(bytes, it) {
                  return uint16(bytes, it) << 16 >> 16;
                }

                function uint16(bytes, it) {
                  return bytes[it.offset++] | bytes[it.offset++] << 8;
                }

                function int32(bytes, it) {
                  return bytes[it.offset++] | bytes[it.offset++] << 8 | bytes[it.offset++] << 16 | bytes[it.offset++] << 24;
                }

                function uint32(bytes, it) {
                  return int32(bytes, it) >>> 0;
                }

                function float32(bytes, it) {
                  return readFloat32(bytes, it);
                }

                function float64(bytes, it) {
                  return readFloat64(bytes, it);
                }

                function int64(bytes, it) {
                  var low = uint32(bytes, it);
                  var high = int32(bytes, it) * Math.pow(2, 32);
                  return high + low;
                }

                function uint64(bytes, it) {
                  var low = uint32(bytes, it);
                  var high = uint32(bytes, it) * Math.pow(2, 32);
                  return high + low;
                }

                var _int32 = new Int32Array(2);

                var _float32 = new Float32Array(_int32.buffer);

                var _float64 = new Float64Array(_int32.buffer);

                function readFloat32(bytes, it) {
                  _int32[0] = int32(bytes, it);
                  return _float32[0];
                }

                function readFloat64(bytes, it) {
                  _int32[0] = int32(bytes, it);
                  _int32[1] = int32(bytes, it);
                  return _float64[0];
                }

                function _boolean(bytes, it) {
                  return uint8(bytes, it) > 0;
                }

                function string(bytes, it) {
                  var prefix = bytes[it.offset++];
                  var length;

                  if (prefix < 0xc0) {
                    // fixstr
                    length = prefix & 0x1f;
                  } else if (prefix === 0xd9) {
                    length = uint8(bytes, it);
                  } else if (prefix === 0xda) {
                    length = uint16(bytes, it);
                  } else if (prefix === 0xdb) {
                    length = uint32(bytes, it);
                  }

                  var value = utf8Read(bytes, it.offset, length);
                  it.offset += length;
                  return value;
                }

                function stringCheck(bytes, it) {
                  var prefix = bytes[it.offset];
                  return (// fixstr
                    prefix < 0xc0 && prefix > 0xa0 || // str 8
                    prefix === 0xd9 || // str 16
                    prefix === 0xda || // str 32
                    prefix === 0xdb
                  );
                }

                function number(bytes, it) {
                  var prefix = bytes[it.offset++];

                  if (prefix < 0x80) {
                    // positive fixint
                    return prefix;
                  } else if (prefix === 0xca) {
                    // float 32
                    return readFloat32(bytes, it);
                  } else if (prefix === 0xcb) {
                    // float 64
                    return readFloat64(bytes, it);
                  } else if (prefix === 0xcc) {
                    // uint 8
                    return uint8(bytes, it);
                  } else if (prefix === 0xcd) {
                    // uint 16
                    return uint16(bytes, it);
                  } else if (prefix === 0xce) {
                    // uint 32
                    return uint32(bytes, it);
                  } else if (prefix === 0xcf) {
                    // uint 64
                    return uint64(bytes, it);
                  } else if (prefix === 0xd0) {
                    // int 8
                    return int8(bytes, it);
                  } else if (prefix === 0xd1) {
                    // int 16
                    return int16(bytes, it);
                  } else if (prefix === 0xd2) {
                    // int 32
                    return int32(bytes, it);
                  } else if (prefix === 0xd3) {
                    // int 64
                    return int64(bytes, it);
                  } else if (prefix > 0xdf) {
                    // negative fixint
                    return (0xff - prefix + 1) * -1;
                  }
                }

                function numberCheck(bytes, it) {
                  var prefix = bytes[it.offset]; // positive fixint - 0x00 - 0x7f
                  // float 32        - 0xca
                  // float 64        - 0xcb
                  // uint 8          - 0xcc
                  // uint 16         - 0xcd
                  // uint 32         - 0xce
                  // uint 64         - 0xcf
                  // int 8           - 0xd0
                  // int 16          - 0xd1
                  // int 32          - 0xd2
                  // int 64          - 0xd3

                  return prefix < 0x80 || prefix >= 0xca && prefix <= 0xd3;
                }

                function arrayCheck(bytes, it) {
                  return bytes[it.offset] < 0xa0; // const prefix = bytes[it.offset] ;
                  // if (prefix < 0xa0) {
                  //   return prefix;
                  // // array
                  // } else if (prefix === 0xdc) {
                  //   it.offset += 2;
                  // } else if (0xdd) {
                  //   it.offset += 4;
                  // }
                  // return prefix;
                }

                function switchStructureCheck(bytes, it) {
                  return (// previous byte should be `SWITCH_TO_STRUCTURE`
                    bytes[it.offset - 1] === SWITCH_TO_STRUCTURE && ( // next byte should be a number
                    bytes[it.offset] < 0x80 || bytes[it.offset] >= 0xca && bytes[it.offset] <= 0xd3)
                  );
                }

                var decode = /*#__PURE__*/Object.freeze({
                  __proto__: null,
                  int8: int8,
                  uint8: uint8,
                  int16: int16,
                  uint16: uint16,
                  int32: int32,
                  uint32: uint32,
                  float32: float32,
                  float64: float64,
                  int64: int64,
                  uint64: uint64,
                  readFloat32: readFloat32,
                  readFloat64: readFloat64,
                  "boolean": _boolean,
                  string: string,
                  stringCheck: stringCheck,
                  number: number,
                  numberCheck: numberCheck,
                  arrayCheck: arrayCheck,
                  switchStructureCheck: switchStructureCheck
                });

                var CollectionSchema =
                /** @class */
                function () {
                  function CollectionSchema(initialValues) {
                    var _this = this;

                    this.$changes = new ChangeTree(this);
                    this.$items = new Map();
                    this.$indexes = new Map();
                    this.$refId = 0;

                    if (initialValues) {
                      initialValues.forEach(function (v) {
                        return _this.add(v);
                      });
                    }
                  }

                  CollectionSchema.is = function (type) {
                    return type['collection'] !== undefined;
                  };

                  CollectionSchema.prototype.add = function (value) {
                    // set "index" for reference.
                    var index = this.$refId++;
                    var isRef = value['$changes'] !== undefined;

                    if (isRef) {
                      value['$changes'].setParent(this, this.$changes.root, index);
                    }

                    this.$changes.indexes[index] = index;
                    this.$indexes.set(index, index);
                    this.$items.set(index, value);
                    this.$changes.change(index);
                    return index;
                  };

                  CollectionSchema.prototype.at = function (index) {
                    var key = Array.from(this.$items.keys())[index];
                    return this.$items.get(key);
                  };

                  CollectionSchema.prototype.entries = function () {
                    return this.$items.entries();
                  };

                  CollectionSchema.prototype["delete"] = function (item) {
                    var entries = this.$items.entries();
                    var index;
                    var entry;

                    while (entry = entries.next()) {
                      if (entry.done) {
                        break;
                      }

                      if (item === entry.value[1]) {
                        index = entry.value[0];
                        break;
                      }
                    }

                    if (index === undefined) {
                      return false;
                    }

                    this.$changes["delete"](index);
                    this.$indexes["delete"](index);
                    return this.$items["delete"](index);
                  };

                  CollectionSchema.prototype.clear = function (isDecoding) {
                    var _this = this; // discard previous operations.


                    this.$changes.discard(true, true);
                    this.$changes.indexes = {}; // clear previous indexes

                    this.$indexes.clear(); // flag child items for garbage collection.

                    if (isDecoding && typeof this.$changes.getType() !== "string") {
                      this.$items.forEach(function (item) {
                        _this.$changes.root.removeRef(item['$changes'].refId);
                      });
                    } // clear items


                    this.$items.clear();
                    this.$changes.operation({
                      index: 0,
                      op: exports.OPERATION.CLEAR
                    }); // touch all structures until reach root

                    this.$changes.touchParents();
                  };

                  CollectionSchema.prototype.has = function (value) {
                    return Array.from(this.$items.values()).some(function (v) {
                      return v === value;
                    });
                  };

                  CollectionSchema.prototype.forEach = function (callbackfn) {
                    var _this = this;

                    this.$items.forEach(function (value, key, _) {
                      return callbackfn(value, key, _this);
                    });
                  };

                  CollectionSchema.prototype.values = function () {
                    return this.$items.values();
                  };

                  Object.defineProperty(CollectionSchema.prototype, "size", {
                    get: function get() {
                      return this.$items.size;
                    },
                    enumerable: false,
                    configurable: true
                  });

                  CollectionSchema.prototype.setIndex = function (index, key) {
                    this.$indexes.set(index, key);
                  };

                  CollectionSchema.prototype.getIndex = function (index) {
                    return this.$indexes.get(index);
                  };

                  CollectionSchema.prototype.getByIndex = function (index) {
                    return this.$items.get(this.$indexes.get(index));
                  };

                  CollectionSchema.prototype.deleteByIndex = function (index) {
                    var key = this.$indexes.get(index);
                    this.$items["delete"](key);
                    this.$indexes["delete"](index);
                  };

                  CollectionSchema.prototype.toArray = function () {
                    return Array.from(this.$items.values());
                  };

                  CollectionSchema.prototype.toJSON = function () {
                    var values = [];
                    this.forEach(function (value, key) {
                      values.push(typeof value['toJSON'] === "function" ? value['toJSON']() : value);
                    });
                    return values;
                  }; //
                  // Decoding utilities
                  //


                  CollectionSchema.prototype.clone = function (isDecoding) {
                    var cloned;

                    if (isDecoding) {
                      // client-side
                      cloned = Object.assign(new CollectionSchema(), this);
                    } else {
                      // server-side
                      cloned = new CollectionSchema();
                      this.forEach(function (value) {
                        if (value['$changes']) {
                          cloned.add(value['clone']());
                        } else {
                          cloned.add(value);
                        }
                      });
                    }

                    return cloned;
                  };

                  CollectionSchema.prototype.triggerAll = function () {
                    Schema.prototype.triggerAll.apply(this);
                  };

                  return CollectionSchema;
                }();

                var SetSchema =
                /** @class */
                function () {
                  function SetSchema(initialValues) {
                    var _this = this;

                    this.$changes = new ChangeTree(this);
                    this.$items = new Map();
                    this.$indexes = new Map();
                    this.$refId = 0;

                    if (initialValues) {
                      initialValues.forEach(function (v) {
                        return _this.add(v);
                      });
                    }
                  }

                  SetSchema.is = function (type) {
                    return type['set'] !== undefined;
                  };

                  SetSchema.prototype.add = function (value) {
                    var _a, _b; // immediatelly return false if value already added.


                    if (this.has(value)) {
                      return false;
                    } // set "index" for reference.


                    var index = this.$refId++;

                    if (value['$changes'] !== undefined) {
                      value['$changes'].setParent(this, this.$changes.root, index);
                    }

                    var operation = (_b = (_a = this.$changes.indexes[index]) === null || _a === void 0 ? void 0 : _a.op) !== null && _b !== void 0 ? _b : exports.OPERATION.ADD;
                    this.$changes.indexes[index] = index;
                    this.$indexes.set(index, index);
                    this.$items.set(index, value);
                    this.$changes.change(index, operation);
                    return index;
                  };

                  SetSchema.prototype.entries = function () {
                    return this.$items.entries();
                  };

                  SetSchema.prototype["delete"] = function (item) {
                    var entries = this.$items.entries();
                    var index;
                    var entry;

                    while (entry = entries.next()) {
                      if (entry.done) {
                        break;
                      }

                      if (item === entry.value[1]) {
                        index = entry.value[0];
                        break;
                      }
                    }

                    if (index === undefined) {
                      return false;
                    }

                    this.$changes["delete"](index);
                    this.$indexes["delete"](index);
                    return this.$items["delete"](index);
                  };

                  SetSchema.prototype.clear = function (isDecoding) {
                    var _this = this; // discard previous operations.


                    this.$changes.discard(true, true);
                    this.$changes.indexes = {}; // clear previous indexes

                    this.$indexes.clear(); // flag child items for garbage collection.

                    if (isDecoding && typeof this.$changes.getType() !== "string") {
                      this.$items.forEach(function (item) {
                        _this.$changes.root.removeRef(item['$changes'].refId);
                      });
                    } // clear items


                    this.$items.clear();
                    this.$changes.operation({
                      index: 0,
                      op: exports.OPERATION.CLEAR
                    }); // touch all structures until reach root

                    this.$changes.touchParents();
                  };

                  SetSchema.prototype.has = function (value) {
                    var values = this.$items.values();
                    var has = false;
                    var entry;

                    while (entry = values.next()) {
                      if (entry.done) {
                        break;
                      }

                      if (value === entry.value) {
                        has = true;
                        break;
                      }
                    }

                    return has;
                  };

                  SetSchema.prototype.forEach = function (callbackfn) {
                    var _this = this;

                    this.$items.forEach(function (value, key, _) {
                      return callbackfn(value, key, _this);
                    });
                  };

                  SetSchema.prototype.values = function () {
                    return this.$items.values();
                  };

                  Object.defineProperty(SetSchema.prototype, "size", {
                    get: function get() {
                      return this.$items.size;
                    },
                    enumerable: false,
                    configurable: true
                  });

                  SetSchema.prototype.setIndex = function (index, key) {
                    this.$indexes.set(index, key);
                  };

                  SetSchema.prototype.getIndex = function (index) {
                    return this.$indexes.get(index);
                  };

                  SetSchema.prototype.getByIndex = function (index) {
                    return this.$items.get(this.$indexes.get(index));
                  };

                  SetSchema.prototype.deleteByIndex = function (index) {
                    var key = this.$indexes.get(index);
                    this.$items["delete"](key);
                    this.$indexes["delete"](index);
                  };

                  SetSchema.prototype.toArray = function () {
                    return Array.from(this.$items.values());
                  };

                  SetSchema.prototype.toJSON = function () {
                    var values = [];
                    this.forEach(function (value, key) {
                      values.push(typeof value['toJSON'] === "function" ? value['toJSON']() : value);
                    });
                    return values;
                  }; //
                  // Decoding utilities
                  //


                  SetSchema.prototype.clone = function (isDecoding) {
                    var cloned;

                    if (isDecoding) {
                      // client-side
                      cloned = Object.assign(new SetSchema(), this);
                    } else {
                      // server-side
                      cloned = new SetSchema();
                      this.forEach(function (value) {
                        if (value['$changes']) {
                          cloned.add(value['clone']());
                        } else {
                          cloned.add(value);
                        }
                      });
                    }

                    return cloned;
                  };

                  SetSchema.prototype.triggerAll = function () {
                    Schema.prototype.triggerAll.apply(this);
                  };

                  return SetSchema;
                }();
                /**
                 * Extracted from https://www.npmjs.com/package/strong-events
                 */


                var EventEmitter_ =
                /** @class */
                function () {
                  function EventEmitter_() {
                    this.handlers = [];
                  }

                  EventEmitter_.prototype.register = function (cb, once) {
                    this.handlers.push(cb);
                    return this;
                  };

                  EventEmitter_.prototype.invoke = function () {
                    var args = [];

                    for (var _i = 0; _i < arguments.length; _i++) {
                      args[_i] = arguments[_i];
                    }

                    this.handlers.forEach(function (handler) {
                      return handler.apply(void 0, args);
                    });
                  };

                  EventEmitter_.prototype.invokeAsync = function () {
                    var args = [];

                    for (var _i = 0; _i < arguments.length; _i++) {
                      args[_i] = arguments[_i];
                    }

                    return Promise.all(this.handlers.map(function (handler) {
                      return handler.apply(void 0, args);
                    }));
                  };

                  EventEmitter_.prototype.remove = function (cb) {
                    var index = this.handlers.indexOf(cb);
                    this.handlers[index] = this.handlers[this.handlers.length - 1];
                    this.handlers.pop();
                  };

                  EventEmitter_.prototype.clear = function () {
                    this.handlers = [];
                  };

                  return EventEmitter_;
                }();

                var ClientState =
                /** @class */
                function () {
                  function ClientState() {
                    this.refIds = new WeakSet();
                    this.containerIndexes = new WeakMap();
                  } // containerIndexes = new Map<ChangeTree, Set<number>>();


                  ClientState.prototype.addRefId = function (changeTree) {
                    if (!this.refIds.has(changeTree)) {
                      this.refIds.add(changeTree);
                      this.containerIndexes.set(changeTree, new Set());
                    }
                  };

                  ClientState.get = function (client) {
                    if (client.$filterState === undefined) {
                      client.$filterState = new ClientState();
                    }

                    return client.$filterState;
                  };

                  return ClientState;
                }();

                var EncodeSchemaError =
                /** @class */
                function (_super) {
                  __extends(EncodeSchemaError, _super);

                  function EncodeSchemaError() {
                    return _super !== null && _super.apply(this, arguments) || this;
                  }

                  return EncodeSchemaError;
                }(Error);

                function assertType(value, type, klass, field) {
                  var typeofTarget;
                  var allowNull = false;

                  switch (type) {
                    case "number":
                    case "int8":
                    case "uint8":
                    case "int16":
                    case "uint16":
                    case "int32":
                    case "uint32":
                    case "int64":
                    case "uint64":
                    case "float32":
                    case "float64":
                      typeofTarget = "number";

                      if (isNaN(value)) {
                        console.log("trying to encode \"NaN\" in " + klass.constructor.name + "#" + field);
                      }

                      break;

                    case "string":
                      typeofTarget = "string";
                      allowNull = true;
                      break;

                    case "boolean":
                      // boolean is always encoded as true/false based on truthiness
                      return;
                  }

                  if (typeof value !== typeofTarget && (!allowNull || allowNull && value !== null)) {
                    var foundValue = "'" + JSON.stringify(value) + "'" + (value && value.constructor && " (" + value.constructor.name + ")" || '');
                    throw new EncodeSchemaError("a '" + typeofTarget + "' was expected, but " + foundValue + " was provided in " + klass.constructor.name + "#" + field);
                  }
                }

                function assertInstanceType(value, type, klass, field) {
                  if (!(value instanceof type)) {
                    throw new EncodeSchemaError("a '" + type.name + "' was expected, but '" + value.constructor.name + "' was provided in " + klass.constructor.name + "#" + field);
                  }
                }

                function encodePrimitiveType(type, bytes, value, klass, field) {
                  assertType(value, type, klass, field);
                  var encodeFunc = encode[type];

                  if (encodeFunc) {
                    encodeFunc(bytes, value);
                  } else {
                    throw new EncodeSchemaError("a '" + type + "' was expected, but " + value + " was provided in " + klass.constructor.name + "#" + field);
                  }
                }

                function decodePrimitiveType(type, bytes, it) {
                  return decode[type](bytes, it);
                }
                /**
                 * Schema encoder / decoder
                 */


                var Schema =
                /** @class */
                function () {
                  // allow inherited classes to have a constructor
                  function Schema() {
                    var args = [];

                    for (var _i = 0; _i < arguments.length; _i++) {
                      args[_i] = arguments[_i];
                    } // fix enumerability of fields for end-user


                    Object.defineProperties(this, {
                      $changes: {
                        value: new ChangeTree(this, undefined, new Root()),
                        enumerable: false,
                        writable: true
                      },
                      $listeners: {
                        value: {},
                        enumerable: false,
                        writable: true
                      }
                    });
                    var descriptors = this._definition.descriptors;

                    if (descriptors) {
                      Object.defineProperties(this, descriptors);
                    } //
                    // Assign initial values
                    //


                    if (args[0]) {
                      this.assign(args[0]);
                    }
                  }

                  Schema.onError = function (e) {
                    console.error(e);
                  };

                  Schema.is = function (type) {
                    return type['_definition'] && type['_definition'].schema !== undefined;
                  };

                  Schema.prototype.assign = function (props) {
                    Object.assign(this, props);
                    return this;
                  };

                  Object.defineProperty(Schema.prototype, "_definition", {
                    get: function get() {
                      return this.constructor._definition;
                    },
                    enumerable: false,
                    configurable: true
                  });

                  Schema.prototype.listen = function (attr, callback) {
                    var _this = this;

                    if (!this.$listeners[attr]) {
                      this.$listeners[attr] = new EventEmitter_();
                    }

                    this.$listeners[attr].register(callback); // return un-register callback.

                    return function () {
                      return _this.$listeners[attr].remove(callback);
                    };
                  };

                  Schema.prototype.decode = function (bytes, it, ref, allChanges) {
                    if (it === void 0) {
                      it = {
                        offset: 0
                      };
                    }

                    if (ref === void 0) {
                      ref = this;
                    }

                    if (allChanges === void 0) {
                      allChanges = new Map();
                    }

                    var $root = this.$changes.root;
                    var totalBytes = bytes.length;
                    var refId = 0;
                    var changes = [];
                    $root.refs.set(refId, this);
                    allChanges.set(refId, changes);

                    while (it.offset < totalBytes) {
                      var _byte4 = bytes[it.offset++];

                      if (_byte4 == SWITCH_TO_STRUCTURE) {
                        refId = number(bytes, it);
                        var nextRef = $root.refs.get(refId); //
                        // Trying to access a reference that haven't been decoded yet.
                        //

                        if (!nextRef) {
                          throw new Error("\"refId\" not found: " + refId);
                        }

                        ref = nextRef; // create empty list of changes for this refId.

                        changes = [];
                        allChanges.set(refId, changes);
                        continue;
                      }

                      var changeTree = ref['$changes'];
                      var isSchema = ref['_definition'] !== undefined;
                      var operation = isSchema ? _byte4 >> 6 << 6 // "compressed" index + operation
                      : _byte4; // "uncompressed" index + operation (array/map items)

                      if (operation === exports.OPERATION.CLEAR) {
                        //
                        // TODO: refactor me!
                        // The `.clear()` method is calling `$root.removeRef(refId)` for
                        // each item inside this collection
                        //
                        ref.clear(true);
                        continue;
                      }

                      var fieldIndex = isSchema ? _byte4 % (operation || 255) // if "REPLACE" operation (0), use 255
                      : number(bytes, it);
                      var fieldName = isSchema ? ref['_definition'].fieldsByIndex[fieldIndex] : "";
                      var type = changeTree.getType(fieldIndex);
                      var value = void 0;
                      var previousValue = void 0;
                      var dynamicIndex = void 0;

                      if (!isSchema) {
                        previousValue = ref['getByIndex'](fieldIndex);

                        if ((operation & exports.OPERATION.ADD) === exports.OPERATION.ADD) {
                          // ADD or DELETE_AND_ADD
                          dynamicIndex = ref instanceof MapSchema ? string(bytes, it) : fieldIndex;
                          ref['setIndex'](fieldIndex, dynamicIndex);
                        } else {
                          // here
                          dynamicIndex = ref['getIndex'](fieldIndex);
                        }
                      } else {
                        previousValue = ref["_" + fieldName];
                      } //
                      // Delete operations
                      //


                      if ((operation & exports.OPERATION.DELETE) === exports.OPERATION.DELETE) {
                        if (operation !== exports.OPERATION.DELETE_AND_ADD) {
                          ref['deleteByIndex'](fieldIndex);
                        } // Flag `refId` for garbage collection.


                        if (previousValue && previousValue['$changes']) {
                          $root.removeRef(previousValue['$changes'].refId);
                        }

                        value = null;
                      }

                      if (fieldName === undefined) {
                        console.warn("@colyseus/schema: definition mismatch"); //
                        // keep skipping next bytes until reaches a known structure
                        // by local decoder.
                        //

                        var nextIterator = {
                          offset: it.offset
                        };

                        while (it.offset < totalBytes) {
                          if (switchStructureCheck(bytes, it)) {
                            nextIterator.offset = it.offset + 1;

                            if ($root.refs.has(number(bytes, nextIterator))) {
                              break;
                            }
                          }

                          it.offset++;
                        }

                        continue;
                      } else if (operation === exports.OPERATION.DELETE) ;else if (Schema.is(type)) {
                        var refId_1 = number(bytes, it);
                        value = $root.refs.get(refId_1);

                        if (operation !== exports.OPERATION.REPLACE) {
                          var childType = this.getSchemaType(bytes, it, type);

                          if (!value) {
                            value = this.createTypeInstance(childType);
                            value.$changes.refId = refId_1;

                            if (previousValue) {
                              value.onChange = previousValue.onChange;
                              value.onRemove = previousValue.onRemove;
                              value.$listeners = previousValue.$listeners;

                              if (previousValue['$changes'].refId && refId_1 !== previousValue['$changes'].refId) {
                                $root.removeRef(previousValue['$changes'].refId);
                              }
                            }
                          }

                          $root.addRef(refId_1, value, value !== previousValue);
                        }
                      } else if (typeof type === "string") {
                        //
                        // primitive value (number, string, boolean, etc)
                        //
                        value = decodePrimitiveType(type, bytes, it);
                      } else {
                        var typeDef = getType(Object.keys(type)[0]);
                        var refId_2 = number(bytes, it);
                        var valueRef = $root.refs.has(refId_2) ? previousValue || $root.refs.get(refId_2) : new typeDef.constructor();
                        value = valueRef.clone(true);
                        value.$changes.refId = refId_2; // preserve schema callbacks

                        if (previousValue) {
                          value.onAdd = previousValue.onAdd;
                          value.onRemove = previousValue.onRemove;
                          value.onChange = previousValue.onChange;

                          if (previousValue['$changes'].refId && refId_2 !== previousValue['$changes'].refId) {
                            $root.removeRef(previousValue['$changes'].refId); //
                            // Trigger onRemove if structure has been replaced.
                            //

                            var deletes = [];
                            var entries = previousValue.entries();
                            var iter = void 0;

                            while ((iter = entries.next()) && !iter.done) {
                              var _a = iter.value,
                                  key = _a[0],
                                  value_1 = _a[1];
                              deletes.push({
                                op: exports.OPERATION.DELETE,
                                field: key,
                                value: undefined,
                                previousValue: value_1
                              });
                            }

                            allChanges.set(previousValue['$changes'].refId, deletes);
                          }
                        }

                        $root.addRef(refId_2, value, valueRef !== previousValue); //
                        // TODO: deprecate proxies on next version.
                        // get proxy to target value.
                        //

                        if (typeDef.getProxy) {
                          value = typeDef.getProxy(value);
                        }
                      }

                      var hasChange = previousValue !== value;

                      if (value !== null && value !== undefined) {
                        if (value['$changes']) {
                          value['$changes'].setParent(changeTree.ref, changeTree.root, fieldIndex);
                        }

                        if (ref instanceof Schema) {
                          ref[fieldName] = value; //
                          // FIXME: use `_field` instead of `field`.
                          //
                          // `field` is going to use the setter of the PropertyDescriptor
                          // and create a proxy for array/map. This is only useful for
                          // backwards-compatibility with @colyseus/schema@0.5.x
                          //
                          // // ref[_field] = value;
                        } else if (ref instanceof MapSchema) {
                          // const key = ref['$indexes'].get(field);
                          var key = dynamicIndex; // ref.set(key, value);

                          ref['$items'].set(key, value);
                        } else if (ref instanceof ArraySchema) {
                          // const key = ref['$indexes'][field];
                          // console.log("SETTING FOR ArraySchema =>", { field, key, value });
                          // ref[key] = value;
                          ref.setAt(fieldIndex, value);
                        } else if (ref instanceof CollectionSchema) {
                          var index = ref.add(value);
                          ref['setIndex'](fieldIndex, index);
                        } else if (ref instanceof SetSchema) {
                          var index = ref.add(value);

                          if (index !== false) {
                            ref['setIndex'](fieldIndex, index);
                          }
                        }
                      }

                      if (hasChange // &&
                      // (
                      //     this.onChange || ref.$listeners[field]
                      // )
                      ) {
                          changes.push({
                            op: operation,
                            field: fieldName,
                            dynamicIndex: dynamicIndex,
                            value: value,
                            previousValue: previousValue
                          });
                        }
                    }

                    this._triggerChanges(allChanges); // drop references of unused schemas


                    $root.garbageCollectDeletedRefs();
                    return allChanges;
                  };

                  Schema.prototype.encode = function (encodeAll, bytes, useFilters) {
                    if (encodeAll === void 0) {
                      encodeAll = false;
                    }

                    if (bytes === void 0) {
                      bytes = [];
                    }

                    if (useFilters === void 0) {
                      useFilters = false;
                    }

                    var rootChangeTree = this.$changes;
                    var refIdsVisited = new WeakSet();
                    var changeTrees = [rootChangeTree];
                    var numChangeTrees = 1;

                    for (var i = 0; i < numChangeTrees; i++) {
                      var changeTree = changeTrees[i];
                      var ref = changeTree.ref;
                      var isSchema = ref instanceof Schema; // Generate unique refId for the ChangeTree.

                      changeTree.ensureRefId(); // mark this ChangeTree as visited.

                      refIdsVisited.add(changeTree); // root `refId` is skipped.

                      if (changeTree !== rootChangeTree && (changeTree.changed || encodeAll)) {
                        uint8$1(bytes, SWITCH_TO_STRUCTURE);
                        number$1(bytes, changeTree.refId);
                      }

                      var changes = encodeAll ? Array.from(changeTree.allChanges) : Array.from(changeTree.changes.values());

                      for (var j = 0, cl = changes.length; j < cl; j++) {
                        var operation = encodeAll ? {
                          op: exports.OPERATION.ADD,
                          index: changes[j]
                        } : changes[j];
                        var fieldIndex = operation.index;
                        var field = isSchema ? ref['_definition'].fieldsByIndex && ref['_definition'].fieldsByIndex[fieldIndex] : fieldIndex; // cache begin index if `useFilters`

                        var beginIndex = bytes.length; // encode field index + operation

                        if (operation.op !== exports.OPERATION.TOUCH) {
                          if (isSchema) {
                            //
                            // Compress `fieldIndex` + `operation` into a single byte.
                            // This adds a limitaion of 64 fields per Schema structure
                            //
                            uint8$1(bytes, fieldIndex | operation.op);
                          } else {
                            uint8$1(bytes, operation.op); // custom operations

                            if (operation.op === exports.OPERATION.CLEAR) {
                              continue;
                            } // indexed operations


                            number$1(bytes, fieldIndex);
                          }
                        } //
                        // encode "alias" for dynamic fields (maps)
                        //


                        if (!isSchema && (operation.op & exports.OPERATION.ADD) == exports.OPERATION.ADD // ADD or DELETE_AND_ADD
                        ) {
                            if (ref instanceof MapSchema) {
                              //
                              // MapSchema dynamic key
                              //
                              var dynamicIndex = changeTree.ref['$indexes'].get(fieldIndex);
                              string$1(bytes, dynamicIndex);
                            }
                          }

                        if (operation.op === exports.OPERATION.DELETE) {
                          //
                          // TODO: delete from filter cache data.
                          //
                          // if (useFilters) {
                          //     delete changeTree.caches[fieldIndex];
                          // }
                          continue;
                        } // const type = changeTree.childType || ref._schema[field];


                        var type = changeTree.getType(fieldIndex); // const type = changeTree.getType(fieldIndex);

                        var value = changeTree.getValue(fieldIndex); // Enqueue ChangeTree to be visited

                        if (value && value['$changes'] && !refIdsVisited.has(value['$changes'])) {
                          changeTrees.push(value['$changes']);
                          value['$changes'].ensureRefId();
                          numChangeTrees++;
                        }

                        if (operation.op === exports.OPERATION.TOUCH) {
                          continue;
                        }

                        if (Schema.is(type)) {
                          assertInstanceType(value, type, ref, field); //
                          // Encode refId for this instance.
                          // The actual instance is going to be encoded on next `changeTree` iteration.
                          //

                          number$1(bytes, value.$changes.refId); // Try to encode inherited TYPE_ID if it's an ADD operation.

                          if ((operation.op & exports.OPERATION.ADD) === exports.OPERATION.ADD) {
                            this.tryEncodeTypeId(bytes, type, value.constructor);
                          }
                        } else if (typeof type === "string") {
                          //
                          // Primitive values
                          //
                          encodePrimitiveType(type, bytes, value, ref, field);
                        } else {
                          //
                          // Custom type (MapSchema, ArraySchema, etc)
                          //
                          var definition = getType(Object.keys(type)[0]); //
                          // ensure a ArraySchema has been provided
                          //

                          assertInstanceType(ref["_" + field], definition.constructor, ref, field); //
                          // Encode refId for this instance.
                          // The actual instance is going to be encoded on next `changeTree` iteration.
                          //

                          number$1(bytes, value.$changes.refId);
                        }

                        if (useFilters) {
                          // cache begin / end index
                          changeTree.cache(fieldIndex, bytes.slice(beginIndex));
                        }
                      }

                      if (!encodeAll && !useFilters) {
                        changeTree.discard();
                      }
                    }

                    return bytes;
                  };

                  Schema.prototype.encodeAll = function (useFilters) {
                    return this.encode(true, [], useFilters);
                  };

                  Schema.prototype.applyFilters = function (client, encodeAll) {
                    if (encodeAll === void 0) {
                      encodeAll = false;
                    }

                    var root = this;
                    var refIdsDissallowed = new Set();
                    var $filterState = ClientState.get(client);
                    var changeTrees = [this.$changes];
                    var numChangeTrees = 1;
                    var filteredBytes = [];

                    var _loop_1 = function _loop_1(i) {
                      var changeTree = changeTrees[i];

                      if (refIdsDissallowed.has(changeTree.refId)) {
                        return "continue";
                      }

                      var ref = changeTree.ref;
                      var isSchema = ref instanceof Schema;
                      uint8$1(filteredBytes, SWITCH_TO_STRUCTURE);
                      number$1(filteredBytes, changeTree.refId);
                      var clientHasRefId = $filterState.refIds.has(changeTree);
                      var isEncodeAll = encodeAll || !clientHasRefId; // console.log("REF:", ref.constructor.name);
                      // console.log("Encode all?", isEncodeAll);
                      //
                      // include `changeTree` on list of known refIds by this client.
                      //

                      $filterState.addRefId(changeTree);
                      var containerIndexes = $filterState.containerIndexes.get(changeTree);
                      var changes = isEncodeAll ? Array.from(changeTree.allChanges) : Array.from(changeTree.changes.values()); //
                      // WORKAROUND: tries to re-evaluate previously not included @filter() attributes
                      // - see "DELETE a field of Schema" test case.
                      //

                      if (!encodeAll && isSchema && ref._definition.indexesWithFilters) {
                        var indexesWithFilters = ref._definition.indexesWithFilters;
                        indexesWithFilters.forEach(function (indexWithFilter) {
                          if (!containerIndexes.has(indexWithFilter) && changeTree.allChanges.has(indexWithFilter)) {
                            if (isEncodeAll) {
                              changes.push(indexWithFilter);
                            } else {
                              changes.push({
                                op: exports.OPERATION.ADD,
                                index: indexWithFilter
                              });
                            }
                          }
                        });
                      }

                      for (var j = 0, cl = changes.length; j < cl; j++) {
                        var change = isEncodeAll ? {
                          op: exports.OPERATION.ADD,
                          index: changes[j]
                        } : changes[j]; // custom operations

                        if (change.op === exports.OPERATION.CLEAR) {
                          uint8$1(filteredBytes, change.op);
                          continue;
                        }

                        var fieldIndex = change.index; //
                        // Deleting fields: encode the operation + field index
                        //

                        if (change.op === exports.OPERATION.DELETE) {
                          //
                          // DELETE operations also need to go through filtering.
                          //
                          // TODO: cache the previous value so we can access the value (primitive or `refId`)
                          // (check against `$filterState.refIds`)
                          //
                          if (isSchema) {
                            uint8$1(filteredBytes, change.op | fieldIndex);
                          } else {
                            uint8$1(filteredBytes, change.op);
                            number$1(filteredBytes, fieldIndex);
                          }

                          continue;
                        } // indexed operation


                        var value = changeTree.getValue(fieldIndex);
                        var type = changeTree.getType(fieldIndex);

                        if (isSchema) {
                          // Is a Schema!
                          var filter = ref._definition.filters && ref._definition.filters[fieldIndex];

                          if (filter && !filter.call(ref, client, value, root)) {
                            if (value && value['$changes']) {
                              refIdsDissallowed.add(value['$changes'].refId);
                            }

                            continue;
                          }
                        } else {
                          // Is a collection! (map, array, etc.)
                          var parent = changeTree.parent;
                          var filter = changeTree.getChildrenFilter();

                          if (filter && !filter.call(parent, client, ref['$indexes'].get(fieldIndex), value, root)) {
                            if (value && value['$changes']) {
                              refIdsDissallowed.add(value['$changes'].refId);
                            }

                            continue;
                          }
                        } // visit child ChangeTree on further iteration.


                        if (value['$changes']) {
                          changeTrees.push(value['$changes']);
                          numChangeTrees++;
                        } //
                        // Copy cached bytes
                        //


                        if (change.op !== exports.OPERATION.TOUCH) {
                          //
                          // TODO: refactor me!
                          //
                          if (change.op === exports.OPERATION.ADD || isSchema) {
                            //
                            // use cached bytes directly if is from Schema type.
                            //
                            filteredBytes = filteredBytes.concat(changeTree.caches[fieldIndex]);
                            containerIndexes.add(fieldIndex);
                          } else {
                            if (containerIndexes.has(fieldIndex)) {
                              //
                              // use cached bytes if already has the field
                              //
                              filteredBytes = filteredBytes.concat(changeTree.caches[fieldIndex]);
                            } else {
                              //
                              // force ADD operation if field is not known by this client.
                              //
                              containerIndexes.add(fieldIndex);
                              uint8$1(filteredBytes, exports.OPERATION.ADD);
                              number$1(filteredBytes, fieldIndex);

                              if (ref instanceof MapSchema) {
                                //
                                // MapSchema dynamic key
                                //
                                var dynamicIndex = changeTree.ref['$indexes'].get(fieldIndex);
                                string$1(filteredBytes, dynamicIndex);
                              }

                              if (value['$changes']) {
                                number$1(filteredBytes, value['$changes'].refId);
                              } else {
                                // "encodePrimitiveType" without type checking.
                                // the type checking has been done on the first .encode() call.
                                encode[type](filteredBytes, value);
                              }
                            }
                          }
                        } else if (value['$changes'] && !isSchema) {
                          //
                          // TODO:
                          // - track ADD/REPLACE/DELETE instances on `$filterState`
                          // - do NOT always encode dynamicIndex for MapSchema.
                          //   (If client already has that key, only the first index is necessary.)
                          //
                          uint8$1(filteredBytes, exports.OPERATION.ADD);
                          number$1(filteredBytes, fieldIndex);

                          if (ref instanceof MapSchema) {
                            //
                            // MapSchema dynamic key
                            //
                            var dynamicIndex = changeTree.ref['$indexes'].get(fieldIndex);
                            string$1(filteredBytes, dynamicIndex);
                          }

                          number$1(filteredBytes, value['$changes'].refId);
                        }
                      }
                    };

                    for (var i = 0; i < numChangeTrees; i++) {
                      _loop_1(i);
                    }

                    return filteredBytes;
                  };

                  Schema.prototype.clone = function () {
                    var cloned = new this.constructor();
                    var schema = this._definition.schema;

                    for (var field in schema) {
                      if (typeof this[field] === "object" && typeof this[field].clone === "function") {
                        // deep clone
                        cloned[field] = this[field].clone();
                      } else {
                        // primitive values
                        cloned[field] = this[field];
                      }
                    }

                    return cloned;
                  };

                  Schema.prototype.triggerAll = function () {
                    // skip if haven't received any remote refs yet.
                    if (this.$changes.root.refs.size === 0) {
                      return;
                    }

                    var allChanges = new Map();

                    Schema.prototype._triggerAllFillChanges.call(this, this, allChanges);

                    try {
                      Schema.prototype._triggerChanges.call(this, allChanges);
                    } catch (e) {
                      Schema.onError(e);
                    }
                  };

                  Schema.prototype.toJSON = function () {
                    var schema = this._definition.schema;
                    var deprecated = this._definition.deprecated;
                    var obj = {};

                    for (var field in schema) {
                      if (!deprecated[field] && this[field] !== null && typeof this[field] !== "undefined") {
                        obj[field] = typeof this[field]['toJSON'] === "function" ? this[field]['toJSON']() : this["_" + field];
                      }
                    }

                    return obj;
                  };

                  Schema.prototype.discardAllChanges = function () {
                    this.$changes.discardAll();
                  };

                  Schema.prototype.getByIndex = function (index) {
                    return this[this._definition.fieldsByIndex[index]];
                  };

                  Schema.prototype.deleteByIndex = function (index) {
                    this[this._definition.fieldsByIndex[index]] = undefined;
                  };

                  Schema.prototype.tryEncodeTypeId = function (bytes, type, targetType) {
                    if (type._typeid !== targetType._typeid) {
                      uint8$1(bytes, TYPE_ID);
                      number$1(bytes, targetType._typeid);
                    }
                  };

                  Schema.prototype.getSchemaType = function (bytes, it, defaultType) {
                    var type;

                    if (bytes[it.offset] === TYPE_ID) {
                      it.offset++;
                      type = this.constructor._context.get(number(bytes, it));
                    }

                    return type || defaultType;
                  };

                  Schema.prototype.createTypeInstance = function (type) {
                    var instance = new type(); // assign root on $changes

                    instance.$changes.root = this.$changes.root;
                    return instance;
                  };

                  Schema.prototype._triggerAllFillChanges = function (ref, allChanges) {
                    if (allChanges.has(ref['$changes'].refId)) {
                      return;
                    }

                    var changes = [];
                    allChanges.set(ref['$changes'].refId || 0, changes);

                    if (ref instanceof Schema) {
                      var schema = ref._definition.schema;

                      for (var fieldName in schema) {
                        var _field = "_" + fieldName;

                        var value = ref[_field];

                        if (value !== undefined) {
                          changes.push({
                            op: exports.OPERATION.ADD,
                            field: fieldName,
                            value: value,
                            previousValue: undefined
                          });

                          if (value['$changes'] !== undefined) {
                            Schema.prototype._triggerAllFillChanges.call(this, value, allChanges);
                          }
                        }
                      }
                    } else {
                      var entries = ref.entries();
                      var iter = void 0;

                      while ((iter = entries.next()) && !iter.done) {
                        var _a = iter.value,
                            key = _a[0],
                            value = _a[1];
                        changes.push({
                          op: exports.OPERATION.ADD,
                          field: key,
                          dynamicIndex: key,
                          value: value,
                          previousValue: undefined
                        });

                        if (value['$changes'] !== undefined) {
                          Schema.prototype._triggerAllFillChanges.call(this, value, allChanges);
                        }
                      }
                    }
                  };

                  Schema.prototype._triggerChanges = function (allChanges) {
                    var _this = this;

                    allChanges.forEach(function (changes, refId) {
                      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;

                      if (changes.length > 0) {
                        var ref = _this.$changes.root.refs.get(refId);

                        var isSchema = ref instanceof Schema;

                        for (var i = 0; i < changes.length; i++) {
                          var change = changes[i];
                          var listener = ref['$listeners'] && ref['$listeners'][change.field];

                          if (!isSchema) {
                            if (change.op === exports.OPERATION.ADD && change.previousValue === undefined) {
                              (_b = (_a = ref).onAdd) === null || _b === void 0 ? void 0 : _b.call(_a, change.value, (_c = change.dynamicIndex) !== null && _c !== void 0 ? _c : change.field);
                            } else if (change.op === exports.OPERATION.DELETE) {
                              //
                              // FIXME: `previousValue` should always be avaiiable.
                              // ADD + DELETE operations are still encoding DELETE operation.
                              //
                              if (change.previousValue !== undefined) {
                                (_e = (_d = ref).onRemove) === null || _e === void 0 ? void 0 : _e.call(_d, change.previousValue, (_f = change.dynamicIndex) !== null && _f !== void 0 ? _f : change.field);
                              }
                            } else if (change.op === exports.OPERATION.DELETE_AND_ADD) {
                              if (change.previousValue !== undefined) {
                                (_h = (_g = ref).onRemove) === null || _h === void 0 ? void 0 : _h.call(_g, change.previousValue, change.dynamicIndex);
                              }

                              (_k = (_j = ref).onAdd) === null || _k === void 0 ? void 0 : _k.call(_j, change.value, change.dynamicIndex);
                            } else if (change.op === exports.OPERATION.REPLACE || change.value !== change.previousValue) {
                              (_m = (_l = ref).onChange) === null || _m === void 0 ? void 0 : _m.call(_l, change.value, change.dynamicIndex);
                            }
                          } //
                          // trigger onRemove on child structure.
                          //


                          if ((change.op & exports.OPERATION.DELETE) === exports.OPERATION.DELETE && change.previousValue instanceof Schema && change.previousValue.onRemove) {
                            change.previousValue.onRemove();
                          }

                          if (listener) {
                            try {
                              listener.invoke(change.value, change.previousValue);
                            } catch (e) {
                              Schema.onError(e);
                            }
                          }
                        }

                        if (isSchema) {
                          if (ref.onChange) {
                            try {
                              ref.onChange(changes);
                            } catch (e) {
                              Schema.onError(e);
                            }
                          }
                        }
                      }
                    });
                  };

                  Schema._definition = SchemaDefinition.create();
                  return Schema;
                }();

                function dumpChanges(schema) {
                  var changeTrees = [schema['$changes']];
                  var numChangeTrees = 1;
                  var dump = {};
                  var currentStructure = dump;

                  var _loop_1 = function _loop_1(i) {
                    var changeTree = changeTrees[i];
                    changeTree.changes.forEach(function (change) {
                      var ref = changeTree.ref;
                      var fieldIndex = change.index;
                      var field = ref['_definition'] ? ref['_definition'].fieldsByIndex[fieldIndex] : ref['$indexes'].get(fieldIndex);
                      currentStructure[field] = changeTree.getValue(fieldIndex);
                    });
                  };

                  for (var i = 0; i < numChangeTrees; i++) {
                    _loop_1(i);
                  }

                  return dump;
                }

                var reflectionContext = new Context();
                /**
                 * Reflection
                 */

                var ReflectionField =
                /** @class */
                function (_super) {
                  __extends(ReflectionField, _super);

                  function ReflectionField() {
                    return _super !== null && _super.apply(this, arguments) || this;
                  }

                  __decorate([type("string", reflectionContext)], ReflectionField.prototype, "name", void 0);

                  __decorate([type("string", reflectionContext)], ReflectionField.prototype, "type", void 0);

                  __decorate([type("number", reflectionContext)], ReflectionField.prototype, "referencedType", void 0);

                  return ReflectionField;
                }(Schema);

                var ReflectionType =
                /** @class */
                function (_super) {
                  __extends(ReflectionType, _super);

                  function ReflectionType() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;

                    _this.fields = new ArraySchema();
                    return _this;
                  }

                  __decorate([type("number", reflectionContext)], ReflectionType.prototype, "id", void 0);

                  __decorate([type([ReflectionField], reflectionContext)], ReflectionType.prototype, "fields", void 0);

                  return ReflectionType;
                }(Schema);

                var Reflection =
                /** @class */
                function (_super) {
                  __extends(Reflection, _super);

                  function Reflection() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;

                    _this.types = new ArraySchema();
                    return _this;
                  }

                  Reflection.encode = function (instance) {
                    var rootSchemaType = instance.constructor;
                    var reflection = new Reflection();
                    reflection.rootType = rootSchemaType._typeid;

                    var buildType = function buildType(currentType, schema) {
                      for (var fieldName in schema) {
                        var field = new ReflectionField();
                        field.name = fieldName;
                        var fieldType = void 0;

                        if (typeof schema[fieldName] === "string") {
                          fieldType = schema[fieldName];
                        } else {
                          var type_1 = schema[fieldName];
                          var childTypeSchema = void 0; //
                          // TODO: refactor below.
                          //

                          if (Schema.is(type_1)) {
                            fieldType = "ref";
                            childTypeSchema = schema[fieldName];
                          } else {
                            fieldType = Object.keys(type_1)[0];

                            if (typeof type_1[fieldType] === "string") {
                              fieldType += ":" + type_1[fieldType]; // array:string
                            } else {
                              childTypeSchema = type_1[fieldType];
                            }
                          }

                          field.referencedType = childTypeSchema ? childTypeSchema._typeid : -1;
                        }

                        field.type = fieldType;
                        currentType.fields.push(field);
                      }

                      reflection.types.push(currentType);
                    };

                    var types = rootSchemaType._context.types;

                    for (var typeid in types) {
                      var type_2 = new ReflectionType();
                      type_2.id = Number(typeid);
                      buildType(type_2, types[typeid]._definition.schema);
                    }

                    return reflection.encodeAll();
                  };

                  Reflection.decode = function (bytes, it) {
                    var context = new Context();
                    var reflection = new Reflection();
                    reflection.decode(bytes, it);
                    var schemaTypes = reflection.types.reduce(function (types, reflectionType) {
                      var schema =
                      /** @class */
                      function (_super) {
                        __extends(_, _super);

                        function _() {
                          return _super !== null && _super.apply(this, arguments) || this;
                        }

                        return _;
                      }(Schema);

                      var typeid = reflectionType.id;
                      types[typeid] = schema;
                      context.add(schema, typeid);
                      return types;
                    }, {});
                    reflection.types.forEach(function (reflectionType) {
                      var schemaType = schemaTypes[reflectionType.id];
                      reflectionType.fields.forEach(function (field) {
                        var _a;

                        if (field.referencedType !== undefined) {
                          var fieldType = field.type;
                          var refType = schemaTypes[field.referencedType]; // map or array of primitive type (-1)

                          if (!refType) {
                            var typeInfo = field.type.split(":");
                            fieldType = typeInfo[0];
                            refType = typeInfo[1];
                          }

                          if (fieldType === "ref") {
                            type(refType, context)(schemaType.prototype, field.name);
                          } else {
                            type((_a = {}, _a[fieldType] = refType, _a), context)(schemaType.prototype, field.name);
                          }
                        } else {
                          type(field.type, context)(schemaType.prototype, field.name);
                        }
                      });
                    });
                    var rootType = schemaTypes[reflection.rootType];
                    var rootInstance = new rootType();
                    /**
                     * auto-initialize referenced types on root type
                     * to allow registering listeners immediatelly on client-side
                     */

                    for (var fieldName in rootType._definition.schema) {
                      var fieldType = rootType._definition.schema[fieldName];

                      if (typeof fieldType !== "string") {
                        rootInstance[fieldName] = typeof fieldType === "function" ? new fieldType() // is a schema reference
                        : new (getType(Object.keys(fieldType)[0]).constructor)(); // is a "collection"
                      }
                    }

                    return rootInstance;
                  };

                  __decorate([type([ReflectionType], reflectionContext)], Reflection.prototype, "types", void 0);

                  __decorate([type("number", reflectionContext)], Reflection.prototype, "rootType", void 0);

                  return Reflection;
                }(Schema);

                registerType("map", {
                  constructor: MapSchema,
                  getProxy: getMapProxy
                });
                registerType("array", {
                  constructor: ArraySchema,
                  getProxy: getArrayProxy
                });
                registerType("set", {
                  constructor: SetSchema
                });
                registerType("collection", {
                  constructor: CollectionSchema
                });
                exports.ArraySchema = ArraySchema;
                exports.CollectionSchema = CollectionSchema;
                exports.Context = Context;
                exports.MapSchema = MapSchema;
                exports.Reflection = Reflection;
                exports.ReflectionField = ReflectionField;
                exports.ReflectionType = ReflectionType;
                exports.Schema = Schema;
                exports.SchemaDefinition = SchemaDefinition;
                exports.SetSchema = SetSchema;
                exports.decode = decode;
                exports.defineTypes = defineTypes;
                exports.deprecated = deprecated;
                exports.dumpChanges = dumpChanges;
                exports.encode = encode;
                exports.filter = filter;
                exports.filterChildren = filterChildren;
                exports.hasFilter = hasFilter;
                exports.registerType = registerType;
                exports.type = type;
                Object.defineProperty(exports, '__esModule', {
                  value: true
                });
              });
            });

            var Room =
            /** @class */
            function () {
              function Room(name, rootSchema) {
                var _this = this; // Public signals


                this.onStateChange = createSignal();
                this.onError = createSignal();
                this.onLeave = createSignal();
                this.onJoin = createSignal();
                this.hasJoined = false;
                this.onMessageHandlers = createNanoEvents();
                this.id = null;
                this.name = name;

                if (rootSchema) {
                  this.serializer = new (getSerializer("schema"))();
                  this.rootSchema = rootSchema;
                  this.serializer.state = new rootSchema();
                }

                this.onError(function (code, message) {
                  return console.warn("colyseus.js - onError => (" + code + ") " + message);
                });
                this.onLeave(function () {
                  return _this.removeAllListeners();
                });
              }

              Room.prototype.connect = function (endpoint) {
                var _this = this;

                this.connection = new Connection();
                this.connection.events.onmessage = this.onMessageCallback.bind(this);

                this.connection.events.onclose = function (e) {
                  if (!_this.hasJoined) {
                    console.warn("Room connection was closed unexpectedly (" + e.code + "): " + e.reason);

                    _this.onError.invoke(e.code, e.reason);

                    return;
                  }

                  _this.onLeave.invoke(e.code);

                  _this.destroy();
                };

                this.connection.events.onerror = function (e) {
                  console.warn("Room, onError (" + e.code + "): " + e.reason);

                  _this.onError.invoke(e.code, e.reason);
                };

                this.connection.connect(endpoint);
              };

              Room.prototype.leave = function (consented) {
                if (consented === void 0) {
                  consented = true;
                }

                if (this.connection) {
                  if (consented) {
                    this.connection.send([exports.Protocol.LEAVE_ROOM]);
                  } else {
                    this.connection.close();
                  }
                } else {
                  this.onLeave.invoke(4000); // "consented" code
                }
              };

              Room.prototype.onMessage = function (type, callback) {
                return this.onMessageHandlers.on(this.getMessageHandlerKey(type), callback);
              };

              Room.prototype.send = function (type, message) {
                var initialBytes = [exports.Protocol.ROOM_DATA];

                if (typeof type === "string") {
                  umd.encode.string(initialBytes, type);
                } else {
                  umd.encode.number(initialBytes, type);
                }

                var arr;

                if (message !== undefined) {
                  var encoded = encode(message);
                  arr = new Uint8Array(initialBytes.length + encoded.byteLength);
                  arr.set(new Uint8Array(initialBytes), 0);
                  arr.set(new Uint8Array(encoded), initialBytes.length);
                } else {
                  arr = new Uint8Array(initialBytes);
                }

                this.connection.send(arr.buffer);
              };

              Object.defineProperty(Room.prototype, "state", {
                get: function get() {
                  return this.serializer.getState();
                },
                enumerable: false,
                configurable: true
              });

              Room.prototype.removeAllListeners = function () {
                this.onJoin.clear();
                this.onStateChange.clear();
                this.onError.clear();
                this.onLeave.clear();
                this.onMessageHandlers.events = {};
              };

              Room.prototype.onMessageCallback = function (event) {
                var bytes = Array.from(new Uint8Array(event.data));
                var code = bytes[0];

                if (code === exports.Protocol.JOIN_ROOM) {
                  var offset = 1;
                  this.serializerId = utf8Read(bytes, offset);
                  offset += utf8Length(this.serializerId); // Instantiate serializer if not locally available.

                  if (!this.serializer) {
                    var serializer = getSerializer(this.serializerId);
                    this.serializer = new serializer();
                  }

                  if (bytes.length > offset && this.serializer.handshake) {
                    this.serializer.handshake(bytes, {
                      offset: offset
                    });
                  }

                  this.hasJoined = true;
                  this.onJoin.invoke(); // acknowledge successfull JOIN_ROOM

                  this.connection.send([exports.Protocol.JOIN_ROOM]);
                } else if (code === exports.Protocol.ERROR) {
                  var it_1 = {
                    offset: 1
                  };
                  var code_1 = umd.decode.number(bytes, it_1);
                  var message = umd.decode.string(bytes, it_1);
                  this.onError.invoke(code_1, message);
                } else if (code === exports.Protocol.LEAVE_ROOM) {
                  this.leave();
                } else if (code === exports.Protocol.ROOM_DATA_SCHEMA) {
                  var it_2 = {
                    offset: 1
                  };

                  var context_1 = this.serializer.getState().constructor._context;

                  var type = context_1.get(umd.decode.number(bytes, it_2));
                  var message = new type();
                  message.decode(bytes, it_2);
                  this.dispatchMessage(type, message);
                } else if (code === exports.Protocol.ROOM_STATE) {
                  bytes.shift(); // drop `code` byte

                  this.setState(bytes);
                } else if (code === exports.Protocol.ROOM_STATE_PATCH) {
                  bytes.shift(); // drop `code` byte

                  this.patch(bytes);
                } else if (code === exports.Protocol.ROOM_DATA) {
                  var it_3 = {
                    offset: 1
                  };
                  var type = umd.decode.stringCheck(bytes, it_3) ? umd.decode.string(bytes, it_3) : umd.decode.number(bytes, it_3);
                  var message = bytes.length > it_3.offset ? decode(event.data, it_3.offset) : undefined;
                  this.dispatchMessage(type, message);
                }
              };

              Room.prototype.setState = function (encodedState) {
                this.serializer.setState(encodedState);
                this.onStateChange.invoke(this.serializer.getState());
              };

              Room.prototype.patch = function (binaryPatch) {
                this.serializer.patch(binaryPatch);
                this.onStateChange.invoke(this.serializer.getState());
              };

              Room.prototype.dispatchMessage = function (type, message) {
                var messageType = this.getMessageHandlerKey(type);

                if (this.onMessageHandlers.events[messageType]) {
                  this.onMessageHandlers.emit(messageType, message);
                } else if (this.onMessageHandlers.events['*']) {
                  this.onMessageHandlers.emit('*', type, message);
                } else {
                  console.warn("onMessage not registered for type '" + type + "'.");
                }
              };

              Room.prototype.destroy = function () {
                if (this.serializer) {
                  this.serializer.teardown();
                }
              };

              Room.prototype.getMessageHandlerKey = function (type) {
                switch (typeof type) {
                  // typeof Schema
                  case "function":
                    return "$" + type._typeid;
                  // string

                  case "string":
                    return type;
                  // number

                  case "number":
                    return "i" + type;

                  default:
                    throw new Error("invalid message type.");
                }
              };

              return Room;
            }(); /// <reference path="../typings/cocos-creator.d.ts" />

            /**
             * We do not assign 'storage' to window.localStorage immediatelly for React
             * Native compatibility. window.localStorage is not present when this module is
             * loaded.
             */


            var storage;

            function getStorage() {
              if (!storage) {
                storage = typeof cc !== 'undefined' && cc.sys && cc.sys.localStorage ? cc.sys.localStorage // compatibility with cocos creator
                : typeof window !== "undefined" && window.localStorage //RN does have window object at this point, but localStorage is not defined
                ? window.localStorage // regular browser environment
                : {
                  cache: {},
                  setItem: function setItem(key, value) {
                    this.cache[key] = value;
                  },
                  getItem: function getItem(key) {
                    this.cache[key];
                  },
                  removeItem: function removeItem(key) {
                    delete this.cache[key];
                  }
                };
              }

              return storage;
            }

            function setItem(key, value) {
              getStorage().setItem(key, value);
            }

            function removeItem(key) {
              getStorage().removeItem(key);
            }

            function getItem(key, callback) {
              var value = getStorage().getItem(key);

              if (typeof Promise === 'undefined' || // old browsers
              !(value instanceof Promise)) {
                // browser has synchronous return
                callback(value);
              } else {
                // react-native is asynchronous
                value.then(function (id) {
                  return callback(id);
                });
              }
            }

            var TOKEN_STORAGE = "colyseus-auth-token";
            exports.Platform = void 0;

            (function (Platform) {
              Platform["ios"] = "ios";
              Platform["android"] = "android";
            })(exports.Platform || (exports.Platform = {}));

            var Auth =
            /** @class */
            function () {
              function Auth(endpoint) {
                var _this = this;

                this._id = undefined;
                this.username = undefined;
                this.displayName = undefined;
                this.avatarUrl = undefined;
                this.isAnonymous = undefined;
                this.email = undefined;
                this.lang = undefined;
                this.location = undefined;
                this.timezone = undefined;
                this.metadata = undefined;
                this.devices = undefined;
                this.facebookId = undefined;
                this.twitterId = undefined;
                this.googleId = undefined;
                this.gameCenterId = undefined;
                this.steamId = undefined;
                this.friendIds = undefined;
                this.blockedUserIds = undefined;
                this.createdAt = undefined;
                this.updatedAt = undefined; // auth token

                this.token = undefined;
                this.endpoint = endpoint.replace("ws", "http");
                getItem(TOKEN_STORAGE, function (token) {
                  return _this.token = token;
                });
              }

              Object.defineProperty(Auth.prototype, "hasToken", {
                get: function get() {
                  return !!this.token;
                },
                enumerable: false,
                configurable: true
              });

              Auth.prototype.login = function (options) {
                if (options === void 0) {
                  options = {};
                }

                return __awaiter(this, void 0, void 0, function () {
                  var queryParams, data, attr;
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        queryParams = Object.assign({}, options);

                        if (this.hasToken) {
                          queryParams.token = this.token;
                        }

                        return [4
                        /*yield*/
                        , this.request('post', '/auth', queryParams)];

                      case 1:
                        data = _a.sent(); // set & cache token

                        this.token = data.token;
                        setItem(TOKEN_STORAGE, this.token);

                        for (attr in data) {
                          if (this.hasOwnProperty(attr)) {
                            this[attr] = data[attr];
                          }
                        }

                        this.registerPingService();
                        return [2
                        /*return*/
                        , this];
                    }
                  });
                });
              };

              Auth.prototype.save = function () {
                return __awaiter(this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4
                        /*yield*/
                        , this.request('put', '/auth', {}, {
                          username: this.username,
                          displayName: this.displayName,
                          avatarUrl: this.avatarUrl,
                          lang: this.lang,
                          location: this.location,
                          timezone: this.timezone
                        })];

                      case 1:
                        _a.sent();

                        return [2
                        /*return*/
                        , this];
                    }
                  });
                });
              };

              Auth.prototype.getFriends = function () {
                return __awaiter(this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4
                        /*yield*/
                        , this.request('get', '/friends/all')];

                      case 1:
                        return [2
                        /*return*/
                        , _a.sent()];
                    }
                  });
                });
              };

              Auth.prototype.getOnlineFriends = function () {
                return __awaiter(this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4
                        /*yield*/
                        , this.request('get', '/friends/online')];

                      case 1:
                        return [2
                        /*return*/
                        , _a.sent()];
                    }
                  });
                });
              };

              Auth.prototype.getFriendRequests = function () {
                return __awaiter(this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4
                        /*yield*/
                        , this.request('get', '/friends/requests')];

                      case 1:
                        return [2
                        /*return*/
                        , _a.sent()];
                    }
                  });
                });
              };

              Auth.prototype.sendFriendRequest = function (friendId) {
                return __awaiter(this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4
                        /*yield*/
                        , this.request('post', '/friends/requests', {
                          userId: friendId
                        })];

                      case 1:
                        return [2
                        /*return*/
                        , _a.sent()];
                    }
                  });
                });
              };

              Auth.prototype.acceptFriendRequest = function (friendId) {
                return __awaiter(this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4
                        /*yield*/
                        , this.request('put', '/friends/requests', {
                          userId: friendId
                        })];

                      case 1:
                        return [2
                        /*return*/
                        , _a.sent()];
                    }
                  });
                });
              };

              Auth.prototype.declineFriendRequest = function (friendId) {
                return __awaiter(this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4
                        /*yield*/
                        , this.request('del', '/friends/requests', {
                          userId: friendId
                        })];

                      case 1:
                        return [2
                        /*return*/
                        , _a.sent()];
                    }
                  });
                });
              };

              Auth.prototype.blockUser = function (friendId) {
                return __awaiter(this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4
                        /*yield*/
                        , this.request('post', '/friends/block', {
                          userId: friendId
                        })];

                      case 1:
                        return [2
                        /*return*/
                        , _a.sent()];
                    }
                  });
                });
              };

              Auth.prototype.unblockUser = function (friendId) {
                return __awaiter(this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4
                        /*yield*/
                        , this.request('put', '/friends/block', {
                          userId: friendId
                        })];

                      case 1:
                        return [2
                        /*return*/
                        , _a.sent()];
                    }
                  });
                });
              };

              Auth.prototype.request = function (method, segments, query, body, headers) {
                if (query === void 0) {
                  query = {};
                }

                if (headers === void 0) {
                  headers = {};
                }

                return __awaiter(this, void 0, void 0, function () {
                  var queryParams, name_1, queryString, opts;
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        headers['Accept'] = 'application/json';

                        if (this.hasToken) {
                          headers['Authorization'] = 'Bearer ' + this.token;
                        }

                        queryParams = [];

                        for (name_1 in query) {
                          queryParams.push(name_1 + "=" + query[name_1]);
                        }

                        queryString = queryParams.length > 0 ? "?" + queryParams.join("&") : '';
                        opts = {
                          headers: headers
                        };

                        if (body) {
                          opts.body = body;
                        }

                        return [4
                        /*yield*/
                        , http[method]("" + this.endpoint + segments + queryString, opts)];

                      case 1:
                        return [2
                        /*return*/
                        , _a.sent().data];
                    }
                  });
                });
              };

              Auth.prototype.logout = function () {
                this.token = undefined;
                removeItem(TOKEN_STORAGE);
                this.unregisterPingService();
              };

              Auth.prototype.registerPingService = function (timeout) {
                var _this = this;

                if (timeout === void 0) {
                  timeout = 15000;
                }

                this.unregisterPingService();
                this.keepOnlineInterval = setInterval(function () {
                  return _this.request('get', '/auth');
                }, timeout);
              };

              Auth.prototype.unregisterPingService = function () {
                clearInterval(this.keepOnlineInterval);
              };

              return Auth;
            }();

            var _a;

            var MatchMakeError =
            /** @class */
            function (_super) {
              __extends(MatchMakeError, _super);

              function MatchMakeError(message, code) {
                var _this = _super.call(this, message) || this;

                _this.code = code;
                Object.setPrototypeOf(_this, MatchMakeError.prototype);
                return _this;
              }

              return MatchMakeError;
            }(Error); // - React Native does not provide `window.location`
            // - Cocos Creator (Native) does not provide `window.location.hostname` 


            var DEFAULT_ENDPOINT = typeof window !== "undefined" && typeof ((_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.hostname) !== "undefined" ? window.location.protocol.replace("http", "ws") + "//" + window.location.hostname + (window.location.port && ":" + window.location.port) : "ws://127.0.0.1:2567";

            var Client =
            /** @class */
            function () {
              function Client(endpoint) {
                if (endpoint === void 0) {
                  endpoint = DEFAULT_ENDPOINT;
                }

                this.endpoint = endpoint;
              }

              Object.defineProperty(Client.prototype, "auth", {
                get: function get() {
                  if (!this._auth) {
                    this._auth = new Auth(this.endpoint);
                  }

                  return this._auth;
                },
                enumerable: false,
                configurable: true
              });

              Client.prototype.joinOrCreate = function (roomName, options, rootSchema) {
                if (options === void 0) {
                  options = {};
                }

                return __awaiter(this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4
                        /*yield*/
                        , this.createMatchMakeRequest('joinOrCreate', roomName, options, rootSchema)];

                      case 1:
                        return [2
                        /*return*/
                        , _a.sent()];
                    }
                  });
                });
              };

              Client.prototype.create = function (roomName, options, rootSchema) {
                if (options === void 0) {
                  options = {};
                }

                return __awaiter(this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4
                        /*yield*/
                        , this.createMatchMakeRequest('create', roomName, options, rootSchema)];

                      case 1:
                        return [2
                        /*return*/
                        , _a.sent()];
                    }
                  });
                });
              };

              Client.prototype.join = function (roomName, options, rootSchema) {
                if (options === void 0) {
                  options = {};
                }

                return __awaiter(this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4
                        /*yield*/
                        , this.createMatchMakeRequest('join', roomName, options, rootSchema)];

                      case 1:
                        return [2
                        /*return*/
                        , _a.sent()];
                    }
                  });
                });
              };

              Client.prototype.joinById = function (roomId, options, rootSchema) {
                if (options === void 0) {
                  options = {};
                }

                return __awaiter(this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4
                        /*yield*/
                        , this.createMatchMakeRequest('joinById', roomId, options, rootSchema)];

                      case 1:
                        return [2
                        /*return*/
                        , _a.sent()];
                    }
                  });
                });
              };

              Client.prototype.reconnect = function (roomId, sessionId, rootSchema) {
                return __awaiter(this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4
                        /*yield*/
                        , this.createMatchMakeRequest('joinById', roomId, {
                          sessionId: sessionId
                        }, rootSchema)];

                      case 1:
                        return [2
                        /*return*/
                        , _a.sent()];
                    }
                  });
                });
              };

              Client.prototype.getAvailableRooms = function (roomName) {
                if (roomName === void 0) {
                  roomName = "";
                }

                return __awaiter(this, void 0, void 0, function () {
                  var url;
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        url = this.endpoint.replace("ws", "http") + "/matchmake/" + roomName;
                        return [4
                        /*yield*/
                        , get_1(url, {
                          headers: {
                            'Accept': 'application/json'
                          }
                        })];

                      case 1:
                        return [2
                        /*return*/
                        , _a.sent().data];
                    }
                  });
                });
              };

              Client.prototype.consumeSeatReservation = function (response, rootSchema) {
                return __awaiter(this, void 0, void 0, function () {
                  var room;
                  return __generator(this, function (_a) {
                    room = this.createRoom(response.room.name, rootSchema);
                    room.id = response.room.roomId;
                    room.sessionId = response.sessionId;
                    room.connect(this.buildEndpoint(response.room, {
                      sessionId: room.sessionId
                    }));
                    return [2
                    /*return*/
                    , new Promise(function (resolve, reject) {
                      var onError = function onError(code, message) {
                        return reject(new ServerError(code, message));
                      };

                      room.onError.once(onError);
                      room['onJoin'].once(function () {
                        room.onError.remove(onError);
                        resolve(room);
                      });
                    })];
                  });
                });
              };

              Client.prototype.createMatchMakeRequest = function (method, roomName, options, rootSchema) {
                if (options === void 0) {
                  options = {};
                }

                return __awaiter(this, void 0, void 0, function () {
                  var url, response;
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        url = this.endpoint.replace("ws", "http") + "/matchmake/" + method + "/" + roomName; // automatically forward auth token, if present

                        if (this._auth && this._auth.hasToken) {
                          options.token = this._auth.token;
                        }

                        return [4
                        /*yield*/
                        , post_1(url, {
                          headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                          },
                          body: JSON.stringify(options)
                        })];

                      case 1:
                        response = _a.sent().data;

                        if (response.error) {
                          throw new MatchMakeError(response.error, response.code);
                        }

                        return [2
                        /*return*/
                        , this.consumeSeatReservation(response, rootSchema)];
                    }
                  });
                });
              };

              Client.prototype.createRoom = function (roomName, rootSchema) {
                return new Room(roomName, rootSchema);
              };

              Client.prototype.buildEndpoint = function (room, options) {
                if (options === void 0) {
                  options = {};
                }

                var params = [];

                for (var name_1 in options) {
                  if (!options.hasOwnProperty(name_1)) {
                    continue;
                  }

                  params.push(name_1 + "=" + options[name_1]);
                }

                return this.endpoint + "/" + room.processId + "/" + room.roomId + "?" + params.join('&');
              };

              return Client;
            }();

            var SchemaSerializer =
            /** @class */
            function () {
              function SchemaSerializer() {}

              SchemaSerializer.prototype.setState = function (rawState) {
                this.state.decode(rawState);
              };

              SchemaSerializer.prototype.getState = function () {
                return this.state;
              };

              SchemaSerializer.prototype.patch = function (patches) {
                this.state.decode(patches);
              };

              SchemaSerializer.prototype.teardown = function () {
                var _a, _b;

                (_b = (_a = this.state) === null || _a === void 0 ? void 0 : _a['$changes']) === null || _b === void 0 ? void 0 : _b.root.clearRefs();
              };

              SchemaSerializer.prototype.handshake = function (bytes, it) {
                if (this.state) {
                  // validate client/server definitinos
                  var reflection = new umd.Reflection();
                  reflection.decode(bytes, it);
                } else {
                  // initialize reflected state from server
                  this.state = umd.Reflection.decode(bytes, it);
                }
              };

              return SchemaSerializer;
            }();

            var NoneSerializer =
            /** @class */
            function () {
              function NoneSerializer() {}

              NoneSerializer.prototype.setState = function (rawState) {};

              NoneSerializer.prototype.getState = function () {
                return null;
              };

              NoneSerializer.prototype.patch = function (patches) {};

              NoneSerializer.prototype.teardown = function () {};

              NoneSerializer.prototype.handshake = function (bytes) {};

              return NoneSerializer;
            }();

            registerSerializer('schema', SchemaSerializer);
            registerSerializer('none', NoneSerializer);
            exports.Auth = Auth;
            exports.Client = Client;
            exports.Room = Room;
            exports.SchemaSerializer = SchemaSerializer;
            exports.registerSerializer = registerSerializer;
            Object.defineProperty(exports, '__esModule', {
              value: true
            });
          });
        })();

        _cjsExports = exports('default', module.exports);
      });

      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
    }
  };
});

System.register("chunks:///_virtual/GameConfig.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e823dOXK0JI6raju8IgRB5T", "GameConfig", undefined);

      var GameConfig = exports('GameConfig', {
        "gameplay": {
          "levels": [{
            "noOfBotsInGame": 6,
            "botsProbabilty": {
              "easy": 0.8,
              "medium": 0.1,
              "hard": 0.1
            }
          }, {
            "noOfBotsInGame": 8,
            "botsProbabilty": {
              "easy": 0.4,
              "medium": 0.4,
              "hard": 0.2
            }
          }],
          "default": {
            "noOfBotsInGame": 10,
            "botsProbabilty": {
              "easy": 0.2,
              "medium": 0.4,
              "hard": 0.4
            }
          }
        },
        "player": {
          "initialSize": 0.5,
          "playerMaxSize": 2,
          "playerStartSpeed": 6,
          "playerEndSpeed": 5
        },
        "bot": {
          "initialSize": 0.5,
          "botMaxSize": 2,
          "botConfig": {
            "easy": {
              "botStartSpeed": 6,
              "botEndSpeed": 5
            },
            "medium": {
              "botStartSpeed": 8,
              "botEndSpeed": 5
            },
            "hard": {
              "botStartSpeed": 8,
              "botEndSpeed": 7
            }
          }
        },
        "powerup": {
          "Sushi": {
            "earlySpawn": 0.5,
            "gain": 0.2,
            "life": {
              "min": 5,
              "max": 10
            },
            "size": 1,
            "rotation": 1,
            "spawnRate": 5,
            "totalSpawnInFeild": 0.5
          },
          "GummyBear": {
            "earlySpawn": 0.5,
            "gain": 0.2,
            "life": {
              "min": 5,
              "max": 10
            },
            "size": 1,
            "rotation": 1,
            "spawnRate": 5,
            "totalSpawnInFeild": 0.5
          }
        }
      });

      if (typeof window['gameManager'] !== 'undefined') {
        try {
          var gameSettingString = window['gameManager'].getGameSettings();
          var config = JSON.parse(gameSettingString);
          GameConfig = exports('GameConfig', config);
          console.log("from game " + JSON.stringify(config));
        } catch (e) {
          GameConfig = exports('GameConfig', GameConfig);
          console.log("from catch " + JSON.stringify(GameConfig));
        }
      } else {
        GameConfig = exports('GameConfig', GameConfig);
        console.log("from else " + JSON.stringify(GameConfig));
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./Sumo.ts', './MenuController.ts', './Gummy.ts', './Config.ts', './BotController.ts', './GameConfig.ts', './PowerUpController.ts', './GameController.ts', './GameUIController.ts', './Bot.ts', './MiloManager.ts', './commonFun.ts', './Player.ts', './colyseus.mjs_cjs=&original=.js', './SocketConnection.ts', './Menu.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});