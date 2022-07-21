System.register("chunks:///_virtual/GameRoot.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './audioManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _defineProperty, _assertThisInitialized, _initializerDefineProperty, cclegacy, _decorator, AudioSource, assert, game, Component, audioManager;

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
      AudioSource = module.AudioSource;
      assert = module.assert;
      game = module.game;
      Component = module.Component;
    }, function (module) {
      audioManager = module.audioManager;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "03e874h6DpBPomHhbFiHlox", "GameRoot", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GameRoot = exports('GameRoot', (_dec = ccclass('GameRoot'), _dec2 = property(AudioSource), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameRoot, _Component);

        function GameRoot() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "currentMap", '');

          _initializerDefineProperty(_assertThisInitialized(_this), "_audioSource", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = GameRoot.prototype;

        _proto.onLoad = function onLoad() {
          var audioSource = this.getComponent(AudioSource);
          assert(audioSource);
          this._audioSource = audioSource;
          game.addPersistRootNode(this.node); // init AudioManager

          audioManager.instance.init(this._audioSource);
        };

        _proto.onEnable = function onEnable() {
          audioManager.instance.playMusic(true);
        };

        _proto.start = function start() {};

        return GameRoot;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_audioSource", [_dec2], {
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

System.register("chunks:///_virtual/poolManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, _createClass, cclegacy, _decorator, instantiate, NodePool;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      instantiate = module.instantiate;
      NodePool = module.NodePool;
    }],
    execute: function () {
      var _dec, _class, _class2, _temp;

      cclegacy._RF.push({}, "07b4eDnPw1IYJCIJkfrfyf/", "poolManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var poolManager = exports('poolManager', (_dec = ccclass("poolManager"), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
        function poolManager() {
          _defineProperty(this, "dictPool", {});

          _defineProperty(this, "dictPrefab", {});
        }

        var _proto = poolManager.prototype;
        /**
         * 根据预设从对象池中获取对应节点
         */

        _proto.getNode = function getNode(prefab, parent) {
          var name = prefab.data.name;
          this.dictPrefab[name] = prefab;
          var node;

          if (this.dictPool.hasOwnProperty(name)) {
            //已有对应的对象池
            var pool = this.dictPool[name];

            if (pool.size() > 0) {
              node = pool.get();
            } else {
              node = instantiate(prefab);
            }
          } else {
            //没有对应对象池，创建他！
            var _pool = new NodePool();

            this.dictPool[name] = _pool;
            node = instantiate(prefab);
          }

          node.parent = parent;
          return node;
        }
        /**
         * 将对应节点放回对象池中
         */
        ;

        _proto.putNode = function putNode(node) {
          var name = node.name;
          var pool = null;

          if (this.dictPool.hasOwnProperty(name)) {
            //已有对应的对象池
            pool = this.dictPool[name];
          } else {
            //没有对应对象池，创建他！
            pool = new NodePool();
            this.dictPool[name] = pool;
          }

          pool.put(node);
        }
        /**
         * 根据名称，清除对应对象池
         */
        ;

        _proto.clearPool = function clearPool(name) {
          if (this.dictPool.hasOwnProperty(name)) {
            var pool = this.dictPool[name];
            pool.clear();
          }
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        _createClass(poolManager, null, [{
          key: "instance",
          get: function get() {
            if (this._instance) {
              return this._instance;
            }

            this._instance = new poolManager();
            return this._instance;
          }
        }]);

        return poolManager;
      }(), _defineProperty(_class2, "_instance", void 0), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

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

System.register("chunks:///_virtual/MenuController.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './mxManager.ts', './constant.ts', './audioManager.ts', './SocketConnection.ts', './InitSceneManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, Material, Prefab, Node, SpriteFrame, Label, director, macro, game, instantiate, Vec3, MeshRenderer, randomRange, SkeletalAnimationComponent, systemEvent, SystemEvent, Animation, Sprite, Color, Component, MxManager, constant, audioManager, SocketConnection, SocketListener, InitSceneManager;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Material = module.Material;
      Prefab = module.Prefab;
      Node = module.Node;
      SpriteFrame = module.SpriteFrame;
      Label = module.Label;
      director = module.director;
      macro = module.macro;
      game = module.game;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      MeshRenderer = module.MeshRenderer;
      randomRange = module.randomRange;
      SkeletalAnimationComponent = module.SkeletalAnimationComponent;
      systemEvent = module.systemEvent;
      SystemEvent = module.SystemEvent;
      Animation = module.Animation;
      Sprite = module.Sprite;
      Color = module.Color;
      Component = module.Component;
    }, function (module) {
      MxManager = module.MxManager;
    }, function (module) {
      constant = module.constant;
    }, function (module) {
      audioManager = module.audioManager;
    }, function (module) {
      SocketConnection = module.SocketConnection;
      SocketListener = module.SocketListener;
    }, function (module) {
      InitSceneManager = module.InitSceneManager;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp, _dec3, _dec4, _class4, _class5, _descriptor2, _temp2, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class7, _class8, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _temp3;

      cclegacy._RF.push({}, "16e06lwqwJFjJauKigdojGv", "MenuController", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Character = exports('Character', (_dec = ccclass('Character'), _dec2 = property(Material), _dec(_class = (_class2 = (_temp = function Character() {
        _initializerDefineProperty(this, "characterMaterial", _descriptor, this);
      }, _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "characterMaterial", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      var food = exports('food', (_dec3 = ccclass('food'), _dec4 = property(Prefab), _dec3(_class4 = (_class5 = (_temp2 = function food() {
        _initializerDefineProperty(this, "foodNode", _descriptor2, this);
      }, _temp2), _descriptor2 = _applyDecoratedDescriptor(_class5.prototype, "foodNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class5)) || _class4));
      var MenuController = exports('MenuController', (_dec5 = ccclass('MenuController'), _dec6 = property(Prefab), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: Node
      }), _dec9 = property({
        type: Character
      }), _dec10 = property({
        type: food
      }), _dec11 = property({
        type: Node
      }), _dec12 = property({
        type: Node
      }), _dec13 = property({
        type: Node
      }), _dec14 = property({
        type: Node
      }), _dec15 = property({
        type: SpriteFrame
      }), _dec16 = property({
        type: SpriteFrame
      }), _dec17 = property({
        type: Material
      }), _dec18 = property({
        type: Material
      }), _dec19 = property({
        type: Label
      }), _dec5(_class7 = (_class8 = (_temp3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MenuController, _Component);

        function MenuController() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "startLoc", void 0);

          _defineProperty(_assertThisInitialized(_this), "startX", void 0);

          _defineProperty(_assertThisInitialized(_this), "startY", void 0);

          _defineProperty(_assertThisInitialized(_this), "startZ", void 0);

          _initializerDefineProperty(_assertThisInitialized(_this), "characterNode", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "playerNode", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "foodNode", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "character", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "food", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "shopNode", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "threedNode", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "missionNode", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "soundNode", _descriptor11, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "soundOff", _descriptor12, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "soundOn", _descriptor13, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "menuMaterial", _descriptor14, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "shopMaterial", _descriptor15, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "sumo", null);

          _defineProperty(_assertThisInitialized(_this), "playerData", {
            "character": -1,
            "bag": -1,
            "headPhone": -1,
            "goggles": -1,
            "target": 0,
            "food": -1
          });

          _defineProperty(_assertThisInitialized(_this), "ShopMenu", null);

          _initializerDefineProperty(_assertThisInitialized(_this), "waitingText", _descriptor16, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "previousAnimation", 0);

          _defineProperty(_assertThisInitialized(_this), "animationTimeOut", null);

          return _this;
        }

        var _proto = MenuController.prototype;

        _proto.onLoad = function onLoad() {
          var _this2 = this;

          MxManager.instance.onGameStart();

          if (MxManager.instance.isMiloApp) {
            SocketConnection.instance.send({
              command: 'CLIENT_LOADED',
              data: {
                msg: 'Client loaded sucessfully'
              }
            });
            InitSceneManager.instance.gameLoaded();
            this.waitingText.string = "Waiting for other users";
            SocketConnection.instance.on(SocketListener.ON_WAIT_TIME, function (value) {
              _this2.waitingText.string = "Game Starts in " + value;
            }, this);
            SocketConnection.instance.on(SocketListener.GAME_STARTED, function (value) {
              clearTimeout(_this2.animationTimeOut);
              director.loadScene('GameScene');
            }, this);
          } else {
            this.waitingText.string = "";
          }

          macro.ENABLE_MULTI_TOUCH = false;
          director.preloadScene('GameScene');
          constant.setCoinBalance(10);
          this.checkSounds(); // if (window.localStorage.getItem("playerData") == null || window.localStorage.getItem("playerData") == undefined)
          // {
          //     var strngData = JSON.stringify(this.playerData);
          //     window.localStorage.setItem("playerData", strngData);
          // }
          // else
          // {
          //     var strngData = (window.localStorage.getItem("playerData"));
          //     this.playerData = JSON.parse(strngData);
          // }

          this.ShopMenu = this.shopNode.getComponent("ShopMenu");
          this.ShopMenu.initialise(this);
          this.addMenuCharacter(); // cc.game.on('backPressed', function (result) { });

          game.on('backPressed', function (status) {
            // this.rewardAdsExist(status);
            _this2.onShopClick();
          }, this); // this.currentLevel.node.on('text-changed', this.botMinSizeEnded, this);

          if (window.localStorage.getItem("currentLevel") == null || window.localStorage.getItem("currentLevel") == undefined) window.localStorage.setItem("currentLevel", "0");
        };

        _proto.addMenuCharacter = function addMenuCharacter() {
          // this.playerData.character = -1;
          //to always reset accesories
          var strngData = JSON.stringify(this.playerData);
          window.localStorage.setItem("playerData", strngData);
          this.playerData = JSON.parse(strngData);
          var characterIndex = this.playerData.character == -1 ? 0 : this.playerData.character;
          var player = instantiate(this.characterNode);
          this.playerNode.addChild(player);
          player.setPosition(new Vec3(0, 0, 0));
          player.getChildByName("Penguine_Anim").getChildByName("penguin_body01").getComponent(MeshRenderer).setMaterial(this.character[characterIndex].characterMaterial, 0); // player.getChildByName("penguin_01").getChildByName("penguin_body01").getComponent(MeshRenderer).setMaterial(this.character[characterIndex].characterMaterial, 0);

          this.sumo = player;
          this.setPlayerUI();
        };

        _proto.startAnimation = function startAnimation() {
          var _this3 = this;

          var range = Math.floor(randomRange(0, 4));

          while (range == this.previousAnimation) {
            range = Math.floor(randomRange(0, 4));
          }

          this.previousAnimation = range;
          var animationDuration = 0;
          var skeletalAnimation = this.sumo.getChildByName("Penguine_Anim").getComponent(SkeletalAnimationComponent);

          switch (this.previousAnimation) {
            case 0:
              skeletalAnimation.play('idle');
              animationDuration = skeletalAnimation.getState('idle').duration;
              break;

            case 1:
              skeletalAnimation.play('win');
              animationDuration = skeletalAnimation.getState('win').duration;
              break;

            case 2:
              skeletalAnimation.play('powerLose');
              animationDuration = skeletalAnimation.getState('powerLose').duration;
              break;

            case 3:
              skeletalAnimation.play('push');
              animationDuration = skeletalAnimation.getState('push').duration;
              break;
          }

          clearTimeout(this.animationTimeOut);
          this.animationTimeOut = setTimeout(function () {
            _this3.startAnimation();
          }, animationDuration * 1000);
        };

        _proto.setPlayerUI = function setPlayerUI() {
          this.startAnimation();

          if (this.playerData.bag >= 0) {
            this.sumo.getChildByName("Penguine_Anim").getChildByName("Chest_M Socket").getChildByName("accessories_schoolbag_01").active = true;
            this.sumo.getChildByName("Penguine_Anim").getChildByName("Chest_M Socket").getChildByName("accessories_schoolbag_01").getComponent(MeshRenderer).setMaterial(this.ShopMenu.bagAcceesories[this.playerData.bag].material, 0); // this.sumo.getChildByName("bag").getChildByName("accessories_schoolbag_01").getComponent(MeshRenderer).setMaterial(this.ShopMenu.bagAcceesories[this.playerData.bag].material, 0);
            // this.sumo.getChildByName("bag").getChildByName("accessories_schoolbag_01").getComponent(MeshRenderer).mesh = this.ShopMenu.bagAcceesories[this.playerData.bag].mesh;
          } else this.sumo.getChildByName("Penguine_Anim").getChildByName("Chest_M Socket").getChildByName("accessories_schoolbag_01").active = false; // this.sumo.getChildByName("bag").getChildByName("accessories_schoolbag_01").active = false;


          if (this.playerData.headPhone >= 0) {
            this.sumo.getChildByName("Penguine_Anim").getChildByName("Head_M Socket").getChildByName("accessories_headset01").active = true;
            this.sumo.getChildByName("Penguine_Anim").getChildByName("Head_M Socket").getChildByName("accessories_headset01").getComponent(MeshRenderer).setMaterial(this.ShopMenu.headPhoneAcceesories[this.playerData.headPhone].material, 0); // this.sumo.getChildByName("headset").getChildByName("accessories_headset01").getComponent(MeshRenderer).setMaterial(this.ShopMenu.headPhoneAcceesories[this.playerData.headPhone].material, 0);
            // this.sumo.getChildByName("headset").getChildByName("accessories_headset01").getComponent(MeshRenderer).mesh = this.ShopMenu.headPhoneAcceesories[this.playerData.headPhone].mesh;
          } else this.sumo.getChildByName("Penguine_Anim").getChildByName("Head_M Socket").getChildByName("accessories_headset01").active = false; // this.sumo.getChildByName("headset").getChildByName("accessories_headset01").active = false;


          if (this.playerData.goggles >= 0) {
            this.sumo.getChildByName("Penguine_Anim").getChildByName("Head_M Socket").getChildByName("accessories_glasses_01").active = true;
            this.sumo.getChildByName("Penguine_Anim").getChildByName("Head_M Socket").getChildByName("accessories_glasses_01").getComponent(MeshRenderer).setMaterial(this.ShopMenu.gogglesAcceesories[this.playerData.goggles].material, 0); // this.sumo.getChildByName("glasses").getChildByName("accessories_glasses_01").getComponent(MeshRenderer).setMaterial(this.ShopMenu.gogglesAcceesories[this.playerData.goggles].material, 0);
            // this.sumo.getChildByName("glasses").getChildByName("accessories_glasses_01").getComponent(MeshRenderer).mesh = this.ShopMenu.gogglesAcceesories[this.playerData.goggles].mesh;
          } else this.sumo.getChildByName("Penguine_Anim").getChildByName("Head_M Socket").getChildByName("accessories_glasses_01").active = false; // this.sumo.getChildByName("glasses").getChildByName("accessories_glasses_01").active = false;


          if (this.playerData.target >= 0) {
            this.sumo.getChildByName("Penguine_Anim").getChildByName("accessories_target_01").active = true;
            this.sumo.getChildByName("Penguine_Anim").getChildByName("accessories_target_01").getComponent(MeshRenderer).setMaterial(this.ShopMenu.targetAcceesories[this.playerData.target].material, 0); // this.sumo.getChildByName("target").getChildByName("accessories_target_01").getComponent(MeshRenderer).setMaterial(this.ShopMenu.targetAcceesories[this.playerData.target].material, 0);
            // this.sumo.getChildByName("target").getChildByName("accessories_target_01").getComponent(MeshRenderer).mesh = this.ShopMenu.targetAcceesories[this.playerData.target].mesh;
          } else this.sumo.getChildByName("Penguine_Anim").getChildByName("accessories_target_01").active = false; // this.sumo.getChildByName("target").getChildByName("accessories_target_01").active = false;

        };

        _proto.start = function start() {
          // Created for rotating the character
          systemEvent.on(SystemEvent.EventType.TOUCH_START, this.touchStart, this);
          systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.touchMove, this);
        };

        _proto.touchStart = function touchStart(touch) {
          this.startLoc = touch.getLocation();
          this.startX = this.sumo.rotation.getEulerAngles(new Vec3()).x;
          this.startY = this.sumo.rotation.getEulerAngles(new Vec3()).y;
          this.startZ = this.sumo.rotation.getEulerAngles(new Vec3()).z;
        };

        _proto.touchMove = function touchMove(touch) {
          var locX = touch.getLocationX();
          var locY = touch.getLocationY();
          var distX = this.startLoc.x + locX;
          var distY = this.startLoc.y + locY; // let angle = clamp(dist, -360, 360);
          // let endQuat = Quat.fromEuler(new Quat(), -90, 0, angle);

          this.sumo.setRotationFromEuler(this.sumo.eulerAngles.x, this.startZ + distX, this.sumo.eulerAngles.z);
          this.foodNode.setRotationFromEuler(this.startY + distY, this.startZ + distX, 0);
        };

        _proto.startGame = function startGame() {
          audioManager.instance.playSound(constant.AUDIO_SOUND.buttonClick);
          clearTimeout(this.animationTimeOut);

          if (MxManager.instance.isMiloApp) {
            // TODO 
            // Disable play button
            SocketConnection.instance.send({
              command: 'CLIENT_READY',
              data: this.playerData
            });
            this.waitingText.string = "Please Wait..";
          } else {
            director.loadScene('GameScene');
          }
        };

        _proto.onShopClick = function onShopClick() {
          audioManager.instance.playSound(constant.AUDIO_SOUND.buttonClick);
          this.threedNode.getChildByName("bg").getComponent(MeshRenderer).setMaterial(this.shopMaterial, 0);
          var anim = this.node.getComponent(Animation);
          anim.play('shopOpen');
          this.ShopMenu.addCharacterScrollContent();
          clearTimeout(this.animationTimeOut);
          var skeletalAnimation = this.sumo.getChildByName("Penguine_Anim").getComponent(SkeletalAnimationComponent);
          skeletalAnimation.play('walk');
          setTimeout(function () {
            skeletalAnimation.play('idle');
          }, 500);
        };

        _proto.checkSounds = function checkSounds() {
          if (constant.CheckSoundEnabled()) {
            this.soundNode.getComponent(Sprite).spriteFrame = this.soundOn;
            this.missionNode.getComponent(Sprite).color = Color.GREEN;
          } else {
            this.soundNode.getComponent(Sprite).spriteFrame = this.soundOff;
            this.missionNode.getComponent(Sprite).color = Color.RED;
          }
        };

        _proto.onMissionClicked = function onMissionClicked() {
          audioManager.instance.toggleGameSound();
          this.checkSounds();
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
      }(Component), _temp3), (_descriptor3 = _applyDecoratedDescriptor(_class8.prototype, "characterNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class8.prototype, "playerNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class8.prototype, "foodNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class8.prototype, "character", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class8.prototype, "food", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class8.prototype, "shopNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class8.prototype, "threedNode", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class8.prototype, "missionNode", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class8.prototype, "soundNode", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class8.prototype, "soundOff", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class8.prototype, "soundOn", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class8.prototype, "menuMaterial", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class8.prototype, "shopMaterial", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class8.prototype, "waitingText", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class8)) || _class7));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, _decorator;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "2680bDo3khI/pPRcB0pUuIo", "EventManager", undefined);

      var ccclass = _decorator.ccclass;
      var EventManager = exports('EventManager', (_dec = ccclass('EventManager'), _dec(_class = (_temp = /*#__PURE__*/function () {
        function EventManager() {
          _defineProperty(this, "events", {});
        }

        var _proto = EventManager.prototype;

        _proto.addListener = function addListener(event, callback) {
          // Check if the callback is not a function
          if (typeof callback !== 'function') {
            console.error("The listener callback must be a function, the given type is " + typeof callback);
            return false;
          } // Check if the event is not a string


          if (typeof event !== 'string') {
            console.error("The event name must be a string, the given type is " + typeof event);
            return false;
          } // Create the event if not exists


          if (this.events[event] === undefined) {
            this.events[event] = {
              listeners: []
            };
          }

          this.events[event].listeners.push(callback);
        };

        _proto.removeListener = function removeListener(event, callback) {
          // Check if this event not exists
          if (this.events[event] === undefined) {
            console.warn("This event: " + event + " does not exist");
            return false;
          }

          this.events[event].listeners = this.events[event].listeners.filter(function (listener) {
            return listener.toString() !== callback.toString();
          });
        };

        _proto.dispatch = function dispatch(event, details) {
          // Check if this event not exists
          if (this.events[event] === undefined) {
            console.warn("This event: " + event + " does not exist");
            return false;
          }

          this.events[event].listeners.forEach(function (listener) {
            listener(details);
          });
        };

        return EventManager;
      }(), _temp)) || _class));

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

          _defineProperty(_assertThisInitialized(_this), "currAngle", 1);

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

System.register("chunks:///_virtual/foodSkins.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './constant.ts', './audioManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, SpriteFrame, Sprite, Label, instantiate, Vec3, Component, constant, audioManager;

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
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      Label = module.Label;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      constant = module.constant;
    }, function (module) {
      audioManager = module.audioManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "34c0a1tj5NCc5aFkjL+L1vl", "foodSkins", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /**
       * Predefined variables
       * Name = FoodSkins
       * DateTime = Sat Jan 22 2022 03:17:59 GMT+0530 (India Standard Time)
       * Author = sushant
       * FileBasename = foodSkins.ts
       * FileBasenameNoExtension = foodSkins
       * URL = db://assets/Script/menuScene/shop/foodSkins.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      var FoodSkins = exports('FoodSkins', (_dec = ccclass('FoodSkins'), _dec2 = property({
        type: SpriteFrame
      }), _dec3 = property({
        type: SpriteFrame
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FoodSkins, _Component);

        function FoodSkins() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "defaultFrame", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "normalFrame", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "skinName", null);

          _defineProperty(_assertThisInitialized(_this), "count", null);

          _defineProperty(_assertThisInitialized(_this), "isActive", true);

          _defineProperty(_assertThisInitialized(_this), "isEquipped", false);

          _defineProperty(_assertThisInitialized(_this), "shopController", null);

          _defineProperty(_assertThisInitialized(_this), "type", null);

          _defineProperty(_assertThisInitialized(_this), "currentIndex", 0);

          return _this;
        }

        var _proto = FoodSkins.prototype;

        _proto.start = function start() {// [3]
        };

        _proto.initialiseData = function initialiseData(obj, index, shopLayer) {
          this.shopController = shopLayer;
          var plyData = this.shopController.menuController.playerData;
          this.currentIndex = index;
          this.type = constant.ACCESSORIESTYPE.FOOD;
          var accessoriesfoodSkin = constant.getFood();

          if (index == accessoriesfoodSkin.length) {
            this.isActive = false;
            this.count = index;
            this.node.getChildByName("image").getComponent(Sprite).spriteFrame = this.defaultFrame;
            this.node.getChildByName("commingSoon").active = true;
            return;
          }

          this.isEquipped = false;
          this.isActive = obj.unlocked;
          this.count = index;
          this.skinName = obj.name;

          if (plyData.food == -1 && this.count == 0) {
            this.isEquipped = true;
          }

          if (!obj.unlocked) this.node.getChildByName("lockIcon").active = true;
          this.node.getChildByName("name").getComponent(Label).string = this.skinName;
          var data = instantiate(this.shopController.menuController.food[this.count].foodNode);
          this.node.getChildByName("Plane").getChildByName("characterNode").addChild(data);
          data.setPosition(new Vec3(0, 0, 0));

          if (this.skinName == "Snapper") {
            data.setRotationFromEuler(90, 0, 0);
          }

          if (plyData.food == this.count) this.isEquipped = true;
          this.node.getChildByName("equipped").active = this.isEquipped;

          if (this.isEquipped) {
            var food = instantiate(this.shopController.menuController.food[this.count].foodNode);
            this.shopController.menuController.playerNode.getChildByName("foodNode").addChild(food);
          }
        };

        _proto.onEquipClicked = function onEquipClicked() {
          if (this.isActive) {
            if (this.isEquipped) {
              return;
            } else {
              audioManager.instance.playSound(constant.AUDIO_SOUND.buttonClick);
              this.shopController.updatePlayerAccessoriesData(5, this.count);
              this.node.getChildByName("equipped").active = true;
              this.shopController.menuController.playerNode.getChildByName("foodNode").removeAllChildren();
              var food = instantiate(this.shopController.menuController.food[this.count].foodNode);
              this.shopController.menuController.playerNode.getChildByName("foodNode").addChild(food);

              for (var i = 0; i < this.shopController.characterFoodArray.length; i++) {
                var skinData = this.shopController.characterFoodArray[i].getComponent("FoodSkins");

                if (this.shopController.characterFoodArray[i] != this.node) {
                  skinData.isEquipped = false;
                  this.shopController.characterFoodArray[i].getChildByName("equipped").active = false;
                }
              }
            }

            this.isEquipped = !this.isEquipped;
          } else {
            this.shopController.onShowBuyPopup(this);
          }
        };

        return FoodSkins;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "defaultFrame", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "normalFrame", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
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

System.register("chunks:///_virtual/csvManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, _decorator;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "3681eWu0OFKpLrMuVi+8FnM", "csvManager", undefined);

      var ccclass = _decorator.ccclass;
      var CELL_DELIMITERS = [",", ";", "\t", "|", "^"];
      var LINE_DELIMITERS = ["\r\n", "\r", "\n"];

      var getterCast = function getterCast(value, index, cast, d) {
        if (cast instanceof Array) {
          if (cast[index] === "number") {
            return Number(d[index]);
          } else if (cast[index] === "boolean") {
            return d[index] === "true" || d[index] === "t" || d[index] === "1";
          } else {
            return d[index];
          }
        } else {
          if (!isNaN(Number(value))) {
            return Number(d[index]);
          } else if (value == "false" || value == "true" || value == "t" || value == "f") {
            return d[index] === "true" || d[index] === "t" || d[index] === "1";
          } else {
            return d[index];
          }
        }
      };

      var CSV = {
        //

        /* =========================================
            * Constants ===============================
            * ========================================= */
        STANDARD_DECODE_OPTS: {
          skip: 0,
          limit: false,
          header: false,
          cast: false,
          comment: ""
        },
        STANDARD_ENCODE_OPTS: {
          delimiter: CELL_DELIMITERS[0],
          newline: LINE_DELIMITERS[0],
          skip: 0,
          limit: false,
          header: false
        },
        quoteMark: '"',
        doubleQuoteMark: '""',
        quoteRegex: /"/g,
        opts: {},

        /* =========================================
            * Utility Functions =======================
            * ========================================= */
        assign: function assign() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var params = Array.prototype.slice.call(arguments);
          var base = args[0];
          var rest = args.slice(1);

          for (var i = 0, len = rest.length; i < len; i++) {
            for (var attr in rest[i]) {
              base[attr] = rest[i][attr];
            }
          }

          return base;
        },
        map: function map(collection, fn) {
          var results = [];

          for (var i = 0, len = collection.length; i < len; i++) {
            results[i] = fn(collection[i], i);
          }

          return results;
        },
        getType: function getType(obj) {
          return Object.prototype.toString.call(obj).slice(8, -1);
        },
        getLimit: function getLimit(limit, len) {
          return limit === false ? len : 1;
        },
        buildObjectConstructor: function buildObjectConstructor(fields, sample, cast) {
          return function (d) {
            var object = {};

            var setter = function setter(attr, value) {
              return object[attr] = value;
            };

            if (cast) {
              fields.forEach(function (attr, idx) {
                setter(attr, getterCast(sample[idx], idx, cast, d));
              });
            } else {
              fields.forEach(function (attr, idx) {
                setter(attr, getterCast(sample[idx], idx, null, d));
              });
            } // body.push("return object;");
            // body.join(";\n");


            return object;
          };
        },
        buildArrayConstructor: function buildArrayConstructor(fields, sample, cast) {
          return function (d) {
            var row = new Array(sample.length);

            var setter = function setter(idx, value) {
              return row[idx] = value;
            };

            if (cast) {
              fields.forEach(function (attr, idx) {
                setter(attr, getterCast(sample[idx], idx, cast, d));
              });
            } else {
              fields.forEach(function (attr, idx) {
                setter(attr, getterCast(sample[idx], idx, null, d));
              });
            }

            return row;
          };
        },
        frequency: function frequency(coll, needle, limit) {
          if (limit === void 0) limit = false;
          var count = 0;
          var lastIndex = 0;
          var maxIndex = this.getLimit(limit, coll.length);

          while (lastIndex < maxIndex) {
            lastIndex = coll.indexOf(needle, lastIndex);
            if (lastIndex === -1) break;
            lastIndex += 1;
            count++;
          }

          return count;
        },
        mostFrequent: function mostFrequent(coll, needles, limit) {
          var max = 0;
          var detected = '';

          for (var cur = needles.length - 1; cur >= 0; cur--) {
            if (this.frequency(coll, needles[cur], limit) > max) {
              detected = needles[cur];
            }
          }

          return detected || needles[0];
        },
        unsafeParse: function unsafeParse(text, opts, fn) {
          var lines = text.split(opts.newline);

          if (opts.skip > 0) {
            lines.splice(opts.skip);
          }

          var fields;
          var constructor;

          function cells(lines) {
            var line = lines.shift();

            if (line.indexOf('"') >= 0) {
              // 含引号
              // 找到这行完整的数据, 找到对称的双引号
              var lastIndex = 0;
              var findIndex = 0;
              var count = 0;

              while (lines.length > 0) {
                lastIndex = line.indexOf('"', findIndex);
                if (lastIndex === -1 && count % 2 === 0) break;

                if (lastIndex !== -1) {
                  findIndex = lastIndex + 1;
                  count++;
                } else {
                  line = line + opts.newline + lines.shift();
                }
              }

              var list = [];
              var item;
              var quoteCount = 0;
              var start = 0;
              var end = 0;
              var length = line.length;

              for (var key in line) {
                if (!line.hasOwnProperty(key)) {
                  continue;
                }

                var numKey = parseInt(key);
                var _value = line[key];

                if (numKey === 0 && _value === '"') {
                  quoteCount++;
                  start = 1;
                }

                if (_value === '"') {
                  quoteCount++;

                  if (line[numKey - 1] === opts.delimiter && start === numKey) {
                    start++;
                  }
                }

                if (_value === '"' && quoteCount % 2 === 0) {
                  if (line[numKey + 1] === opts.delimiter || numKey + 1 === length) {
                    end = numKey;
                    item = line.substring(start, end);
                    list.push(item);
                    start = end + 2;
                    end = start;
                  }
                }

                if (_value === opts.delimiter && quoteCount % 2 === 0) {
                  end = numKey;

                  if (end > start) {
                    item = line.substring(start, end);
                    list.push(item);
                    start = end + 1;
                    end = start;
                  } else if (end === start) {
                    list.push("");
                    start = end + 1;
                    end = start;
                  }
                }
              }

              end = length;

              if (end >= start) {
                item = line.substring(start, end);
                list.push(item);
              }

              return list;
            } else {
              return line.split(opts.delimiter);
            }
          }

          if (opts.header) {
            if (opts.header === true) {
              opts.comment = cells(lines); // 第一行是注释

              opts.cast = cells(lines); // 第二行是数据类型

              fields = cells(lines);
            } else if (this.getType(opts.header) === "Array") {
              fields = opts.header;
            }

            constructor = this.buildObjectConstructor(fields, lines[0].split(opts.delimiter), opts.cast);
          } else {
            constructor = this.buildArrayConstructor(fields, lines[0].split(opts.delimiter), opts.cast);
          }

          while (lines.length > 0) {
            var row = cells(lines);

            if (row.length > 1) {
              fn(constructor(row), fields[0]);
            }
          }

          return true;
        },
        safeParse: function safeParse(text, opts) {
          var newline = opts.newline;
          var lines = text.split(newline);

          if (opts.skip > 0) {
            lines.splice(opts.skip);
          }

          return true;
        },
        encodeCells: function encodeCells(line, delimiter, newline) {
          var row = line.slice(0);

          for (var i = 0, len = row.length; i < len; i++) {
            if (row[i].indexOf(this.quoteMark) !== -1) {
              row[i] = row[i].replace(this.quoteRegex, this.doubleQuoteMark);
            }

            if (row[i].indexOf(delimiter) !== -1 || row[i].indexOf(newline) !== -1) {
              row[i] = this.quoteMark + row[i] + this.quoteMark;
            }
          }

          return row.join(delimiter);
        },
        encodeArrays: function encodeArrays(coll, opts, fn) {
          var delimiter = opts.delimiter;
          var newline = opts.newline;

          if (opts.header && this.getType(opts.header) === "Array") {
            fn(this.encodeCells(opts.header, delimiter, newline));
          }

          for (var cur = 0, lim = this.getLimit(opts.limit, coll.length); cur < lim; cur++) {
            fn(this.encodeCells(coll[cur], delimiter, newline));
          }

          return true;
        },
        encodeObjects: function encodeObjects(coll, opts, fn) {
          var delimiter = opts.delimiter;
          var newline = opts.newline;
          var header = [];
          var row = [];

          for (var key in coll[0]) {
            header.push(key);
            row.push(coll[0][key]);
          }

          if (opts.header === true) {
            fn(this.encodeCells(header, delimiter, newline));
          } else if (this.getType(opts.header) === "Array") {
            fn(this.encodeCells(opts.header, delimiter, newline));
          }

          fn(this.encodeCells(row, delimiter, '\n'));

          for (var cur = 1, lim = this.getLimit(opts.limit, coll.length); cur < lim; cur++) {
            row = [];

            for (var i = 0, len = header.length; i < len; i++) {
              row.push(coll[cur][header[i]]);
            }

            fn(this.encodeCells(row, delimiter, newline));
          }

          return true;
        },
        parse: function parse(text, opts, fn) {
          var rows = [];

          if (this.getType(opts) === "Function") {
            fn = opts;
            opts = {};
          } else if (this.getType(fn) !== "Function") {
            fn = rows.push.bind(rows);
          }

          opts = this.assign({}, this.STANDARD_DECODE_OPTS, opts);
          this.opts = opts;

          if (!opts.delimiter || !opts.newline) {
            var limit = Math.min(48, Math.floor(text.length / 20), text.length);
            opts.delimiter = opts.delimiter || this.mostFrequent(text, CELL_DELIMITERS, limit !== 0);
            opts.newline = opts.newline || this.mostFrequent(text, LINE_DELIMITERS, limit !== 0);
          } // modify by jl 由表自行控制不要含有双引号.提高解析效率


          return this.unsafeParse(text, opts, fn) && (rows.length > 0 ? rows : true);
        },
        encode: function encode(coll, opts, fn) {
          var lines = [];

          if (this.getType(opts) === "Function") {
            fn = opts; // opts = {};
          } else if (this.getType(fn) !== "Function") {
            lines = [];
            fn = lines.push.bind(lines);
          }

          opts = this.assign({}, this.STANDARD_ENCODE_OPTS, opts);

          if (opts.skip > 0) {
            coll = coll.slice(opts.skip);
          }

          return (this.getType(coll[0]) === "Array" ? this.encodeArrays : this.encodeObjects)(coll, opts, fn) && (lines.length > 0 ? lines.join(opts.newline) : true);
        }
      };
      var csvManager = exports('csvManager', (_dec = ccclass("csvManager"), _dec(_class = (_temp = /*#__PURE__*/function () {
        function csvManager() {
          _defineProperty(this, "csvTables", {});

          _defineProperty(this, "csvTableForArr", {});

          _defineProperty(this, "tableCast", {});

          _defineProperty(this, "tableComment", {});
        }

        var _proto = csvManager.prototype;

        _proto.addTable = function addTable(tableName, tableContent, force) {
          if (this.csvTables[tableName] && !force) {
            return;
          }

          var tableData = {};
          var tableArr = [];
          var opts = {
            header: true
          };
          CSV.parse(tableContent, opts, function (row, keyName) {
            tableData[row[keyName]] = row;
            tableArr.push(row);
          });
          this.tableCast[tableName] = CSV.opts.cast;
          this.tableComment[tableName] = CSV.opts.comment;
          this.csvTables[tableName] = tableData;
          this.csvTableForArr[tableName] = tableArr; //this.csvTables[tableName].initFromText(tableContent);
        };

        _proto.getTableArr = function getTableArr(tableName) {
          return this.csvTableForArr[tableName];
        };

        _proto.getTable = function getTable(tableName) {
          return this.csvTables[tableName];
        };

        _proto.queryOne = function queryOne(tableName, key, value) {
          var table = this.getTable(tableName);

          if (!table) {
            return null;
          }

          if (key) {
            for (var tbItem in table) {
              if (!table.hasOwnProperty(tbItem)) {
                continue;
              }

              if (table[tbItem][key] === value) {
                return table[tbItem];
              }
            }
          } else {
            return table[value];
          }
        };

        _proto.queryByID = function queryByID(tableName, ID) {
          return this.queryOne(tableName, null, ID);
        };

        _proto.queryAll = function queryAll(tableName, key, value) {
          var table = this.getTable(tableName);

          if (!table || !key) {
            return null;
          }

          var ret = {};

          for (var tbItem in table) {
            if (!table.hasOwnProperty(tbItem)) {
              continue;
            }

            if (table[tbItem][key] === value) {
              ret[tbItem] = table[tbItem];
            }
          }

          return ret;
        };

        _proto.queryIn = function queryIn(tableName, key, values) {
          var table = this.getTable(tableName);

          if (!table || !key) {
            return null;
          }

          var ret = {};
          var keys = Object.keys(table);
          var length = keys.length;

          for (var i = 0; i < length; i++) {
            var item = table[keys[i]];

            if (values.indexOf(item[key]) > -1) {
              ret[keys[i]] = item;
            }
          }

          return ret;
        };

        _proto.queryByCondition = function queryByCondition(tableName, condition) {
          if (condition.constructor !== Object) {
            return null;
          }

          var table = this.getTable(tableName);

          if (!table) {
            return null;
          }

          var ret = {};
          var tableKeys = Object.keys(table);
          var tableKeysLength = tableKeys.length;
          var keys = Object.keys(condition);
          var keysLength = keys.length;

          for (var i = 0; i < tableKeysLength; i++) {
            var item = table[tableKeys[i]];
            var fit = true;

            for (var j = 0; j < keysLength; j++) {
              var key = keys[j];
              fit = fit && condition[key].indexOf(item[key]) > -1 && !ret[tableKeys[i]];
            }

            if (fit) {
              ret[tableKeys[i]] = item;
            }
          }

          return ret;
        };

        return csvManager;
      }(), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/configuration.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, _createClass, cclegacy, _decorator, sys, log;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sys = module.sys;
      log = module.log;
    }],
    execute: function () {
      var _dec, _class, _class2, _temp;

      cclegacy._RF.push({}, "3847d/eUQRHv70w/7Q0rfwv", "configuration", undefined);

      var ccclass = _decorator.ccclass;
      var configuration = exports('configuration', (_dec = ccclass("configuration"), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
        function configuration() {
          _defineProperty(this, "jsonData", null);

          _defineProperty(this, "path", null);

          _defineProperty(this, "KEY_CONFIG", 'CarConfig');

          _defineProperty(this, "markSave", false);

          _defineProperty(this, "saveTimer", -1);
        }

        var _proto = configuration.prototype;

        _proto.start = function start() {
          var _this = this;

          this.jsonData = {
            "userId": ""
          };
          this.path = this.getConfigPath();
          var content;

          if (sys.isNative) {
            var valueObject = jsb.fileUtils.getValueMapFromFile(this.path);
            content = valueObject[this.KEY_CONFIG];
          } else {
            content = sys.localStorage.getItem(this.KEY_CONFIG);
          }

          if (content && content.length) {
            if (content.startsWith('@')) {
              content = content.substring(1);
            }

            try {
              //初始化操作
              var jsonData = JSON.parse(content);
              this.jsonData = jsonData;
            } catch (excepaiton) {}
          } //启动无限定时器，每1秒保存一次数据，而不是无限保存数据


          this.saveTimer = setInterval(function () {
            _this.scheduleSave();
          }, 500);
        };

        _proto.setConfigDataWithoutSave = function setConfigDataWithoutSave(key, value) {
          var account = this.jsonData.userId;

          if (this.jsonData[account]) {
            this.jsonData[account][key] = value;
          } else {
            console.error("no account can not save");
          }
        };

        _proto.setConfigData = function setConfigData(key, value) {
          this.setConfigDataWithoutSave(key, value); // this.save();

          this.markSave = true; //标记为需要存储，避免一直在写入，而是每隔一段时间进行写入
        };

        _proto.getConfigData = function getConfigData(key) {
          var account = this.jsonData.userId;

          if (this.jsonData[account]) {
            var value = this.jsonData[account][key];
            return value ? value : "";
          } else {
            log("no account can not load");
            return "";
          }
        };

        _proto.setGlobalData = function setGlobalData(key, value) {
          this.jsonData[key] = value;
          this.save();
        };

        _proto.getGlobalData = function getGlobalData(key) {
          return this.jsonData[key];
        };

        _proto.setUserId = function setUserId(userId) {
          this.jsonData.userId = userId;

          if (!this.jsonData[userId]) {
            this.jsonData[userId] = {};
          }

          this.save();
        };

        _proto.getUserId = function getUserId() {
          return this.jsonData.userId;
        };

        _proto.scheduleSave = function scheduleSave() {
          if (!this.markSave) {
            return;
          }

          this.save();
        }
        /**
         * 标记为已修改
         */
        ;

        _proto.markModified = function markModified() {
          this.markSave = true;
        };

        _proto.save = function save() {
          // 写入文件
          var str = JSON.stringify(this.jsonData);
          var zipStr = str;
          this.markSave = false;

          if (!sys.isNative) {
            var ls = sys.localStorage;
            ls.setItem(this.KEY_CONFIG, zipStr);
            return;
          }

          var valueObj = {};
          valueObj[this.KEY_CONFIG] = zipStr;
          jsb.fileUtils.writeToFile(valueObj, this.path);
        };

        _proto.getConfigPath = function getConfigPath() {
          var platform = sys.platform;
          var path = ""; // if (platform === sys.OS_WINDOWS) {
          //     path = "src/conf";
          // } else if (platform === sys.OS_LINUX) {
          //     path = "./conf";
          // } else {

          if (sys.isNative) {
            path = jsb.fileUtils.getWritablePath();
            path = path + "conf";
          } else {
            path = "src/conf";
          } // }


          return path;
        };

        _proto.parseUrl = function parseUrl(paramStr) {
          if (!paramStr || typeof paramStr === 'string' && paramStr.length <= 0) {
            // 没有带参数，直接忽略
            return;
          }

          var dictParam = {};

          if (typeof paramStr === 'string') {
            paramStr = paramStr.split('?')[1]; // 去除掉 ？号

            var arrParam = paramStr.split("&");
            arrParam.forEach(function (paramValue) {
              var idxEqual = paramValue.indexOf("=");

              if (idxEqual !== -1) {
                var key = paramValue.substring(0, idxEqual);
                dictParam[key] = paramValue.substring(idxEqual + 1);
              }
            });
          } else {
            dictParam = paramStr;
          }

          if (dictParam.action) {
            this.setGlobalData('urlParams', dictParam);
          } // todo：记录来源，以后用到


          if (dictParam.source) {
            this.setGlobalData('source', dictParam.source);
          }

          if (dictParam.adchannelid) {
            this.setGlobalData('adchannelid', dictParam.adchannelid);
          }
        }
        /**
         * 生成随机账户
         * @returns
         */
        ;

        configuration.generateGuestAccount = function generateGuestAccount() {
          return "" + Date.now() + (0 | 10);
        };

        _createClass(configuration, null, [{
          key: "instance",
          get: function get() {
            if (this._instance) {
              return this._instance;
            }

            this._instance = new configuration();

            this._instance.start();

            return this._instance;
          }
        }]);

        return configuration;
      }(), _defineProperty(_class2, "_instance", void 0), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BotController.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, instantiate, MeshRenderer, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      instantiate = module.instantiate;
      MeshRenderer = module.MeshRenderer;
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

          _defineProperty(_assertThisInitialized(_this), "_totalPlayerArrayList", []);

          _defineProperty(_assertThisInitialized(_this), "playerCamera", void 0);

          _defineProperty(_assertThisInitialized(_this), "_gameController", void 0);

          _this._gameController = gameController;
          return _this;
        }

        var _proto = BotController.prototype;

        _proto.start = function start() {};

        _proto.addBots = function addBots(botPlayer, bot, name, player) {
          var totalBots = this._gameController.gameData.totalBotPresent;
          var easyBot = this._gameController.gameData.easyBot;
          var mediumBot = this._gameController.gameData.mediumBot;
          var hardBot = this._gameController.gameData.hardBot;

          for (var i = 0; i < totalBots; i++) {
            var playerData = {
              "character": this.generateRandomNumber(0, bot.length - 1),
              "bag": this.generateRandomNumber(-1, this._gameController.bagAcceesories.length - 1),
              "headPhone": this.generateRandomNumber(-1, this._gameController.headPhoneAcceesories.length - 1),
              "goggles": this.generateRandomNumber(-1, this._gameController.gogglesAcceesories.length - 1),
              "target": this.generateRandomNumber(0, this._gameController.targetAcceesories.length - 1)
            };
            var bot1 = instantiate(botPlayer);
            bot1.getComponent("Bot")._playerList = this._totalPlayerArrayList;
            bot1.getComponent("Bot").playerCamera = this.playerCamera;
            bot1.getComponent("Bot").addName(name, this._gameController.getWorld(), this._gameController);

            this._gameController.addToWorld(bot1);

            bot1.setPosition(this._gameController.gameData.position[i]);
            bot1.eulerAngles = this._gameController.gameData.angle[i];

            this._totalPlayerArrayList.push(bot1);

            bot1.getChildByName("Penguine_Anim").getChildByName("penguin_body01").getComponent(MeshRenderer).setMaterial(bot[playerData.character].characterMaterial, 0);

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

            this.initialiseAccessoriesData(bot1, playerData);
          }

          this._totalPlayerArrayList.push(player);
        };

        _proto.initialiseAccessoriesData = function initialiseAccessoriesData(bot, playerData) {
          if (playerData.bag == -1) bot.getChildByName("Penguine_Anim").getChildByName("Chest_M Socket").getChildByName("accessories_schoolbag_01").active = false;else {
            bot.getChildByName("Penguine_Anim").getChildByName("Chest_M Socket").getChildByName("accessories_schoolbag_01").getComponent(MeshRenderer).setMaterial(this._gameController.bagAcceesories[playerData.bag].material, 0);
          }
          if (playerData.headPhone == -1) bot.getChildByName("Penguine_Anim").getChildByName("Head_M Socket").getChildByName("accessories_headset01").active = false;else {
            bot.getChildByName("Penguine_Anim").getChildByName("Head_M Socket").getChildByName("accessories_headset01").getComponent(MeshRenderer).setMaterial(this._gameController.headPhoneAcceesories[playerData.headPhone].material, 0);
          }
          if (playerData.goggles == -1) bot.getChildByName("Penguine_Anim").getChildByName("Head_M Socket").getChildByName("accessories_glasses_01").active = false;else {
            bot.getChildByName("Penguine_Anim").getChildByName("Head_M Socket").getChildByName("accessories_glasses_01").getComponent(MeshRenderer).setMaterial(this._gameController.gogglesAcceesories[playerData.goggles].material, 0);
          }
          if (playerData.target == -1) bot.getChildByName("Penguine_Anim").getChildByName("accessories_target_01").active = false;else {
            bot.getChildByName("Penguine_Anim").getChildByName("accessories_target_01").getComponent(MeshRenderer).setMaterial(this._gameController.targetAcceesories[playerData.target].material, 0);
          }
        };

        _proto.generateRandomNumber = function generateRandomNumber(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
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

System.register("chunks:///_virtual/PlayerMovement.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GameConfig.ts', './Helper.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, Vec3, Component, GameConfig, Helper;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      GameConfig = module.GameConfig;
    }, function (module) {
      Helper = module.Helper;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "465f28KiQZEUqz7f7nOJuR+", "PlayerMovement", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PlayerMovement = exports('PlayerMovement', (_dec = ccclass('PlayerMovement'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PlayerMovement, _Component);

        function PlayerMovement() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "sessionId", void 0);

          _defineProperty(_assertThisInitialized(_this), "userId", void 0);

          _defineProperty(_assertThisInitialized(_this), "isSelfUpdateAllowed", false);

          _defineProperty(_assertThisInitialized(_this), "positonStack", []);

          _defineProperty(_assertThisInitialized(_this), "startPos", void 0);

          _defineProperty(_assertThisInitialized(_this), "startAngle", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "startScale", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "endPos", void 0);

          _defineProperty(_assertThisInitialized(_this), "endAngle", void 0);

          _defineProperty(_assertThisInitialized(_this), "endScale", void 0);

          _defineProperty(_assertThisInitialized(_this), "maxFrames", 3);

          _defineProperty(_assertThisInitialized(_this), "frames", _this.maxFrames + 1);

          _defineProperty(_assertThisInitialized(_this), "gameFps", _this.maxFrames * GameConfig.network.dataPerSec);

          _defineProperty(_assertThisInitialized(_this), "lastCalledTime", 0);

          _defineProperty(_assertThisInitialized(_this), "delta", 0);

          _defineProperty(_assertThisInitialized(_this), "fps", 0);

          return _this;
        }

        var _proto = PlayerMovement.prototype;

        _proto.showFps = function showFps() {
          if (!this.lastCalledTime) {
            this.lastCalledTime = Date.now();
            this.fps = 0;
            return;
          }

          this.delta = (Date.now() - this.lastCalledTime) / 1000;
          this.lastCalledTime = Date.now();
          this.fps = 1 / this.delta;
          console.log(Math.round(this.fps));
        };

        _proto.setPropertiesFromServer = function setPropertiesFromServer(sessionId, player) {
          this.sessionId = sessionId;
          this.userId = player.userId;
        };

        _proto.startUpdateFromServer = function startUpdateFromServer() {
          Helper.setFixedInterval(this.updatePositionFromServer.bind(this), 1000 / this.gameFps);
        } // Updating position from server
        ;

        _proto.onPositionUpdate = function onPositionUpdate(plyr) {
          // this.showFps();
          this.positonStack.push({
            pos: new Vec3(plyr.x, this.node.position.y, plyr.z),
            angle: new Vec3(plyr.eulerAngles.x, plyr.eulerAngles.y, plyr.eulerAngles.z),
            scale: new Vec3(plyr._currentScale, plyr._currentScale, plyr._currentScale)
          });

          if (this.positonStack.length > 5) {
            this.positonStack.splice(0, this.positonStack.length - 5);
          }
        };

        _proto.startSelfUpdate = function startSelfUpdate() {
          this.isSelfUpdateAllowed = true;
        };

        _proto.updatePositionFromServer = function updatePositionFromServer(dt) {
          if (this.frames > this.maxFrames) {
            if (this.positonStack.length) {
              this.startPos = new Vec3(this.node.position.x, this.node.position.y, this.node.position.z);
              this.startAngle = new Vec3(this.node.eulerAngles.x, this.node.eulerAngles.y, this.node.eulerAngles.z);
              this.startScale = new Vec3(this.node.scale.x, this.node.scale.y, this.node.scale.z);
              var data = this.positonStack.shift();
              this.endPos = data.pos;
              this.endAngle = data.angle;
              this.endScale = data.scale;
              this.frames = 1;
            }
          }

          if (this.frames <= this.maxFrames) {
            this.node.position = Vec3.lerp(new Vec3(), this.startPos, this.endPos, this.frames / this.maxFrames);
            this.node.eulerAngles = Vec3.lerp(new Vec3(), this.startAngle, this.endAngle, this.frames / this.maxFrames);
            this.node.scale = Vec3.lerp(new Vec3(), this.startScale, this.endScale, this.frames / this.maxFrames);
          }

          ++this.frames;
        };

        return PlayerMovement;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameController.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './mxManager.ts', './constant.ts', './audioManager.ts', './GameConfig.ts', './SocketConnection.ts', './BotController.ts', './commonFun.ts', './PowerUpController.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Material, SpriteFrame, Mesh, Prefab, Node, RichText, Vec2, randomRange, instantiate, Vec3, CapsuleCollider, MeshRenderer, Sprite, ProgressBar, tween, Label, Animation, RigidBody, PhysicsSystem, Component, MxManager, constant, audioManager, GameConfig, SocketConnection, SocketListener, BotController, CommonFun, PowerUpController;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Material = module.Material;
      SpriteFrame = module.SpriteFrame;
      Mesh = module.Mesh;
      Prefab = module.Prefab;
      Node = module.Node;
      RichText = module.RichText;
      Vec2 = module.Vec2;
      randomRange = module.randomRange;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      CapsuleCollider = module.CapsuleCollider;
      MeshRenderer = module.MeshRenderer;
      Sprite = module.Sprite;
      ProgressBar = module.ProgressBar;
      tween = module.tween;
      Label = module.Label;
      Animation = module.Animation;
      RigidBody = module.RigidBody;
      PhysicsSystem = module.PhysicsSystem;
      Component = module.Component;
    }, function (module) {
      MxManager = module.MxManager;
    }, function (module) {
      constant = module.constant;
    }, function (module) {
      audioManager = module.audioManager;
    }, function (module) {
      GameConfig = module.GameConfig;
    }, function (module) {
      SocketConnection = module.SocketConnection;
      SocketListener = module.SocketListener;
    }, function (module) {
      BotController = module.BotController;
    }, function (module) {
      CommonFun = module.CommonFun;
    }, function (module) {
      PowerUpController = module.PowerUpController;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp, _dec3, _dec4, _dec5, _dec6, _class4, _class5, _descriptor2, _descriptor3, _descriptor4, _temp2, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _class7, _class8, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _temp3;

      cclegacy._RF.push({}, "48d51HOjkBIObFppQAdshF3", "GameController", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CharacterGame = exports('CharacterGame', (_dec = ccclass('CharacterGame'), _dec2 = property(Material), _dec(_class = (_class2 = (_temp = function CharacterGame() {
        _initializerDefineProperty(this, "characterMaterial", _descriptor, this);
      }, _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "characterMaterial", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      var CharacterItem = exports('CharacterItem', (_dec3 = ccclass('CharacterItem'), _dec4 = property(SpriteFrame), _dec5 = property(Material), _dec6 = property(Mesh), _dec3(_class4 = (_class5 = (_temp2 = function CharacterItem() {
        _initializerDefineProperty(this, "frame", _descriptor2, this);

        _initializerDefineProperty(this, "material", _descriptor3, this);

        _initializerDefineProperty(this, "mesh", _descriptor4, this);
      }, _temp2), (_descriptor2 = _applyDecoratedDescriptor(_class5.prototype, "frame", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "material", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "mesh", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class5)) || _class4));
      var GameController = exports('GameController', (_dec7 = ccclass('GameController'), _dec8 = property({
        type: CharacterGame
      }), _dec9 = property({
        type: CharacterGame
      }), _dec10 = property({
        type: Prefab
      }), _dec11 = property({
        type: CharacterItem
      }), _dec12 = property({
        type: CharacterItem
      }), _dec13 = property({
        type: CharacterItem
      }), _dec14 = property({
        type: CharacterItem
      }), _dec15 = property({
        type: Node
      }), _dec16 = property({
        type: Prefab
      }), _dec17 = property({
        type: Prefab
      }), _dec18 = property({
        type: Prefab
      }), _dec19 = property({
        type: Prefab
      }), _dec20 = property({
        type: Prefab
      }), _dec21 = property({
        type: Prefab
      }), _dec22 = property({
        type: Prefab
      }), _dec23 = property({
        type: Prefab
      }), _dec24 = property({
        type: Node
      }), _dec25 = property({
        type: Node
      }), _dec26 = property({
        type: Node
      }), _dec27 = property({
        type: Node
      }), _dec28 = property({
        type: Node
      }), _dec29 = property({
        type: Node
      }), _dec30 = property({
        type: RichText
      }), _dec31 = property({
        type: RichText
      }), _dec32 = property({
        type: Node
      }), _dec33 = property({
        type: Node
      }), _dec34 = property({
        type: SpriteFrame
      }), _dec35 = property({
        type: SpriteFrame
      }), _dec36 = property({
        type: SpriteFrame
      }), _dec7(_class7 = (_class8 = (_temp3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameController, _Component);

        function GameController() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "botPrefabList", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "playerPrefabList", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "foodPrefabList", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "bagAcceesories", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "headPhoneAcceesories", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "gogglesAcceesories", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "targetAcceesories", _descriptor11, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "directionalLight", _descriptor12, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "player", _descriptor13, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "bot", _descriptor14, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "gummyBear", _descriptor15, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "PoisionSize", _descriptor16, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "PoisionSpeed", _descriptor17, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "GainSpeed", _descriptor18, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "Sheild", _descriptor19, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "characterHud", _descriptor20, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "playerCamera", _descriptor21, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "TrianglePlatform", _descriptor22, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "CircularPlatform", _descriptor23, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "InfinePlatform", _descriptor24, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "StarPlatform", _descriptor25, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "SquarelPatform", _descriptor26, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "gameTimer", _descriptor27, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "gameScore", _descriptor28, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "gameOver", _descriptor29, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "gameTimerCount", 0);

          _defineProperty(_assertThisInitialized(_this), "platformVertices", []);

          _defineProperty(_assertThisInitialized(_this), "isReady", false);

          _defineProperty(_assertThisInitialized(_this), "playerMap", {});

          _defineProperty(_assertThisInitialized(_this), "playerClass", void 0);

          _defineProperty(_assertThisInitialized(_this), "botController", void 0);

          _defineProperty(_assertThisInitialized(_this), "powerupController", void 0);

          _defineProperty(_assertThisInitialized(_this), "world", void 0);

          _defineProperty(_assertThisInitialized(_this), "gameData", {});

          _defineProperty(_assertThisInitialized(_this), "playerBoardData", []);

          _initializerDefineProperty(_assertThisInitialized(_this), "powerUpProgress", _descriptor30, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "SheildImg", _descriptor31, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "GainSpeedImg", _descriptor32, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "PoisionSpeedImg", _descriptor33, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_currentDuration", void 0);

          _defineProperty(_assertThisInitialized(_this), "platform", null);

          _defineProperty(_assertThisInitialized(_this), "currentTime", null);

          _defineProperty(_assertThisInitialized(_this), "gameUiController", null);

          _defineProperty(_assertThisInitialized(_this), "commonFun", null);

          _defineProperty(_assertThisInitialized(_this), "totalPlayers", 0);

          _defineProperty(_assertThisInitialized(_this), "gameOverList", []);

          return _this;
        }

        var _proto = GameController.prototype;

        _proto.start = function start() {
          this.powerupController = new PowerUpController(this);
          this.gameUiController = this.node.parent.getChildByName('Canvas').getComponent('GameUIController');
          this.gameData = {};

          if (MxManager.instance.isMiloApp) {
            SocketConnection.instance.send({
              command: 'GAME_LOADED',
              data: {
                msg: 'Client game loaded'
              }
            });
            this.registerListeners();
          }

          this.commonFun = new CommonFun();
          this.world = this.node.getParent();

          if (MxManager.instance.isMiloApp) {
            this.powerupController.setEatables([this.gummyBear, this.PoisionSize, this.PoisionSpeed, this.GainSpeed, this.Sheild]);
            this.setGameData(SocketConnection.instance.room.state.gameData);
            this.activatePlatform(this.gameData.currentMap);

            for (var index = 0; index < SocketConnection.instance.onlinePlayers.length; index++) {
              var player = SocketConnection.instance.onlinePlayers[index];
              this.addPlayerToWorld(player, player.sessionId);
            }

            SocketConnection.instance.on(SocketListener.ON_ADD, this.onNewPlayerAdd, this);
            SocketConnection.instance.on(SocketListener.ON_PLAYER_CHANGE, this.onPlayerPosChange, this);
            SocketConnection.instance.on(SocketListener.ON_PLAYER_DEAD, this.playerDeadListener, this);
            SocketConnection.instance.on(SocketListener.ON_BUMP, this.onHitFromServerListener, this);
            SocketConnection.instance.on(SocketListener.ON_POWERUP_BUMP, this.onPowerUpBumpListener, this);
            SocketConnection.instance.on(SocketListener.ON_GAME_OVER, this.onGameOverListener, this);
            SocketConnection.instance.on(SocketListener.ON_CROWN, this.onCrownActiveListener, this);
            SocketConnection.instance.on(SocketListener.ON_SCORE_CHANGE, this.onScoreChangeListener, this);
          } else {
            var currentLevel = parseInt(window.localStorage.getItem("currentLevel"));
            var currentLevelData = null;
            var actualPlayerCount = 1;
            if (currentLevel < GameConfig.gameplay.levels.length) currentLevelData = GameConfig.gameplay.levels[currentLevel];else currentLevelData = GameConfig.gameplay["default"];
            var totalBotPresent = currentLevelData.noOfBotsInGame;
            var easyBot = this.getPercentage(currentLevelData.botsProbabilty.easy * 100, totalBotPresent);
            var mediumBot = this.getPercentage(currentLevelData.botsProbabilty.medium * 100, totalBotPresent);
            var hardBot = this.getPercentage(currentLevelData.botsProbabilty.hard * 100, totalBotPresent);

            if (totalBotPresent > 0) {
              while (easyBot + mediumBot + hardBot != totalBotPresent) {
                if (easyBot > 0) easyBot -= 1;else if (mediumBot > 0) mediumBot -= 1;else if (hardBot > 0) hardBot -= 1;
              }
            } else totalBotPresent = 0;

            var playerPosition = this.DrawCirclePointsForPlayers(totalBotPresent + 1, 10, new Vec2(0, 0));
            var angle = this.getAngleForPlayer(360, totalBotPresent + 1);
            this.totalPlayers = totalBotPresent + actualPlayerCount;
            var ob1 = {
              "currentLevel": currentLevel,
              "levelDetail": currentLevelData,
              "actualPlayerCount": actualPlayerCount,
              "totalBotPresent": totalBotPresent,
              "easyBot": easyBot,
              "mediumBot": mediumBot,
              "hardBot": hardBot,
              "position": playerPosition,
              "angle": angle,
              "currentMap": currentLevelData.map.currentMap
            };
            this.gameData = Object.assign({}, ob1);
            this.generatePlatform();
            this.isReady = true;
            var playerPos = GameConfig.debug.playerPos;
            if (playerPos == -1) playerPos = Math.floor(randomRange(0, totalBotPresent));else if (playerPos >= totalBotPresent + 1) playerPos = 0;
            var gamePos = this.gameData.position;
            var playerPosnew = gamePos.splice(playerPos, 1);
            this.gameData.position = gamePos;
            var pangle = this.gameData.angle;
            var playerAnglenew = pangle.splice(playerPos, 1);
            this.gameData.angle = pangle; // Adding Player

            var _player = instantiate(this.player);

            this.addToWorld(_player);
            this.initialiseAccessoriesData(_player);
            var playerAngle = playerAnglenew[0];

            _player.setPosition(playerPosnew[0]);

            _player.eulerAngles = playerAngle;
            this.playerClass = _player.getComponent('Player');
            this.playerClass.setCamera(this.playerCamera, this, playerAngle);
            this.playerClass.addName(this.characterHud, this.world);
            this.playerClass.isReady = true; //initialising light

            if (GameConfig.debug.camera.angleChange) this.directionalLight.eulerAngles = new Vec3(-35, _player.eulerAngles.y + 180, 0); // Adding bots

            this.generateBot(_player); // Adding Player Collider

            var collider = _player.getComponent(CapsuleCollider);

            collider.on('onCollisionEnter', this.onCollision, this);
          }
        };

        _proto.initialiseAccessoriesData = function initialiseAccessoriesData(player) {
          var strngData;

          if (!MxManager.instance.isMiloApp) {
            strngData = window.localStorage.getItem("playerData");
          } else {
            strngData = player.getComponent('Player').playerData;
          }

          var playerData = JSON.parse(strngData);
          var characterIndex = playerData.character == -1 ? 0 : playerData.character;
          player.getChildByName("Penguine_Anim").getChildByName("penguin_body01").getComponent(MeshRenderer).setMaterial(this.playerPrefabList[characterIndex].characterMaterial, 0);
          if (playerData.bag == -1) player.getChildByName("Penguine_Anim").getChildByName("Chest_M Socket").getChildByName("accessories_schoolbag_01").active = false;else {
            player.getChildByName("Penguine_Anim").getChildByName("Chest_M Socket").getChildByName("accessories_schoolbag_01").getComponent(MeshRenderer).setMaterial(this.bagAcceesories[playerData.bag].material, 0);
          }
          if (playerData.headPhone == -1) player.getChildByName("Penguine_Anim").getChildByName("Head_M Socket").getChildByName("accessories_headset01").active = false;else {
            player.getChildByName("Penguine_Anim").getChildByName("Head_M Socket").getChildByName("accessories_headset01").getComponent(MeshRenderer).setMaterial(this.headPhoneAcceesories[playerData.headPhone].material, 0);
          }
          if (playerData.goggles == -1) player.getChildByName("Penguine_Anim").getChildByName("Head_M Socket").getChildByName("accessories_glasses_01").active = false;else {
            player.getChildByName("Penguine_Anim").getChildByName("Head_M Socket").getChildByName("accessories_glasses_01").getComponent(MeshRenderer).setMaterial(this.gogglesAcceesories[playerData.goggles].material, 0);
          }
          if (playerData.target == -1) player.getChildByName("Penguine_Anim").getChildByName("accessories_target_01").active = false;else {
            player.getChildByName("Penguine_Anim").getChildByName("accessories_target_01").getComponent(MeshRenderer).setMaterial(this.targetAcceesories[playerData.target].material, 0);
          }
        };

        _proto.generateBot = function generateBot(player) {
          this.botController = new BotController(this);
          this.botController.playerCamera = this.playerClass.playerCamera;
          this.botController.addBots(this.bot, this.botPrefabList, this.characterHud, player);
        };

        _proto.setGameData = function setGameData(gameData) {
          // this.gameData.angle = SocketConnection.instance.room.state.gameData.angle;
          // this.gameData.position = SocketConnection.instance.room.state.gameData.position;
          this.gameData.actualPlayerCount = SocketConnection.instance.room.state.gameData.actualPlayerCount;
          this.gameData.currentLevel = SocketConnection.instance.room.state.gameData.currentLevel;
          this.gameData.currentMap = SocketConnection.instance.room.state.gameData.currentMap;
          this.gameData.easyBot = SocketConnection.instance.room.state.gameData.easyBot;
          this.gameData.mediumBot = SocketConnection.instance.room.state.gameData.mediumBot;
          this.gameData.hardBot = SocketConnection.instance.room.state.gameData.hardBot;
          this.gameData.totalBotPresent = SocketConnection.instance.room.state.gameData.totalBotPresent;
        };

        _proto.activatePlatform = function activatePlatform(platformName) {
          switch (platformName) {
            case "triangle":
              {
                var triangleVertices = [new Vec3(22, 0.5, 15), new Vec3(-22, 0.5, 15), new Vec3(0, 0.5, -22)];
                this.platform = this.TrianglePlatform;
                this.platformVertices = triangleVertices;
              }
              break;

            case "circular":
              {
                var circularVertices = this.DrawCirclePoints(10, 25, new Vec2(0, 0));
                this.platform = this.CircularPlatform;
                this.platformVertices = circularVertices;
              }
              break;

            case "infinite":
              {
                var circleOne = this.DrawCirclePoints(10, 17, new Vec2(17, 0));
                var circleTwo = this.DrawCirclePoints(10, 17, new Vec2(-17, 0));
                circleTwo.splice(0, 1);
                var infineVertices = [];

                for (var i = 0; i < circleOne.length; i++) {
                  if (i != 5) infineVertices.push(circleOne[i]);else infineVertices = infineVertices.concat(circleTwo);
                }

                var parts = this.splitInteger(this.gameData.totalBotPresent + 1, 2);
                var playerPosition1 = this.DrawCirclePointsForPlayers(parts[0], 10, new Vec2(17, 0));
                var playerPosition2 = this.DrawCirclePointsForPlayers(parts[1], 10, new Vec2(-17, 0));
                playerPosition1 = playerPosition1.concat(playerPosition2);
                var angle1 = this.getAngleForPlayer(360, parts[0]);
                var angle2 = this.getAngleForPlayer(360, parts[1]);
                angle1 = angle1.concat(angle2);
                this.gameData.position = playerPosition1;
                this.gameData.angle = angle1;
                this.platform = this.InfinePlatform;
                this.platformVertices = infineVertices;
              }
              break;

            case "star":
              {
                var starVertices = [new Vec3(0, 0.5, -23), new Vec3(9, 0.5, -9), new Vec3(25, 0.5, -5), new Vec3(14, 0.5, 7), new Vec3(15, 0.5, 23), new Vec3(0, 0.5, 17), new Vec3(-15, 0.5, 23), new Vec3(-14, 0.5, 7), new Vec3(-25, 0.5, -5), new Vec3(-9, 0.5, -9)];
                this.platform = this.StarPlatform;
                this.platformVertices = starVertices;
              }
              break;

            case "square":
              {
                var squareVertices = [new Vec3(23, 0.5, -23), new Vec3(23, 0.5, 23), new Vec3(-23, 0.5, 23), new Vec3(-23, 0.5, -23)];
                this.platform = this.SquarelPatform;
                this.platformVertices = squareVertices;
              }
              break;
          }

          this.platform.active = true;
        };

        _proto.generatePlatform = function generatePlatform() {
          if (this.gameData.currentMap == "isRandom") {
            var range = Math.floor(randomRange(0, GameConfig.debug.mapList.length - 1));
            this.gameData.currentMap = GameConfig.debug.mapList[range];
          }

          this.activatePlatform(this.gameData.currentMap);
        };

        _proto.splitInteger = function splitInteger(num, parts) {
          var val;
          var retData;
          var mod = num % parts;

          if (mod == 0) {
            val = num / parts;
            retData = Array(parts).fill(val);
          } else {
            val = (num - mod) / parts;
            retData = Array(parts).fill(val);

            for (var i = 0; i < mod; i++) {
              retData[i] = retData[i] + 1;
            }

            retData.reverse();
          }

          return retData;
        };

        _proto.getRangeVal = function getRangeVal(percentage, minPercentage, maxPercentage, minValue, maxValue) {
          var minPercentage = minPercentage;
          var maxPercentage = maxPercentage;
          var minValue = minValue;
          var maxValue = maxValue;
          return (percentage - minPercentage) / (maxPercentage - minPercentage) * (maxValue - minValue) + minValue;
        };

        _proto.startPowerupProgress = function startPowerupProgress(time, powerType) {
          this.powerUpProgress.active = true;
          if (powerType == "sheild") this.powerUpProgress.getChildByName("powerUpImage").getChildByName("image").getComponent(Sprite).spriteFrame = this.SheildImg;
          if (powerType == "GainSpeed") this.powerUpProgress.getChildByName("powerUpImage").getChildByName("image").getComponent(Sprite).spriteFrame = this.GainSpeedImg;
          if (powerType == "PoisionSpeed") this.powerUpProgress.getChildByName("powerUpImage").getChildByName("image").getComponent(Sprite).spriteFrame = this.PoisionSpeedImg;
          this._currentDuration = time;
          var value = this.getRangeVal(time, 0, this._currentDuration, 0, 1);
          this.powerUpProgress.getChildByName("ProgressBar").getComponent(ProgressBar).progress = value;
          var value1 = this.getRangeVal(time - 1, 0, this._currentDuration, 0, 1);
          tween(this.powerUpProgress.getChildByName("ProgressBar").getComponent(ProgressBar)).to(1, {
            progress: value1
          }).start();
          this.powerUpProgress.getChildByName("powerUpImage").getChildByName("counter").getComponent(Label).string = time;
        };

        _proto.updatePowerProgress = function updatePowerProgress(value) {
          var progressValue = this.getRangeVal(value - 1, 0, this._currentDuration, 0, 1);
          tween(this.powerUpProgress.getChildByName("ProgressBar").getComponent(ProgressBar)).to(1, {
            progress: progressValue
          }).start();
          this.powerUpProgress.getChildByName("powerUpImage").getChildByName("counter").getComponent(Label).string = value;
          if (value == 0) this.powerUpProgress.active = false;
        };

        _proto.gameTimerUpdate = function gameTimerUpdate() {
          this.gameTimerCount--;
          this.gameTimer.string = "<color=#000000>" + "<size=56>" + "Time  : " + "</size>" + "<color=#449b9a>" + "<size=56>" + this.gameTimerCount + "</size>";

          if (this.gameTimerCount == this.gameData.levelDetail.time - this.gameData.levelDetail.powerUp.initialiseDuration) {
            this.powerupController.startSpawningNewPowerups();
          }

          if (this.checkIfOnlyOnePlayerRemaining()) return;

          if (!parseInt(window.localStorage.getItem("isStopped"))) {
            this.checkCharacterWithHighScore();
            this.updatePlayerCount();
          }

          if (this.gameTimerCount <= 0) {
            this.onTimerRunsOut();
          }
        };

        _proto.checkIfOnlyOnePlayerRemaining = function checkIfOnlyOnePlayerRemaining() {
          if (this.botController._totalPlayerArrayList.length == 1) {
            var comp = this.gameOver.getComponent("GameOver");
            comp.showWinPopup(this);
            this.onTimerRunsOut();
            return true;
          }

          return false;
        };

        _proto.onTimerRunsOut = function onTimerRunsOut() {
          this.unschedule(this.gameTimerUpdate);
          this.gameOverList = [];
          var boardList = [];
          window.localStorage.setItem("isStopped", "1");

          while (this.botController._totalPlayerArrayList.length > 0) {
            var currentCharacter = this.checkCharacterWithHighScore();
            this.commonFun.removeObjectFromArray(this.botController._totalPlayerArrayList, currentCharacter);
            this.gameOverList.push(currentCharacter);
            var currentScript = currentCharacter.getComponent("Bot") == null ? currentCharacter.getComponent("Player") : currentCharacter.getComponent("Bot");
            var d = new Date();
            var ob1 = {
              "name": currentScript._charName,
              "time": d.getTime(),
              "isSelf": false
            };
            boardList.push(ob1);
          }

          for (var i = boardList.length - 1; i >= 0; i--) {
            this.playerBoardData.push(boardList[i]);
          }

          var comp = this.gameOver.getComponent("GameOver");
          comp.showGameOverPopup(this);
        };

        _proto.checkCharacterWithHighScore = function checkCharacterWithHighScore() {
          var player = this.getPlayerCrown(0); //checkusing sumo size

          var currentBigCharacter = null;
          if (player.length == 1) currentBigCharacter = player[0];else {
            player = this.getPlayerCrown(1); //checkusing sumo pushed

            if (player.length == 1) currentBigCharacter = player[0];else {
              player = this.getPlayerCrown(2); //checkusing sumo score

              if (player.length == 1) currentBigCharacter = player[0];else {
                var no = Math.floor(randomRange(0, player.length - 1));
                currentBigCharacter = player[no];
              }
            }
          }
          if (currentBigCharacter) currentBigCharacter.getChildByName("Penguine_Anim").getChildByName("Head_M Socket").getChildByName("crown_01").active = true;
          return currentBigCharacter;
        };

        _proto.getPlayerCrown = function getPlayerCrown(value) {
          var topData = 0;
          var previousData = 0; //get character with big size

          for (var i = 0; i < this.botController._totalPlayerArrayList.length; i++) {
            var charcter = this.botController._totalPlayerArrayList[i];
            var currentScript = charcter.getComponent("Bot") == null ? charcter.getComponent("Player") : charcter.getComponent("Bot");
            charcter.getChildByName("Penguine_Anim").getChildByName("Head_M Socket").getChildByName("crown_01").active = false;

            if (value == 0) {
              if (currentScript.getCurrentScale() > previousData) {
                previousData = currentScript.getCurrentScale();
                topData = currentScript.getCurrentScale();
              }
            } else if (value == 1) {
              if (currentScript._totalSumoPushed > previousData) {
                previousData = currentScript._totalSumoPushed;
                topData = currentScript._totalSumoPushed;
              }
            } else {
              if (currentScript._score > previousData) {
                previousData = currentScript._score;
                topData = currentScript._score;
              }
            }
          } //get the same character size in a array


          var totalCharacter = [];

          for (var _i = 0; _i < this.botController._totalPlayerArrayList.length; _i++) {
            var _charcter = this.botController._totalPlayerArrayList[_i];

            var _currentScript = _charcter.getComponent("Bot") == null ? _charcter.getComponent("Player") : _charcter.getComponent("Bot");

            if (value == 0) {
              if (_currentScript.getCurrentScale() == topData) totalCharacter.push(_charcter);
            } else if (value == 1) {
              if (_currentScript._totalSumoPushed == topData) totalCharacter.push(_charcter);
            } else {
              if (_currentScript._score == topData) totalCharacter.push(_charcter);
            }
          }

          return totalCharacter;
        };

        _proto.updatePlayerCount = function updatePlayerCount() {
          this.gameUiController.node.getChildByName("Hud").getChildByName("hudbar").getChildByName("totalPlayer").getChildByName("playerCount").getComponent(RichText).string = "<color=#ffffff>" + "<size=60>" + this.botController._totalPlayerArrayList.length + "</size>";
        };

        _proto.onGameStart = function onGameStart() {
          window.localStorage.setItem("isStopped", "0");
          var anim = this.gameUiController.node.getChildByName("Hud").getComponent(Animation);
          anim.play('showHud');
          this.gameScore.string = "<color=#000000>" + "<size=56>" + "Score : " + "</size>" + "<color=#449b9a>" + "<size=56>" + 0 + "</size>";

          if (!MxManager.instance.isMiloApp) {
            // Adding Eatables
            this.powerupController.setEatables([this.gummyBear, this.PoisionSize, this.PoisionSpeed, this.GainSpeed, this.Sheild]);
            this.powerupController.spawnPowerup("GummyBear");
            this.gameTimerCount = this.gameData.levelDetail.time;
            this.gameTimerUpdate();
            this.schedule(this.gameTimerUpdate, 1);
          }

          var d = new Date();
          this.currentTime = d.getTime();
        };

        _proto.addToWorld = function addToWorld(child) {
          this.world.addChild(child);
        };

        _proto.getWorld = function getWorld() {
          return this.world;
        };

        _proto.onCollision = function onCollision(event) {
          var otherCollider = event.otherCollider;

          if (otherCollider.node.name == 'deathPlatform') {
            this.playerClass._onDeathPlatform(event);

            var comp = this.gameOver.getComponent("GameOver");
            comp.showGameOverPopup(this);
            return;
          }

          if (otherCollider.node.name == 'platform') {
            return;
          }

          var playerExist = false;

          for (var i = 0; i < 10; i++) {
            var playerName = 'Player';
            var BotName = 'bot';

            if (i > 0) {
              playerName = playerName + i;
              BotName = BotName + i;
            }

            if (otherCollider.node.name == playerName) {
              playerExist = true;
              break;
            }

            if (otherCollider.node.name == BotName) {
              playerExist = true;
              break;
            }
          }

          if (playerExist) {
            this.playerClass._onCollisionEnter(event);
          }

          if (otherCollider.node.name == 'GummyBear') {
            audioManager.instance.playSound(constant.AUDIO_SOUND.foodEat);
            audioManager.instance.playSound(constant.AUDIO_SOUND.gainPowerUp);
            this.powerupController.removeGummy(otherCollider);
            var gainValue = GameConfig.powerup[otherCollider.node.name].gainPercentage;
            this.playerClass.resize(gainValue, true);
            this.playerClass.updateScore(GameConfig.powerup[otherCollider.node.name].score);
          }

          if (this.playerClass.checkSheildActive() || this.playerClass.checkGainSpeedActive() || this.playerClass.checkPoisionSpeedActive()) return;

          if (otherCollider.node.name == 'PoisionSize') {
            audioManager.instance.playSound(constant.AUDIO_SOUND.foodEat);
            audioManager.instance.playSound(constant.AUDIO_SOUND.countDown);
            this.powerupController.removeGummy(otherCollider);
            var _gainValue = GameConfig.powerup[otherCollider.node.name].lossPercentage;
            this.playerClass.resize(_gainValue, false);
            this.playerClass.updateScore(GameConfig.powerup[otherCollider.node.name].score);
          }

          if (otherCollider.node.name == 'PoisionSpeed') {
            audioManager.instance.playSound(constant.AUDIO_SOUND.foodEat);
            audioManager.instance.playSound(constant.AUDIO_SOUND.slowPowerUp);
            this.powerupController.removeGummy(otherCollider);
            var lossValue = GameConfig.powerup[otherCollider.node.name].lossSpeedPercentage;
            var duration = GameConfig.powerup[otherCollider.node.name].duration;
            this.playerClass.reEvaluateSpeed(lossValue, duration, false);
            this.playerClass.updateScore(GameConfig.powerup[otherCollider.node.name].score);
          }

          if (otherCollider.node.name == 'GainSpeed') {
            audioManager.instance.playSound(constant.AUDIO_SOUND.foodEat);
            audioManager.instance.playSound(constant.AUDIO_SOUND.speedPowerUp);
            this.powerupController.removeGummy(otherCollider);
            var _lossValue = GameConfig.powerup[otherCollider.node.name].increaseSpeedPercentage;
            var _duration = GameConfig.powerup[otherCollider.node.name].duration;
            this.playerClass.reEvaluateSpeed(_lossValue, _duration, true);
            this.playerClass.updateScore(GameConfig.powerup[otherCollider.node.name].score);
          }

          if (otherCollider.node.name == 'Sheild') {
            audioManager.instance.playSound(constant.AUDIO_SOUND.foodEat);
            audioManager.instance.playSound(constant.AUDIO_SOUND.sheildPowerUp);
            this.powerupController.removeGummy(otherCollider);
            var _duration2 = GameConfig.powerup[otherCollider.node.name].duration;
            this.playerClass.startSheild(_duration2);
            this.playerClass.updateScore(GameConfig.powerup[otherCollider.node.name].score);
          }
        };

        _proto.touchCallBack = function touchCallBack(vector, angle) {
          if (this.isReady) this.playerClass.touchCallBack(vector, angle);
        };

        _proto.sliderCallBack = function sliderCallBack(name, value) {
          this.playerClass.sliderCallBack(name, value);
        };

        _proto.touchAngleCallBack = function touchAngleCallBack(vector, angle) {
          if (this.isReady) this.playerClass.touchAngleCallBack(vector, angle);
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

        _proto.DrawCirclePointsForPlayers = function DrawCirclePointsForPlayers(points, radius, center) {
          var pointArray = [];
          var slice = 2 * Math.PI / points;

          for (var i = 0; i < points; i++) {
            var angle = slice * i;
            var newX = Number(center.x + radius * Math.sin(angle));
            var newY = Number(center.y + radius * Math.cos(angle));
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
            p.y = p.y + 180;
            angleData.push(p);
          }

          return angleData;
        };

        _proto.rotateRight = function rotateRight(arr) {
          var last = arr.pop();
          arr.unshift(last);
          return arr;
        };

        _proto.getsplitRange = function getsplitRange(num, parts) {
          var arr = [];
          if (parts <= 0) return arr;
          var n = Math.floor(num / parts);

          for (var i = 0; i < parts; i++) {
            arr.push(n);
          }

          if (arr.reduce(function (a, b) {
            return a + b;
          }, 0) === num) {
            return arr;
          }

          for (var _i2 = 0; _i2 < parts; _i2++) {
            arr[_i2]++;

            if (arr.reduce(function (a, b) {
              return a + b;
            }, 0) === num) {
              return arr;
            }
          }
        } // milo
        ;

        _proto.onNewPlayerAdd = function onNewPlayerAdd() {
          for (var index = 0; index < SocketConnection.instance.onlinePlayers.length; index++) {
            var player = SocketConnection.instance.onlinePlayers[index];

            if (!this.playerMap[player.sessionId]) {
              var sid = this.serarchPlayer(player.userId);
              this.removeFromWorld(this.playerMap[sid].node);
              delete this.playerMap[sid];
              this.addPlayerToWorld(player, player.sessionId);
            }
          }
        };

        _proto.serarchPlayer = function serarchPlayer(userId) {
          var foundId = '';

          for (var _key2 in this.playerMap) {
            if (Object.prototype.hasOwnProperty.call(this.playerMap, _key2)) {
              var element = this.playerMap[_key2];
              if (element.userId == userId) foundId = _key2;
            }
          }

          return foundId;
        };

        _proto.addPlayerToWorld = function addPlayerToWorld(player, sessionId) {
          var plyr = instantiate(this.player);
          plyr.position.set(new Vec3(player.x, player.y, player.z));
          this.addToWorld(plyr);
          plyr.getComponent(RigidBody).setGroup(PhysicsSystem.PhysicsGroup['nonCollidingPlayer']);
          var playerClass = plyr.getComponent('Player');
          playerClass.setPropertiesFromServer(sessionId, player);
          if (player.playerData == undefined || player.playerData == null) debugger;
          playerClass.playerData = player.playerData;
          this.initialiseAccessoriesData(plyr);
          playerClass.node.eulerAngles.set(new Vec3(player.eulerAngles.x, player.eulerAngles.y, player.eulerAngles.z));
          playerClass.setCamera(this.playerCamera, this, new Vec3(player.eulerAngles.x, player.eulerAngles.y, player.eulerAngles.z));
          playerClass.addName(this.characterHud, this.world);
          this.playerMap[sessionId] = playerClass;

          if (SocketConnection.instance.sessionId != sessionId) {
            playerClass.startUpdateFromServer();
          } else {
            this.playerClass = this.playerMap[sessionId];
            playerClass.startSelfUpdate(); // Adding Player Collider

            /*  const collider = this.playerClass.node.getComponent(CapsuleCollider)!;
             collider.on('onCollisionEnter', this.onCollision, this); */

            this.setGameReady();
          }
        };

        _proto.setGameReady = function setGameReady() {
          this.playerClass.isReady = true;
          this.isReady = true;
          this.sendPlayerLocation();
        };

        _proto.sendPlayerLocation = function sendPlayerLocation() {
          if (this.isReady) {
            setInterval(this.sendPlayerUpdate.bind(this), 1000 / GameConfig.network.dataPerSec);
          }
        };

        _proto.sendPlayerUpdate = function sendPlayerUpdate() {
          if (!SocketConnection.instance.isConnected) return;
          var pos = this.playerClass.node.position;
          var angle = this.playerClass.node.eulerAngles;
          SocketConnection.instance.send({
            command: 'PLAYER_POS',
            data: {
              x: pos.x,
              y: pos.y,
              z: pos.z,
              angle: {
                x: angle.x,
                y: angle.y,
                z: angle.z
              }
            }
          });
        };

        _proto.onHitFromServerListener = function onHitFromServerListener(data) {
          var collider = this.playerMap[data.collider];
          this.playerMap[SocketConnection.instance.sessionId].collisionReceivedFromServer(data, collider);
        };

        _proto.onPowerUpBumpListener = function onPowerUpBumpListener(data) {
          this.playerMap[SocketConnection.instance.sessionId].powerUpBumpListener(data);
        };

        _proto.onPlayerPosChange = function onPlayerPosChange(playerContext) {
          if (playerContext.sessionId != SocketConnection.instance.room.sessionId) {
            if (this.playerMap[playerContext.sessionId]) {
              this.playerMap[playerContext.sessionId].onPositionUpdate(playerContext);
            }
          }
        };

        _proto.removeFromWorld = function removeFromWorld(node) {
          this.world.removeChild(node);
        };

        _proto.updateServerGameTime = function updateServerGameTime(value) {
          this.gameTimer.string = "<color=#000000>" + "<size=56>" + "Time  : " + "</size>" + "<color=#449b9a>" + "<size=56>" + value + "</size>";
        };

        _proto.registerListeners = function registerListeners() {
          var _this2 = this;

          SocketConnection.instance.on(SocketListener.READY_GO_COUNT, function (value) {
            _this2.gameUiController.checkReadyGoTimer(value);
          }, this);
          SocketConnection.instance.on(SocketListener.SERVER_GAME_TIME, function (value) {
            _this2.updateServerGameTime(value);
          }, this);
          SocketConnection.instance.on(SocketListener.ON_POWERUP_CHANGE, function (powerup) {
            _this2.powerupController.onChangeListener(powerup);

            console.log('On change received');
          }, this);
        };

        _proto.onGameOverListener = function onGameOverListener(boardList) {
          this.playerMap[SocketConnection.instance.sessionId].setSpeed(0);
          SocketConnection.instance.room.leave();
          var gameOver = this.gameOver.getComponent("GameOver");

          if (boardList[0].sId = SocketConnection.instance.sessionId) {
            gameOver.showWinPopup(this);
          }

          for (var index = 0; index < boardList.length; index++) {
            var element = boardList[index];
            if (element.sId == SocketConnection.instance.sessionId) element.isSelf = true;
          }

          this.playerBoardData = [];

          for (var i = boardList.length - 1; i >= 0; i--) {
            this.playerBoardData.push(boardList[i]);
          }

          gameOver.showGameOverPopupFromServer(this);
          /*  var boardList = [];
           for (let index = 0; index < data.length; index++) {
               const element = data[index];
               var ob1 = {
                   "name": element.name,
                   'time': element.eTime,
                   'isSelf': element.sId == SocketConnection.instance.sessionId
               }
               boardList.push(ob1);
           } */
        };

        _proto.playerDeadListener = function playerDeadListener(player) {
          var ob1 = {
            "name": player.name,
            'time': player.endTime,
            'isSelf': false
          };
          this.playerBoardData.push(ob1);

          if (player.sessionId == SocketConnection.instance.sessionId) {
            ob1.isSelf = true;
            this.playerMap[player.sessionId].setSpeed(0);
            SocketConnection.instance.room.leave();
            var gameOver = this.gameOver.getComponent("GameOver");
            gameOver.showGameOverPopupFromServer(this);
          }
        };

        _proto.getTotalPlayers = function getTotalPlayers() {
          var count = 0;

          for (var _key3 in this.playerMap) {
            if (Object.prototype.hasOwnProperty.call(this.playerMap, _key3)) {
              ++count;
            }
          }

          return count;
        };

        _proto.onCrownActiveListener = function onCrownActiveListener(player) {
          if (this.playerMap[player.sessionId]) {
            var element = this.playerMap[player.sessionId];
            element.node.getChildByName("Penguine_Anim").getChildByName("Head_M Socket").getChildByName("crown_01").active = player.crownActive;
          }
        };

        _proto.onScoreChangeListener = function onScoreChangeListener(player) {
          if (this.playerMap[player.sessionId]) {
            this.playerMap[player.sessionId].updateScore(player.score);
          }
        };

        _proto.playerCountListener = function playerCountListener(count) {
          this.gameUiController.node.getChildByName("Hud").getChildByName("hudbar").getChildByName("totalPlayer").getChildByName("playerCount").getComponent(RichText).string = "<color=#ffffff>" + "<size=60>" + count + "</size>";
        };

        return GameController;
      }(Component), _temp3), (_descriptor5 = _applyDecoratedDescriptor(_class8.prototype, "botPrefabList", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class8.prototype, "playerPrefabList", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class8.prototype, "foodPrefabList", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class8.prototype, "bagAcceesories", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class8.prototype, "headPhoneAcceesories", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class8.prototype, "gogglesAcceesories", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class8.prototype, "targetAcceesories", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class8.prototype, "directionalLight", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class8.prototype, "player", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class8.prototype, "bot", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class8.prototype, "gummyBear", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class8.prototype, "PoisionSize", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class8.prototype, "PoisionSpeed", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class8.prototype, "GainSpeed", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class8.prototype, "Sheild", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class8.prototype, "characterHud", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class8.prototype, "playerCamera", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class8.prototype, "TrianglePlatform", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class8.prototype, "CircularPlatform", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class8.prototype, "InfinePlatform", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class8.prototype, "StarPlatform", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class8.prototype, "SquarelPatform", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class8.prototype, "gameTimer", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class8.prototype, "gameScore", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class8.prototype, "gameOver", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class8.prototype, "powerUpProgress", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor31 = _applyDecoratedDescriptor(_class8.prototype, "SheildImg", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor32 = _applyDecoratedDescriptor(_class8.prototype, "GainSpeedImg", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor33 = _applyDecoratedDescriptor(_class8.prototype, "PoisionSpeedImg", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class8)) || _class7));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/characterSkins.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './constant.ts', './audioManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, SpriteFrame, Sprite, Label, instantiate, Vec3, MeshRenderer, tween, SkeletalAnimationComponent, Component, constant, audioManager;

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
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      Label = module.Label;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      MeshRenderer = module.MeshRenderer;
      tween = module.tween;
      SkeletalAnimationComponent = module.SkeletalAnimationComponent;
      Component = module.Component;
    }, function (module) {
      constant = module.constant;
    }, function (module) {
      audioManager = module.audioManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "4a1da0Kc4RA/7TNtW1pXQcd", "characterSkins", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /**
       * Predefined variables
       * Name = CharacterSkins
       * DateTime = Fri Jan 21 2022 23:12:19 GMT+0530 (India Standard Time)
       * Author = sushant
       * FileBasename = characterSkins.ts
       * FileBasenameNoExtension = characterSkins
       * URL = db://assets/Script/menuScene/shop/characterSkins.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      var CharacterSkins = exports('CharacterSkins', (_dec = ccclass('CharacterSkins'), _dec2 = property({
        type: SpriteFrame
      }), _dec3 = property({
        type: SpriteFrame
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CharacterSkins, _Component);

        function CharacterSkins() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "defaultFrame", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "normalFrame", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "skinName", null);

          _defineProperty(_assertThisInitialized(_this), "count", null);

          _defineProperty(_assertThisInitialized(_this), "isActive", true);

          _defineProperty(_assertThisInitialized(_this), "isEquipped", false);

          _defineProperty(_assertThisInitialized(_this), "shopController", null);

          _defineProperty(_assertThisInitialized(_this), "type", null);

          _defineProperty(_assertThisInitialized(_this), "currentIndex", 0);

          return _this;
        }

        var _proto = CharacterSkins.prototype;

        _proto.start = function start() {};

        _proto.initialiseData = function initialiseData(obj, index, shopLayer) {
          this.shopController = shopLayer;
          var plyData = this.shopController.menuController.playerData;
          this.currentIndex = index;
          this.type = constant.ACCESSORIESTYPE.SKIN;
          var accessoriesSkin = constant.getSkin();

          if (index == accessoriesSkin.length) {
            this.isActive = false;
            this.count = index;
            this.node.getChildByName("image").getComponent(Sprite).spriteFrame = this.defaultFrame;
            this.node.getChildByName("commingSoon").active = true;
            return;
          }

          this.isEquipped = false;
          this.isActive = obj.unlocked;
          this.count = index;
          this.skinName = obj.name;

          if (plyData.character == -1 && this.count == 0) {
            this.isEquipped = true;
          }

          if (!obj.unlocked) this.node.getChildByName("lockIcon").active = true;
          this.node.getChildByName("name").getComponent(Label).string = this.skinName;
          var player = instantiate(this.shopController.menuController.characterNode);
          this.node.getChildByName("Plane").getChildByName("characterNode").addChild(player);
          player.setPosition(new Vec3(0, 0, 0));
          player.getChildByName("Penguine_Anim").getChildByName("Chest_M Socket").getChildByName("accessories_schoolbag_01").active = false;
          player.getChildByName("Penguine_Anim").getChildByName("Head_M Socket").getChildByName("accessories_headset01").active = false;
          player.getChildByName("Penguine_Anim").getChildByName("Head_M Socket").getChildByName("accessories_glasses_01").active = false;
          player.getChildByName("Penguine_Anim").getChildByName("accessories_target_01").active = false; // player.getChildByName("bag").active = false;
          // player.getChildByName("headset").active = false;
          // player.getChildByName("glasses").active = false;
          // player.getChildByName("target").active = false;

          player.getChildByName("Penguine_Anim").getChildByName("penguin_body01").getComponent(MeshRenderer).setMaterial(this.shopController.menuController.character[this.count].characterMaterial, 0); // player.getChildByName("penguin_01").getChildByName("penguin_body01").getComponent(MeshRenderer).setMaterial(this.shopController.menuController.character[this.count].characterMaterial,0);

          if (plyData.character == this.count) this.isEquipped = true;
          this.node.getChildByName("equipped").active = this.isEquipped;
        };

        _proto.onEquipClicked = function onEquipClicked() {
          var _this2 = this;

          if (this.shopController.buttonBlocked) return;

          if (this.isActive) {
            if (this.isEquipped) {
              return;
            } else {
              audioManager.instance.playSound(constant.AUDIO_SOUND.buttonClick);
              this.shopController.buttonBlocked = true;
              this.shopController.updatePlayerAccessoriesData(0, this.count);
              this.node.getChildByName("equipped").active = true;
              this.shopController.node.getChildByName("disableLayer").active = true;
              this.shopController.menuController.sumo.setRotationFromEuler(this.shopController.menuController.sumo.eulerAngles.x, 0, this.shopController.menuController.sumo.eulerAngles.z);
              var currentPosition = new Vec3(this.shopController.menuController.playerNode.position);
              var bumpTween = tween(this.shopController.menuController.playerNode).to(0.35, {
                eulerAngles: new Vec3(0, -90, 0)
              }).to(1, {
                position: new Vec3(currentPosition.x - 600, currentPosition.y, currentPosition.z)
              }).call(function () {
                _this2.updateCharacter(currentPosition);
              }).start();
              var skeletalAnimation = this.shopController.menuController.sumo.getChildByName("Penguine_Anim").getComponent(SkeletalAnimationComponent);
              skeletalAnimation.play('walk');

              for (var i = 0; i < this.shopController.characterSkinArray.length; i++) {
                var skinData = this.shopController.characterSkinArray[i].getComponent("CharacterSkins");

                if (this.shopController.characterSkinArray[i] != this.node) {
                  skinData.isEquipped = false;
                  this.shopController.characterSkinArray[i].getChildByName("equipped").active = false;
                }
              }
            }

            this.isEquipped = !this.isEquipped;
          } else {
            this.shopController.onShowBuyPopup(this);
          }
        };

        _proto.updateCharacter = function updateCharacter(currentPosition) {
          var _this3 = this;

          this.shopController.menuController.sumo.getChildByName("Penguine_Anim").getChildByName("penguin_body01").getComponent(MeshRenderer).setMaterial(this.shopController.menuController.character[this.count].characterMaterial, 0); // this.shopController.menuController.sumo.getChildByName("penguin_01").getChildByName("penguin_body01").getComponent(MeshRenderer).setMaterial(this.shopController.menuController.character[this.count].characterMaterial,0);

          var bumpTween = tween(this.shopController.menuController.playerNode).to(0.01, {
            eulerAngles: new Vec3(0, 90, 0)
          }).to(1.5, {
            position: currentPosition
          }).to(0.25, {
            eulerAngles: new Vec3(0, 0, 0)
          }).call(function () {
            _this3.shopController.buttonBlocked = false;
            _this3.shopController.node.getChildByName("disableLayer").active = false;

            _this3.shopController.menuController.startAnimation();
          }).start();
        };

        return CharacterSkins;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "defaultFrame", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "normalFrame", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
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

System.register("chunks:///_virtual/gameOver.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './constant.ts', './audioManager.ts', './commonFun.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _defineProperty, _assertThisInitialized, _initializerDefineProperty, cclegacy, _decorator, SpriteFrame, Prefab, Vec3, tween, ScrollViewComponent, instantiate, UITransform, director, Sprite, Component, constant, audioManager, CommonFun;

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
      SpriteFrame = module.SpriteFrame;
      Prefab = module.Prefab;
      Vec3 = module.Vec3;
      tween = module.tween;
      ScrollViewComponent = module.ScrollViewComponent;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      director = module.director;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      constant = module.constant;
    }, function (module) {
      audioManager = module.audioManager;
    }, function (module) {
      CommonFun = module.CommonFun;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;

      cclegacy._RF.push({}, "607a6e7tMFM2o0KKgjUTxNF", "gameOver", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /**
       * Predefined variables
       * Name = GameOver
       * DateTime = Mon Jan 24 2022 21:09:01 GMT+0530 (India Standard Time)
       * Author = sushant
       * FileBasename = gameOver.ts
       * FileBasenameNoExtension = gameOver
       * URL = db://assets/Script/gameScene/gameOver/gameOver.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      var GameOver = exports('GameOver', (_dec = ccclass('GameOver'), _dec2 = property({
        type: SpriteFrame
      }), _dec3 = property({
        type: SpriteFrame
      }), _dec4 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameOver, _Component);

        function GameOver() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "gameController", null);

          _defineProperty(_assertThisInitialized(_this), "commonFun", null);

          _initializerDefineProperty(_assertThisInitialized(_this), "goldenTrophy", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "normalTrophy", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "banner", _descriptor3, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "scrollView", null);

          _defineProperty(_assertThisInitialized(_this), "scrollViewContent", null);

          return _this;
        }

        var _proto = GameOver.prototype;

        _proto.start = function start() {
          this.commonFun = new CommonFun();
        };

        _proto.showWinPopup = function showWinPopup(reference) {
          if (this.commonFun == null) this.commonFun = new CommonFun();
          this.gameController = reference;
          this.gameController.playerClass.node.eulerAngles = new Vec3(0, this.gameController.playerClass.playerCamera.eulerAngles.y, 0);
          var cameraNode = this.gameController.playerClass.playerCamera.getChildByName('playerCamera');
          tween(cameraNode).to(1, {
            position: new Vec3(cameraNode.position.x, cameraNode.position.y - 11, cameraNode.position.z),
            eulerAngles: new Vec3(1, cameraNode.eulerAngles.y, cameraNode.eulerAngles.z)
          }).start();
          this.commonFun.setWinStateAnimation(this.gameController.playerClass);
        };

        _proto.showGameOverPopup = function showGameOverPopup(reference) {
          if (this.commonFun == null) this.commonFun = new CommonFun();
          audioManager.instance.playSound(constant.AUDIO_SOUND.win);
          this.scrollView = this.node.getChildByName("leaderBoard").getComponent(ScrollViewComponent);
          this.scrollViewContent = this.scrollView.content;
          this.gameController = reference;
          this.gameController.unscheduleAllCallbacks();
          this.gameController.powerupController.unscheduleAllCallbacks();
          var comp = this.gameController.gameUiController;
          comp.disableTouches();
          this.node.active = true;
          this.scrollViewContent.removeAllChildren();
          var currentList = [];
          var ob1 = {
            "name": "-----",
            "isSelf": false
          };

          for (var _i = 0; _i <= this.gameController.totalPlayers - 1; _i++) {
            currentList.push(ob1);
          }

          var index = 0;

          for (var _i2 = this.gameController.totalPlayers - 1; _i2 >= 0; _i2--) {
            if (index < this.gameController.playerBoardData.length) currentList[_i2] = this.gameController.playerBoardData[index];
            index++;
          }

          for (var i = 0; i < this.gameController.totalPlayers; i++) {
            var banner = instantiate(this.banner);
            this.scrollViewContent.addChild(banner);
            var bannerComponent = banner.getComponent("LeaderBoardBanner");
            bannerComponent.initialiseData(i, (this.gameController.totalPlayers - i) / this.gameController.totalPlayers, currentList[i], this);
          }

          var skin1 = instantiate(this.banner);
          var heiight = skin1.getComponent(UITransform).height * this.gameController.totalPlayers + this.gameController.totalPlayers * 10;
          this.scrollViewContent.getComponent(UITransform).height = heiight; //check my rank 

          for (var _i3 = 0; _i3 < currentList.length; _i3++) {
            var element = currentList[_i3];
            if (element.isSelf) ;
          } // if(currentRank == 1)
          //     this.node.getChildByName("hud").getChildByName("trophy").getComponent(Sprite).spriteFrame = this.goldenTrophy;
          // else
          //     this.node.getChildByName("hud").getChildByName("trophy").getComponent(Sprite).spriteFrame = this.normalTrophy;

        };

        _proto.onHomeClicked = function onHomeClicked() {
          this.gameController.powerupController.unscheduleAllCallbacks();

          while (this.gameController.botController._totalPlayerArrayList.length > 0) {
            var node = this.gameController.botController._totalPlayerArrayList[0];
            this.gameController.getWorld().removeChild(node);
            this.commonFun.removeObjectFromArray(this.gameController.botController._totalPlayerArrayList, node);
          }

          while (this.gameController.gameOverList.length > 0) {
            var node = this.gameController.gameOverList[0];
            this.gameController.getWorld().removeChild(node);
            this.commonFun.removeObjectFromArray(this.gameController.gameOverList, node);
          }

          director.loadScene('MenuScene');
        } // Milo work
        ;

        _proto.showGameOverPopupFromServer = function showGameOverPopupFromServer(reference) {
          if (this.commonFun == null) this.commonFun = new CommonFun();
          audioManager.instance.playSound(constant.AUDIO_SOUND.win);
          this.scrollView = this.node.getChildByName("leaderBoard").getComponent(ScrollViewComponent);
          this.scrollViewContent = this.scrollView.content;
          this.gameController = reference;
          this.gameController.unscheduleAllCallbacks();
          var comp = this.gameController.gameUiController;
          comp.disableTouches();
          this.node.active = true;
          this.scrollViewContent.removeAllChildren();
          var currentList = [];
          var ob1 = {
            "name": "-----",
            "isSelf": false
          };
          this.gameController.totalPlayers = this.gameController.getTotalPlayers();

          for (var _i4 = 0; _i4 <= this.gameController.totalPlayers - 1; _i4++) {
            currentList.push(ob1);
          } // sorting in ascending order


          this.gameController.playerBoardData = this.gameController.playerBoardData.sort(function (first, second) {
            return first.time - second.time;
          });
          var index = 0;

          for (var _i5 = this.gameController.totalPlayers - 1; _i5 >= 0; _i5--) {
            if (index < this.gameController.playerBoardData.length) currentList[_i5] = this.gameController.playerBoardData[index];
            index++;
          }

          for (var i = 0; i < this.gameController.totalPlayers; i++) {
            var banner = instantiate(this.banner);
            this.scrollViewContent.addChild(banner);
            var bannerComponent = banner.getComponent("LeaderBoardBanner");
            bannerComponent.initialiseData(i, (this.gameController.totalPlayers - i) / this.gameController.totalPlayers, currentList[i], this);
          }

          var skin1 = instantiate(this.banner);
          var heiight = skin1.getComponent(UITransform).height * this.gameController.totalPlayers + this.gameController.totalPlayers * 10;
          this.scrollViewContent.getComponent(UITransform).height = heiight; //check my rank 

          var currentRank = 0;

          for (var _i6 = 0; _i6 < currentList.length; _i6++) {
            var element = currentList[_i6];
            if (element.isSelf) currentRank = _i6 + 1;
          }

          if (currentRank == 1) this.node.getChildByName("hud").getChildByName("trophy").getComponent(Sprite).spriteFrame = this.goldenTrophy;else this.node.getChildByName("hud").getChildByName("trophy").getComponent(Sprite).spriteFrame = this.normalTrophy;
        };

        return GameOver;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "goldenTrophy", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "normalTrophy", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "banner", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
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

System.register("chunks:///_virtual/GameUIController.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './mxManager.ts', './constant.ts', './audioManager.ts', './GameConfig.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _defineProperty, _assertThisInitialized, _initializerDefineProperty, cclegacy, _decorator, EventHandler, Node, Slider, SpriteFrame, LabelComponent, Animation, Vec3, macro, director, Sprite, Component, MxManager, constant, audioManager, GameConfig;

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
      Node = module.Node;
      Slider = module.Slider;
      SpriteFrame = module.SpriteFrame;
      LabelComponent = module.LabelComponent;
      Animation = module.Animation;
      Vec3 = module.Vec3;
      macro = module.macro;
      director = module.director;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      MxManager = module.MxManager;
    }, function (module) {
      constant = module.constant;
    }, function (module) {
      audioManager = module.audioManager;
    }, function (module) {
      GameConfig = module.GameConfig;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _temp;

      cclegacy._RF.push({}, "62ee6KEwbpJNKAJo5TmXRgo", "GameUIController", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GameUIController = exports('GameUIController', (_dec = ccclass('GameUIController'), _dec2 = property({
        type: [EventHandler],
        tooltip: 'Touch Drag'
      }), _dec3 = property({
        type: [EventHandler],
        tooltip: 'Slider Drag'
      }), _dec4 = property({
        type: [EventHandler],
        tooltip: 'gameStart'
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Slider
      }), _dec7 = property({
        type: Slider
      }), _dec8 = property({
        type: Slider
      }), _dec9 = property({
        type: Slider
      }), _dec10 = property({
        type: Slider
      }), _dec11 = property({
        type: Slider
      }), _dec12 = property({
        type: Node
      }), _dec13 = property({
        type: Node
      }), _dec14 = property({
        type: SpriteFrame
      }), _dec15 = property({
        type: SpriteFrame
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

          _initializerDefineProperty(_assertThisInitialized(_this), "sliderEventCallBack", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "gameStartEventCallBack", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "cameraDebug", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "Yslider", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "Zslider", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "Xslider", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "RYslider", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "RXslider", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "RZslider", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "initialLayer", _descriptor11, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "soundNode", _descriptor12, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "soundOff", _descriptor13, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "soundOn", _descriptor14, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "animationTimer", 0);

          _defineProperty(_assertThisInitialized(_this), "isPaused", void 0);

          _defineProperty(_assertThisInitialized(_this), "exitPopupShown", false);

          return _this;
        }

        var _proto = GameUIController.prototype;

        _proto.start = function start() {
          this.node.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
          this.node.on(Node.EventType.TOUCH_START, this.touchStart, this);
          this.node.on(Node.EventType.TOUCH_END, this.touchEnded, this);
          window.localStorage.setItem("isStopped", "1");
          this.checkSounds();
          if (GameConfig.debug.camera.isdebugEnabled) this.cameraDebug.active = true;
          this.Yslider.node.on('slide', this.onslide, this);
          this.Yslider.progress = this.getSliderVal(GameConfig.debug.camera.YAxis, 0, 1, 0, 100);
          this.Yslider.node.getChildByName(this.Yslider.node.name).getComponent(LabelComponent).string = GameConfig.debug.camera.YAxis.toString();
          this.sliderEventCallBack.forEach(function (c) {
            return c.emit(["YSlider", GameConfig.debug.camera.YAxis]);
          });
          this.Zslider.node.on('slide', this.onslide, this);
          this.Zslider.progress = this.getSliderVal(GameConfig.debug.camera.ZAxis, 0, 1, 0, 100);
          this.Zslider.node.getChildByName(this.Zslider.node.name).getComponent(LabelComponent).string = GameConfig.debug.camera.ZAxis.toString();
          this.sliderEventCallBack.forEach(function (c) {
            return c.emit(["ZSlider", GameConfig.debug.camera.ZAxis]);
          });
          this.Xslider.node.on('slide', this.onslide, this);
          this.Xslider.progress = this.getSliderVal(GameConfig.debug.camera.XAxis, 0, 1, -100, 100);
          this.Xslider.node.getChildByName(this.Xslider.node.name).getComponent(LabelComponent).string = GameConfig.debug.camera.XAxis.toString();
          this.sliderEventCallBack.forEach(function (c) {
            return c.emit(["XSlider", GameConfig.debug.camera.XAxis]);
          });
          this.RYslider.node.on('slide', this.onslide, this);
          this.RYslider.progress = this.getSliderVal(GameConfig.debug.camera.Yangle, 0, 1, -360, 360);
          this.RYslider.node.getChildByName(this.RYslider.node.name).getComponent(LabelComponent).string = GameConfig.debug.camera.Yangle.toString();
          this.sliderEventCallBack.forEach(function (c) {
            return c.emit(["RYSlider", GameConfig.debug.camera.Yangle]);
          });
          this.RXslider.node.on('slide', this.onslide, this);
          this.RXslider.progress = this.getSliderVal(GameConfig.debug.camera.Xangle, 0, 1, -360, 360);
          this.RXslider.node.getChildByName(this.RXslider.node.name).getComponent(LabelComponent).string = GameConfig.debug.camera.Xangle.toString();
          this.sliderEventCallBack.forEach(function (c) {
            return c.emit(["RXSlider", GameConfig.debug.camera.Xangle]);
          });
          this.RZslider.node.on('slide', this.onslide, this);
          this.RZslider.progress = this.getSliderVal(GameConfig.debug.camera.Zangle, 0, 1, -360, 360);
          this.RZslider.node.getChildByName(this.RZslider.node.name).getComponent(LabelComponent).string = GameConfig.debug.camera.Zangle.toString();
          this.sliderEventCallBack.forEach(function (c) {
            return c.emit(["RZSlider", GameConfig.debug.camera.Zangle]);
          }); //stop all players

          window.localStorage.setItem("isStopped", "1");

          if (!MxManager.instance.isMiloApp) {
            this.animationTimer = 5;
            this.schedule(this.updateStartTimer, 1);
          }
        };

        _proto.checkReadyGoTimer = function checkReadyGoTimer(value) {
          var _this2 = this;

          switch (value) {
            case 4:
              {
                audioManager.instance.playSound(constant.AUDIO_SOUND.countDown);
                this.initialLayer.getChildByName("countDown").getChildByName("3").active = true;
              }
              break;

            case 3:
              {
                this.initialLayer.getChildByName("countDown").getChildByName("3").active = false;
                this.initialLayer.getChildByName("countDown").getChildByName("2").active = true;
              }
              break;

            case 2:
              {
                this.initialLayer.getChildByName("countDown").getChildByName("2").active = false;
                this.initialLayer.getChildByName("countDown").getChildByName("1").active = true;
              }
              break;

            case 1:
              {
                this.initialLayer.getChildByName("countDown").getChildByName("1").active = false;
                this.initialLayer.getChildByName("countDown").getChildByName("go").active = true;
              }
              break;

            case 0:
              {
                this.initialLayer.getChildByName("countDown").getChildByName("go").active = false;
                if (!MxManager.instance.isMiloApp) this.unschedule(this.updateStartTimer);
                var anim = this.initialLayer.getComponent(Animation);
                anim.stop();
                this.initialLayer.active = false;
                this.gameStartEventCallBack.forEach(function (c) {
                  return c.emit([_this2.node]);
                });
              }
              break;
          }
        };

        _proto.updateStartTimer = function updateStartTimer() {
          this.animationTimer--;
          this.checkReadyGoTimer(this.animationTimer);
        };

        _proto.onslide = function onslide(Slider) {
          var val = 0;
          if (Slider.node.name == "YSlider" || Slider.node.name == "ZSlider") val = this.getSliderVal(Slider.progress, 0, 100, 0, 1);else if (Slider.node.name == "XSlider") val = this.getSliderVal(Slider.progress, -100, 100, 0, 1);else if (Slider.node.name == "RZSlider") val = this.getSliderVal(Slider.progress, -360, 360, 0, 1);else if (Slider.node.name == "RXSlider") val = this.getSliderVal(Slider.progress, -360, 360, 0, 1);else val = this.getSliderVal(Slider.progress, -360, 360, 0, 1);
          Slider.node.getChildByName(Slider.node.name).getComponent(LabelComponent).string = val;
          this.sliderEventCallBack.forEach(function (c) {
            return c.emit([Slider.node.name, val]);
          });
        };

        _proto.getSliderVal = function getSliderVal(percentage, minValue, maxValue, minPercentage, maxPercentage) {
          var minPercentage = minPercentage;
          var maxPercentage = maxPercentage;
          var minValue = minValue;
          var maxValue = maxValue;
          return (percentage - minPercentage) / (maxPercentage - minPercentage) * (maxValue - minValue) + minValue;
        };

        _proto.onConnect = function onConnect() {};

        _proto.touchMove = function touchMove(touch) {
          if (this.exitPopupShown) return;
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
          if (this.exitPopupShown) return;
          this.touchEventCallBack.forEach(function (c) {
            return c.emit([new Vec3(0, 0, 0)]);
          });
        };

        _proto.touchStart = function touchStart(touch) {
          if (this.exitPopupShown) return;
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
            director.resume();
          } else {
            director.pause();
          }

          this.isPaused = !this.isPaused;
        };

        _proto.stopBotScreen = function stopBotScreen() {
          if (parseInt(window.localStorage.getItem("isStopped"))) {
            window.localStorage.setItem("isStopped", "0");
          } else {
            window.localStorage.setItem("isStopped", "1");
          }
        };

        _proto.disableTouches = function disableTouches() {
          this.exitPopupShown = true;
        };

        _proto.onCloseClicked = function onCloseClicked() {
          if (this.exitPopupShown) return;
          audioManager.instance.playSound(constant.AUDIO_SOUND.buttonClick);
          this.exitPopupShown = true;
          this.showExitPopup();
        };

        _proto.checkSounds = function checkSounds() {
          if (constant.CheckSoundEnabled()) this.soundNode.getComponent(Sprite).spriteFrame = this.soundOn;else this.soundNode.getComponent(Sprite).spriteFrame = this.soundOff;
        };

        _proto.onSoundClicked = function onSoundClicked() {
          if (audioManager.instance.toggleGameSound()) {
            this.soundNode.getComponent(Sprite).spriteFrame = this.soundOn;
            audioManager.instance.playSound(constant.AUDIO_SOUND.buttonClick);
          } else this.soundNode.getComponent(Sprite).spriteFrame = this.soundOff;
        };

        _proto.showExitPopup = function showExitPopup() {
          var anim = this.node.getChildByName("exitPopup").getComponent(Animation);
          anim.play('showExit');
        };

        _proto.hideExitPopup = function hideExitPopup() {
          audioManager.instance.playSound(constant.AUDIO_SOUND.buttonClick);
          this.exitPopupShown = false;
          var anim = this.node.getChildByName("exitPopup").getComponent(Animation);
          anim.play('hideExit');
        };

        _proto.onExitYesClicked = function onExitYesClicked() {
          audioManager.instance.playSound(constant.AUDIO_SOUND.buttonClick);
        };

        return GameUIController;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "touchEventCallBack", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sliderEventCallBack", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "gameStartEventCallBack", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cameraDebug", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Yslider", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Zslider", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Xslider", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "RYslider", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "RXslider", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "RZslider", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "initialLayer", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "soundNode", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "soundOff", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "soundOn", [_dec15], {
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

System.register("chunks:///_virtual/skin.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './constant.ts', './audioManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, SpriteFrame, Sprite, Label, instantiate, Vec3, MeshRenderer, SkeletalAnimationComponent, Component, constant, audioManager;

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
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      Label = module.Label;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      MeshRenderer = module.MeshRenderer;
      SkeletalAnimationComponent = module.SkeletalAnimationComponent;
      Component = module.Component;
    }, function (module) {
      constant = module.constant;
    }, function (module) {
      audioManager = module.audioManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "6600e5OvP9NWrjDLoyv1uoe", "skin", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /**
       * Predefined variables
       * Name = Skin
       * DateTime = Fri Jan 21 2022 13:29:51 GMT+0530 (India Standard Time)
       * Author = sushant
       * FileBasename = skin.ts
       * FileBasenameNoExtension = skin
       * URL = db://assets/Script/menuScene/shop/skin.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      var Skin = exports('Skin', (_dec = ccclass('Skin'), _dec2 = property({
        type: SpriteFrame
      }), _dec3 = property({
        type: SpriteFrame
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Skin, _Component);

        function Skin() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "defaultFrame", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "accessoriesFrame", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "skinName", null);

          _defineProperty(_assertThisInitialized(_this), "skinType", null);

          _defineProperty(_assertThisInitialized(_this), "count", null);

          _defineProperty(_assertThisInitialized(_this), "isActive", true);

          _defineProperty(_assertThisInitialized(_this), "isEquipped", false);

          _defineProperty(_assertThisInitialized(_this), "shopController", null);

          _defineProperty(_assertThisInitialized(_this), "type", null);

          _defineProperty(_assertThisInitialized(_this), "currentIndex", 0);

          return _this;
        }

        var _proto = Skin.prototype;

        _proto.start = function start() {};

        _proto.initialiseData = function initialiseData(obj, index, shopLayer) {
          this.shopController = shopLayer;
          var plyData = this.shopController.menuController.playerData;
          this.currentIndex = index;
          this.type = constant.ACCESSORIESTYPE.OTHER;
          var accessories = constant.getAccessories();

          if (index == accessories.length) {
            this.isActive = false;
            this.count = index;
            this.node.getChildByName("image").getComponent(Sprite).spriteFrame = this.defaultFrame;
            this.node.getChildByName("commingSoon").active = true;
            return;
          }

          this.isEquipped = false;
          this.isActive = obj.unlocked;
          this.skinType = obj.type;
          this.count = obj.count;
          this.skinName = obj.name;

          if (plyData.bag == -1 && plyData.headPhone == -1 && plyData.goggles == -1 && plyData.target == -1 && obj.type == 0) {
            this.isEquipped = true;
          }

          this.node.getChildByName("name").getComponent(Label).string = this.skinName;

          switch (obj.type) {
            case 0:
              {
                this.node.getChildByName("image").getComponent(Sprite).spriteFrame = this.defaultFrame;
                this.node.getChildByName("disableIcon").active = true;
              }
              break;

            default:
              this.node.getChildByName("image").getComponent(Sprite).spriteFrame = this.accessoriesFrame;
              break;
          }

          if (!obj.unlocked) this.node.getChildByName("lockIcon").active = true;

          switch (obj.type) {
            case 1:
              {
                // this.node.getChildByName("costumes").getComponent(Sprite).spriteFrame = this.shopController.bagAcceesories[obj.count].frame;
                var data = instantiate(this.shopController.bagAcceesories[obj.count].model);
                this.node.getChildByName("Plane").getChildByName("characterNode").addChild(data);
                data.setPosition(new Vec3(0, 0, 0));
                if (plyData.bag == obj.count) this.isEquipped = true;
              }
              break;

            case 2:
              {
                // this.node.getChildByName("costumes").getComponent(Sprite).spriteFrame = this.shopController.headPhoneAcceesories[obj.count].frame;
                var _data = instantiate(this.shopController.headPhoneAcceesories[obj.count].model);

                this.node.getChildByName("Plane").getChildByName("characterNode").addChild(_data);

                _data.setPosition(new Vec3(0, 0, 0));

                if (plyData.headPhone == obj.count) this.isEquipped = true;
              }
              break;

            case 3:
              {
                // this.node.getChildByName("costumes").getComponent(Sprite).spriteFrame = this.shopController.gogglesAcceesories[obj.count].frame;
                var _data2 = instantiate(this.shopController.gogglesAcceesories[obj.count].model);

                this.node.getChildByName("Plane").getChildByName("characterNode").addChild(_data2);

                _data2.setPosition(new Vec3(0, 0, 0));

                if (plyData.goggles == obj.count) this.isEquipped = true;
              }
              break;

            case 4:
              {
                // this.node.getChildByName("costumes").getComponent(Sprite).spriteFrame = this.shopController.targetAcceesories[obj.count].frame;
                var _data3 = instantiate(this.shopController.targetAcceesories[obj.count].model);

                this.node.getChildByName("Plane").getChildByName("characterNode").addChild(_data3);

                _data3.setPosition(new Vec3(0, 0, 0));

                if (plyData.target == obj.count) this.isEquipped = true;
              }
              break;

            default:
              this.node.getChildByName("costumes").getComponent(Sprite).spriteFrame;
              break;
          }

          this.node.getChildByName("equipped").active = this.isEquipped;
        };

        _proto.onEquipClicked = function onEquipClicked() {
          if (this.isActive) {
            audioManager.instance.playSound(constant.AUDIO_SOUND.buttonClick);

            if (this.skinType == 0) {
              this.shopController.menuController.sumo.getChildByName("Penguine_Anim").getChildByName("Chest_M Socket").getChildByName("accessories_schoolbag_01").active = false;
              this.shopController.menuController.sumo.getChildByName("Penguine_Anim").getChildByName("Head_M Socket").getChildByName("accessories_headset01").active = false;
              this.shopController.menuController.sumo.getChildByName("Penguine_Anim").getChildByName("Head_M Socket").getChildByName("accessories_glasses_01").active = false;
              this.shopController.menuController.sumo.getChildByName("Penguine_Anim").getChildByName("accessories_target_01").active = false; // this.shopController.menuController.sumo.getChildByName("bag").getChildByName("accessories_schoolbag_01").active = false;
              // this.shopController.menuController.sumo.getChildByName("headset").getChildByName("accessories_headset01").active = false;
              // this.shopController.menuController.sumo.getChildByName("glasses").getChildByName("accessories_glasses_01").active = false;
              // this.shopController.menuController.sumo.getChildByName("target").getChildByName("accessories_target_01").active = false;

              for (i = 1; i < 5; i++) {
                this.shopController.updatePlayerAccessoriesData(i, -1);
              }

              for (var i = 0; i < this.shopController.accessoriesArray.length; i++) {
                if (this.shopController.accessoriesArray[i] != this.node) {
                  var skinData = this.shopController.accessoriesArray[i].getComponent("Skin");
                  skinData.isEquipped = false;
                  this.shopController.accessoriesArray[i].getChildByName("equipped").active = false;
                }
              }

              return;
            }

            var currentData = null;
            var sumoNode = null;

            switch (this.skinType) {
              case 1:
                {
                  currentData = this.shopController.bagAcceesories[this.count];
                  sumoNode = this.shopController.menuController.sumo.getChildByName("Penguine_Anim").getChildByName("Chest_M Socket").getChildByName("accessories_schoolbag_01"); // sumoNode = this.shopController.menuController.sumo.getChildByName("bag").getChildByName("accessories_schoolbag_01");
                }
                break;

              case 2:
                {
                  currentData = this.shopController.headPhoneAcceesories[this.count];
                  sumoNode = this.shopController.menuController.sumo.getChildByName("Penguine_Anim").getChildByName("Head_M Socket").getChildByName("accessories_headset01"); // sumoNode = this.shopController.menuController.sumo.getChildByName("headset").getChildByName("accessories_headset01");
                }
                break;

              case 3:
                {
                  currentData = this.shopController.gogglesAcceesories[this.count];
                  sumoNode = this.shopController.menuController.sumo.getChildByName("Penguine_Anim").getChildByName("Head_M Socket").getChildByName("accessories_glasses_01"); // sumoNode = this.shopController.menuController.sumo.getChildByName("glasses").getChildByName("accessories_glasses_01");
                }
                break;

              case 4:
                {
                  currentData = this.shopController.targetAcceesories[this.count];
                  sumoNode = this.shopController.menuController.sumo.getChildByName("Penguine_Anim").getChildByName("accessories_target_01"); // sumoNode = this.shopController.menuController.sumo.getChildByName("target").getChildByName("accessories_target_01");
                }
                break;
            }

            if (this.isEquipped) {
              this.shopController.updatePlayerAccessoriesData(this.skinType, -1);
              sumoNode.active = false;
              this.node.getChildByName("equipped").active = false;
            } else {
              this.shopController.updatePlayerAccessoriesData(this.skinType, this.count);
              sumoNode.getComponent(MeshRenderer).setMaterial(currentData.material, 0); // sumoNode.getComponent(MeshRenderer).mesh = currentData.mesh;

              sumoNode.active = true;
              this.node.getChildByName("equipped").active = true;

              for (var i = 0; i < this.shopController.accessoriesArray.length; i++) {
                var skinData = this.shopController.accessoriesArray[i].getComponent("Skin");

                if (skinData.skinType == this.skinType || skinData.skinType == 0) {
                  if (this.shopController.accessoriesArray[i] != this.node) {
                    skinData.isEquipped = false;
                    this.shopController.accessoriesArray[i].getChildByName("equipped").active = false;
                  }
                }
              }

              var skeletalAnimation = this.shopController.menuController.sumo.getChildByName("Penguine_Anim").getComponent(SkeletalAnimationComponent);
              skeletalAnimation.play('push');
              setTimeout(function () {
                skeletalAnimation.play('idle');
              }, skeletalAnimation.getState('push').duration * 1000);
            }

            this.isEquipped = !this.isEquipped;
          } else {
            this.shopController.onShowBuyPopup(this);
          }
        };

        return Skin;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "defaultFrame", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "accessoriesFrame", [_dec3], {
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

System.register("chunks:///_virtual/resourceUtil.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy, _decorator, resources, error, Prefab, instantiate, find, SpriteFrame, isValid, assetManager, Texture2D;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      resources = module.resources;
      error = module.error;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      find = module.find;
      SpriteFrame = module.SpriteFrame;
      isValid = module.isValid;
      assetManager = module.assetManager;
      Texture2D = module.Texture2D;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "72d81EUKidGMoH83ElFuppM", "resourceUtil", undefined);

      var ccclass = _decorator.ccclass;
      var resourceUtil = exports('resourceUtil', (_dec = ccclass("resourceUtil"), _dec(_class = /*#__PURE__*/function () {
        function resourceUtil() {}

        resourceUtil.loadRes = function loadRes(url, type, cb) {
          if (type) {
            resources.load(url, type, function (err, res) {
              if (err) {
                error(err.message || err);

                if (cb) {
                  cb(err, res);
                }

                return;
              }

              if (cb) {
                cb(err, res);
              }
            });
          } else {
            resources.load(url, function (err, res) {
              if (err) {
                error(err.message || err);

                if (cb) {
                  cb(err, res);
                }

                return;
              }

              if (cb) {
                cb(err, res);
              }
            });
          }
        };

        resourceUtil.getMap = function getMap(level, cb) {
          var levelStr = 'map'; //前面补0

          if (level >= 100) {
            levelStr += level;
          } else if (level >= 10) {
            levelStr += '0' + level;
          } else {
            levelStr += '00' + level;
          }

          this.loadRes("gamePackage/map/config/" + levelStr, null, function (err, txtAsset) {
            if (err) {
              cb(err, txtAsset);
              return;
            }

            var txt = txtAsset;
            var content = '';

            if (txt._file) {
              if (window['LZString']) {
                content = window['LZString'].decompressFromEncodedURIComponent(txt._file);
              }

              var objJson = JSON.parse(content);
              cb(null, objJson);
            } else if (txt.text) {
              if (window['LZString']) {
                content = window['LZString'].decompressFromEncodedURIComponent(txt.text);
              }

              var _objJson = JSON.parse(content);

              cb(null, _objJson);
            } else if (txt.json) {
              cb(null, txt.json);
            } else {
              var errObj = new Error('failed');
              cb(errObj, null);
            }
          });
        };

        resourceUtil.getMapObjs = function getMapObjs(type, arrName, progressCb, completeCb) {
          var arrUrls = [];

          for (var idx = 0; idx < arrName.length; idx++) {
            arrUrls.push("gamePackage/map/" + type + "/" + arrName[idx]);
          }

          resources.load(arrUrls, Prefab, progressCb, completeCb);
        };

        resourceUtil.getUIPrefabRes = function getUIPrefabRes(prefabPath, cb) {
          this.loadRes("prefab/ui/" + prefabPath, Prefab, cb);
        };

        resourceUtil.createUI = function createUI(path, cb, parent) {
          this.getUIPrefabRes(path, function (err, prefab) {
            if (err) return;
            var node = instantiate(prefab);
            node.setPosition(0, 0, 0);

            if (!parent) {
              parent = find("Canvas");
            }

            parent.addChild(node);

            if (cb) {
              cb(null, node);
            }
          });
        };

        resourceUtil.getCarsBatch = function getCarsBatch(arrName, progressCb, completeCb) {
          var arrUrls = [];

          for (var idx = 0; idx < arrName.length; idx++) {
            arrUrls.push("prefab/car/car" + arrName[idx]);
          }

          for (var i = 0; i < arrUrls.length; i++) {
            var url = arrUrls[i];

            if (!progressCb) {
              resources.load(url, Prefab, completeCb);
            } else {
              resources.load(url, Prefab, progressCb, completeCb);
            }
          }
        };

        resourceUtil.getUICar = function getUICar(name, cb) {
          this.loadRes("prefab/ui/car/uiCar" + name, Prefab, cb);
        };

        resourceUtil.getCar = function getCar(name, cb) {
          this.loadRes("prefab/car/car" + name, Prefab, cb);
        };

        resourceUtil.setCarIcon = function setCarIcon(name, sprite, isBlack, cb) {
          var path = "gamePackage/texture/car/car" + name;

          if (isBlack) {
            path += 'Black';
          }

          this.setSpriteFrame(path, sprite, cb);
        };

        resourceUtil.getJsonData = function getJsonData(fileName, cb) {
          resources.load("datas/" + fileName, function (err, content) {
            if (err) {
              error(err.message || err);
              return;
            }

            var txt = content;

            if (txt.json) {
              cb(err, txt.json);
            } else {
              var errObj = new Error('failed!!!');
              cb(errObj, null);
            }
          });
        };

        resourceUtil.getData = function getData(fileName, cb) {
          resources.load("datas/" + fileName, function (err, content) {
            if (err) {
              error(err.message || err);
              return;
            }

            var txt = content;
            var text = txt.text;

            if (!text) {
              resources.load(content.nativeUrl, function (err, content) {
                text = content;
                cb(err, text);
              });
              return;
            }

            cb(err, text);
          });
        };

        resourceUtil.setSpriteFrame = function setSpriteFrame(path, sprite, cb) {
          this.loadRes(path + '/spriteFrame', SpriteFrame, function (err, spriteFrame) {
            if (err) {
              console.error('set sprite frame failed! err:', path, err);
              cb(err, spriteFrame);
              return;
            }

            if (sprite && isValid(sprite)) {
              sprite.spriteFrame = spriteFrame;
              cb(null, spriteFrame);
            }
          });
        }
        /**
         * 根据英雄的文件名获取头像
         */
        ;

        resourceUtil.setRemoteImage = function setRemoteImage(url, sprite, cb) {
          if (!url || !url.startsWith('http')) {
            return;
          }

          var suffix = "png";
          assetManager.loadAny([{
            url: url,
            type: suffix
          }], null, function (err, image) {
            if (err) {
              console.error('set avatar failed! err:', url, err);
              cb(err, image);
              return;
            }

            var texture = new Texture2D();
            texture.image = image;
            var spriteFrame = new SpriteFrame();
            spriteFrame.texture = texture;
            cb && cb(null, spriteFrame);
          });
        }
        /**
         * 设置更多游戏的游戏图标
         */
        ;

        resourceUtil.setGameIcon = function setGameIcon(game, sprite, cb) {
          if (game.startsWith('http')) {
            this.setRemoteImage(game, sprite, cb);
          } else {
            this.setSpriteFrame('gamePackage/textures/icons/games/' + game, sprite, cb);
          }
        }
        /**
         * 获取顾客预制体
         *
         * @static
         * @param {string} name
         * @param {Function} cb
         * @memberof resourceUtil
         */
        ;

        resourceUtil.getCustomer = function getCustomer(name, cb) {
          this.loadRes("gamePackage/map/customer/customer" + name, Prefab, cb);
        };

        resourceUtil.setCustomerIcon = function setCustomerIcon(name, sprite, cb) {
          var path = "gamePackage/texture/head/head" + name;
          this.setSpriteFrame(path, sprite, cb);
        };

        resourceUtil.getEffect = function getEffect(name, cb) {
          this.loadRes("prefab/effect/" + name, Prefab, cb);
        };

        return resourceUtil;
      }()) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/oneToMultiListener.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, _decorator, error;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      error = module.error;
    }],
    execute: function () {
      var _dec, _class, _class2, _temp;

      cclegacy._RF.push({}, "74771reetNC7orLrC+JqiYw", "oneToMultiListener", undefined);

      var ccclass = _decorator.ccclass;
      var oneToMultiListener = exports('oneToMultiListener', (_dec = ccclass("oneToMultiListener"), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
        function oneToMultiListener() {}

        oneToMultiListener.on = function on(eventName, handler, target) {
          var objHandler = {
            handler: handler,
            target: target
          };
          var handlerList = this.handlers[eventName];

          if (!handlerList) {
            handlerList = [];
            this.handlers[eventName] = handlerList;
          }

          for (var i = 0; i < handlerList.length; i++) {
            if (!handlerList[i]) {
              handlerList[i] = objHandler;
              return i;
            }
          }

          handlerList.push(objHandler);
          return handlerList.length;
        };

        oneToMultiListener.off = function off(eventName, handler, target) {
          var handlerList = this.handlers[eventName];

          if (!handlerList) {
            return;
          }

          for (var i = 0; i < handlerList.length; i++) {
            var oldObj = handlerList[i];

            if (oldObj.handler === handler && (!target || target === oldObj.target)) {
              handlerList.splice(i, 1);
              break;
            }
          }
        };

        oneToMultiListener.dispatchEvent = function dispatchEvent(eventName) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          } // if (this.supportEvent !== null && !this.supportEvent.hasOwnProperty(eventName)) {
          //     cc.error("please add the event into clientEvent.js");
          //     return;
          // }


          var handlerList = this.handlers[eventName];
          var i;

          for (i = 1; i < arguments.length; i++) {}

          if (!handlerList) {
            return;
          }

          for (i = 0; i < handlerList.length; i++) {
            var objHandler = handlerList[i];

            if (objHandler.handler) {
              objHandler.handler.apply(objHandler.target, args);
            }
          }
        };

        oneToMultiListener.setSupportEventList = function setSupportEventList(arrSupportEvent) {
          if (!(arrSupportEvent instanceof Array)) {
            error("supportEvent was not array");
            return false;
          }

          this.supportEvent = {};

          for (var i in arrSupportEvent) {
            var eventName = arrSupportEvent[i];
            this.supportEvent[eventName] = i;
          }

          return true;
        };

        return oneToMultiListener;
      }(), _defineProperty(_class2, "handlers", void 0), _defineProperty(_class2, "supportEvent", void 0), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/constant.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './mxManager.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, MxManager;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      MxManager = module.MxManager;
    }],
    execute: function () {
      cclegacy._RF.push({}, "75aa7MrT7lGP5RLq0y7jGcP", "constant", undefined);

      var accessories = [{
        "type": 0,
        "unlocked": true,
        "name": "none",
        "count": -1
      }, {
        "type": 1,
        "unlocked": false,
        "name": "Bee Pack",
        "count": 0
      }, {
        "type": 2,
        "unlocked": false,
        "name": "Groover",
        "count": 0
      }, {
        "type": 3,
        "unlocked": false,
        "name": "Shades",
        "count": 0
      }, {
        "type": 4,
        "unlocked": true,
        "name": "Aim Pack",
        "count": 0
      } // {
      //     "type":4,
      //     "unlocked":false,
      //     "name":"bag",
      //     "count":1
      // },
      ];
      var accessoriesSkin = [{
        "unlocked": true,
        "name": "penguin"
      }, {
        "unlocked": false,
        "name": "The Butler"
      }, {
        "unlocked": false,
        "name": "Mr Clean"
      }];
      var accessoriesfoodSkin = [{
        "unlocked": true,
        "name": "Snapper"
      }, {
        "unlocked": false,
        "name": "Shrooms"
      }];
      var constant = exports('constant', /*#__PURE__*/function () {
        function constant() {}

        constant.getAccessories = function getAccessories() {
          return accessories;
        };

        constant.getSkin = function getSkin() {
          return accessoriesSkin;
        };

        constant.getFood = function getFood() {
          return accessoriesfoodSkin;
        };

        constant.updateAccessories = function updateAccessories(type, index) {
          if (type == this.ACCESSORIESTYPE.OTHER) accessories[index].unlocked = true;
          if (type == this.ACCESSORIESTYPE.SKIN) accessoriesSkin[index].unlocked = true;
          if (type == this.ACCESSORIESTYPE.FOOD) accessoriesfoodSkin[index].unlocked = true;
        };

        constant.isMiloEnabled = function isMiloEnabled() {
          return MxManager.instance.isMiloApp;
        };

        constant.setCoinBalance = function setCoinBalance(balance) {
          window.localStorage.setItem("coinBalance", balance);
        };

        constant.getCoinBalance = function getCoinBalance() {
          if (window.localStorage.getItem("coinBalance") == null || window.localStorage.getItem("coinBalance") == undefined) window.localStorage.setItem("coinBalance", "0");
          return parseInt(window.localStorage.getItem("coinBalance"));
        };

        constant.CheckSoundEnabled = function CheckSoundEnabled() {
          if (window.localStorage.getItem("soundEnabled") == null || window.localStorage.getItem("soundEnabled") == undefined) window.localStorage.setItem("soundEnabled", "1");
          return parseInt(window.localStorage.getItem("soundEnabled"));
        };

        constant.ToggleSound = function ToggleSound() {
          if (parseInt(window.localStorage.getItem("soundEnabled"))) window.localStorage.setItem("soundEnabled", "0");else window.localStorage.setItem("soundEnabled", "1");
          return this.CheckSoundEnabled();
        };

        return constant;
      }());

      _defineProperty(constant, "ACCESSORIESTYPE", {
        FOOD: 'food',
        SKIN: 'skin',
        OTHER: 'other'
      });

      _defineProperty(constant, "AUDIO_SOUND", {
        BACKGROUND: 'background',
        //背景音乐
        buttonClick: "click",
        countDown: "countDown",
        gainPowerUp: "gainPowerUp",
        poisonPowerUp: "poisonPowerUp",
        speedPowerUp: "speedPowerUp",
        slowPowerUp: "slowPowerUp",
        sheildPowerUp: "sheildPowerUp",
        myDeath: "myDeath",
        otherDeath: "otherDeath",
        foodEat: "foodEat",
        push: "push",
        win: "win"
      });

      _defineProperty(constant, "TEXT", {
        WATCHAD: 'Watch ad to unlock @ for next Play?',
        BUYCOIN: 'Use # coins to unlock @ for next Play?'
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Bot.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './constant.ts', './audioManager.ts', './GameConfig.ts', './Helper.ts', './commonFun.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, geometry, Vec3, instantiate, SkeletalAnimationComponent, CapsuleCollider, RigidBodyComponent, tween, randomRange, Vec2, Component, constant, audioManager, GameConfig, STATE, CommonFun;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      geometry = module.geometry;
      Vec3 = module.Vec3;
      instantiate = module.instantiate;
      SkeletalAnimationComponent = module.SkeletalAnimationComponent;
      CapsuleCollider = module.CapsuleCollider;
      RigidBodyComponent = module.RigidBodyComponent;
      tween = module.tween;
      randomRange = module.randomRange;
      Vec2 = module.Vec2;
      Component = module.Component;
    }, function (module) {
      constant = module.constant;
    }, function (module) {
      audioManager = module.audioManager;
    }, function (module) {
      GameConfig = module.GameConfig;
    }, function (module) {
      STATE = module.STATE;
    }, function (module) {
      CommonFun = module.CommonFun;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "77e533EezxA/6Pf2Q54j4sW", "Bot", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CELL_TIME = 0.016;
      var MAXDISTANCE = 0;
      var Ray = geometry.Ray;
      var Bot = exports('Bot', (_dec = ccclass('Bot'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Bot, _Component);

        function Bot() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "_charName", "sush");

          _defineProperty(_assertThisInitialized(_this), "_isPlayer", false);

          _defineProperty(_assertThisInitialized(_this), "_now_time", 0);

          _defineProperty(_assertThisInitialized(_this), "_movement", Vec3.ZERO);

          _defineProperty(_assertThisInitialized(_this), "_skeletal", void 0);

          _defineProperty(_assertThisInitialized(_this), "_currentState", STATE.IDLE);

          _defineProperty(_assertThisInitialized(_this), "player", null);

          _defineProperty(_assertThisInitialized(_this), "_playerList", []);

          _defineProperty(_assertThisInitialized(_this), "playerName", void 0);

          _defineProperty(_assertThisInitialized(_this), "playerCamera", void 0);

          _defineProperty(_assertThisInitialized(_this), "_vector", Vec3.ZERO);

          _defineProperty(_assertThisInitialized(_this), "gameController", void 0);

          _defineProperty(_assertThisInitialized(_this), "powerUpController", void 0);

          _defineProperty(_assertThisInitialized(_this), "eatTimeout", null);

          _defineProperty(_assertThisInitialized(_this), "currentDistance", 0);

          _defineProperty(_assertThisInitialized(_this), "_maxWallDistance", 3);

          _defineProperty(_assertThisInitialized(_this), "_currentFollowingNode", null);

          _defineProperty(_assertThisInitialized(_this), "_isPoisionSpeedActive", false);

          _defineProperty(_assertThisInitialized(_this), "_isGainSpeedActive", false);

          _defineProperty(_assertThisInitialized(_this), "_isSheildActive", false);

          _defineProperty(_assertThisInitialized(_this), "_poisionSpeedActiveCount", 0);

          _defineProperty(_assertThisInitialized(_this), "_gainSpeedActiveCount", 0);

          _defineProperty(_assertThisInitialized(_this), "_sheildActiveCount", 0);

          _defineProperty(_assertThisInitialized(_this), "_poisionSpeedActivePercentage", 0);

          _defineProperty(_assertThisInitialized(_this), "_gainSpeedActivePercentage", 0);

          _defineProperty(_assertThisInitialized(_this), "botType", "");

          _defineProperty(_assertThisInitialized(_this), "initialSize", 0);

          _defineProperty(_assertThisInitialized(_this), "maxSize", 0);

          _defineProperty(_assertThisInitialized(_this), "startSpeed", 0);

          _defineProperty(_assertThisInitialized(_this), "endspeed", 0);

          _defineProperty(_assertThisInitialized(_this), "criticalMass", 0);

          _defineProperty(_assertThisInitialized(_this), "maxScale", 0);

          _defineProperty(_assertThisInitialized(_this), "currentScale", 0);

          _defineProperty(_assertThisInitialized(_this), "speed", 0);

          _defineProperty(_assertThisInitialized(_this), "bumpTween", null);

          _defineProperty(_assertThisInitialized(_this), "bumptimeTween", null);

          _defineProperty(_assertThisInitialized(_this), "characterHud", null);

          _defineProperty(_assertThisInitialized(_this), "_collidedOpponentPlayer", null);

          _defineProperty(_assertThisInitialized(_this), "_score", 0);

          _defineProperty(_assertThisInitialized(_this), "_totalSumoPushed", 0);

          _defineProperty(_assertThisInitialized(_this), "commonFun", null);

          _defineProperty(_assertThisInitialized(_this), "_currentAngle", 0);

          return _this;
        }

        var _proto = Bot.prototype;

        _proto.addName = function addName(namePrefab, world, gameController) {
          this.commonFun = new CommonFun();
          this.playerName = instantiate(namePrefab);
          world.addChild(this.playerName);
          this.gameController = gameController;
          this._charName = this.commonFun.getNames();
          this.characterHud = this.playerName.getComponent("CharacterHud");
          this.characterHud.updateNameData(this._charName);
          this.schedule(this.powerUpUpdates, 1);
        };

        _proto.updateNamePos = function updateNamePos() {
          var namePos = this.node.getPosition();
          this.characterHud.updateHudPos(namePos, this.playerCamera);
        };

        _proto.setProperties = function setProperties(botType) {
          this._isPlayer = false;
          this.botType = botType;
          this.initialSize = GameConfig.bot.initialSize;
          this.maxSize = GameConfig.bot.botMaxSize;
          this.startSpeed = GameConfig.bot.botConfig[this.botType].botStartSpeed;
          this.endspeed = GameConfig.bot.botConfig[this.botType].botEndSpeed;
          this.criticalMass = GameConfig.bot.botConfig[this.botType].criticalMass;
          this._skeletal = this.node.getChildByName("Penguine_Anim").getComponent(SkeletalAnimationComponent);
          this.commonFun.setIdleStateAnimation(this);
          this.setCurrentScale(this.initialSize);
          this.node.scale.set(this.currentScale, this.currentScale, this.currentScale);
          this.maxScale = this.maxSize;
          this.updateSpeed();
          this.updateNamePos();
        };

        _proto.updateSpeed = function updateSpeed() {
          this.speed = this.commonFun.getNewModifiedSpeed(this.getCurrentScale(), this);
          this.commonFun.changeWalkAnimationSpeed(this.speed, this);
        };

        _proto.getSpeed = function getSpeed() {
          return this.speed;
        };

        _proto.start = function start() {
          var collider = this.node.getComponent(CapsuleCollider);
          collider.on('onCollisionEnter', this._onCollisionEnter, this);
        };

        _proto.removeAllHud = function removeAllHud() {
          this.gameController.getWorld().removeChild(this.playerName);
        };

        _proto._onCollisionEnter = function _onCollisionEnter(event) {
          var _this2 = this;

          var otherCollider = event.otherCollider;

          if (otherCollider.node.name == 'platform') {
            return;
          }

          if (otherCollider.node.name == 'deathPlatform') {
            audioManager.instance.playSound(constant.AUDIO_SOUND.otherDeath);
            var currentScript = event.selfCollider.node.getComponent("Bot") == null ? event.selfCollider.node.getComponent("Player") : event.selfCollider.node.getComponent("Bot");

            if (this._collidedOpponentPlayer != null) {
              var oppScript = this._collidedOpponentPlayer.getComponent("Bot") == null ? this._collidedOpponentPlayer.getComponent("Player") : this._collidedOpponentPlayer.getComponent("Bot");
              var currentPlayerScale = currentScript.getCurrentScale();
              var opponentPlayerScale = oppScript.getCurrentScale();
              var gainValue = opponentPlayerScale;
              if (currentPlayerScale < opponentPlayerScale) //bigger pushed
                gainValue = this.commonFun.harmonicMean([currentPlayerScale, opponentPlayerScale]) - currentPlayerScale + opponentPlayerScale;else if (currentPlayerScale > opponentPlayerScale) //smaller pushed
                gainValue = this.commonFun.harmonicMean([currentPlayerScale, opponentPlayerScale]);else //same size
                {
                  gainValue = 0;
                  var gainValue1 = GameConfig.powerup["GummyBear"].gainPercentage;
                  oppScript.resize(gainValue1, true);
                }
              if (gainValue > 0) oppScript.increasePlayerScaleOnOpponentDeath(gainValue);
              oppScript.updateScore(GameConfig.commonData.deathScore);
              oppScript._totalSumoPushed++;
            }

            currentScript.removeAllHud();
            this.commonFun.removeObjectFromArray(this._playerList, event.selfCollider.node);
            this.commonFun.removeObjectFromArray(this.gameController.botController._totalPlayerArrayList, event.selfCollider.node);
            this.gameController.getWorld().removeChild(event.selfCollider.node);
            var d = new Date();
            var ob1 = {
              "name": this._charName,
              "time": d.getTime(),
              "isSelf": false
            };
            this.gameController.playerBoardData.push(ob1);
            return;
          }

          for (var i = 0; i < 10; i++) {
            var playerName = 'Player';
            var BotName = 'Bot';

            if (i > 0) {
              playerName = playerName + i;
              BotName = BotName + i;
            }

            if (otherCollider.node.name == playerName) {
              break;
            }

            if (otherCollider.node.name == BotName) {
              break;
            }
          }

          if (otherCollider.node.name == 'Player' || otherCollider.node.name == 'Bot') {
            this.commonFun.setBumpStateAnimation(this);
            this._collidedOpponentPlayer = otherCollider.node;
            this.getComponent(RigidBodyComponent).clearVelocity();
            var pos1 = new Vec3(this.node.getPosition().x - otherCollider.node.getPosition().x, 0, this.node.getPosition().z - otherCollider.node.getPosition().z);

            var _vector = pos1.normalize();

            var bumpValue = this.getBumpValue(otherCollider.node);
            var pos = new Vec3(this.node.getPosition().x + bumpValue * _vector.x, this.node.getPosition().z + bumpValue * _vector.z); // console.log("bumpValueBot     "+bumpValue+"     bumpTime      "+GameConfig.commonData.bumpTime);

            if (this.bumpTween != null) {
              this.bumpTween.stop();
              clearTimeout(this.bumptimeTween);
            }

            this.bumpTween = tween(this.node).to(GameConfig.commonData.bumpTime, {
              position: new Vec3(pos.x, this.node.getPosition().y, pos.y)
            }).start();
            this.bumptimeTween = setTimeout(function () {
              _this2.getComponent(RigidBodyComponent).clearVelocity();

              _this2.commonFun.setWalkStateAnimation(_this2);

              _this2.bumptimeTween = null;
              _this2.bumptimeTween = setTimeout(function () {
                _this2._collidedOpponentPlayer = null;
              }, GameConfig.commonData.bumpTime * 1000);
            }, GameConfig.commonData.bumpTime * 1000);
          }

          if (otherCollider.node.name == 'GummyBear') {
            this.gameController.powerupController.removeGummy(otherCollider);
            var _gainValue = GameConfig.powerup[otherCollider.node.name].gainPercentage;
            this.resize(_gainValue, true);
            this.updateScore(GameConfig.powerup[otherCollider.node.name].score);
          }

          if (this.checkSheildActive() || this.checkGainSpeedActive() || this.checkPoisionSpeedActive()) return;

          if (otherCollider.node.name == 'PoisionSize') {
            this.gameController.powerupController.removeGummy(otherCollider);
            var lossValue = GameConfig.powerup[otherCollider.node.name].lossPercentage;
            this.resize(lossValue, false);
            this.updateScore(GameConfig.powerup[otherCollider.node.name].score);
          }

          if (otherCollider.node.name == 'PoisionSpeed') {
            this.gameController.powerupController.removeGummy(otherCollider);
            var _lossValue = GameConfig.powerup[otherCollider.node.name].lossSpeedPercentage;
            var duration = GameConfig.powerup[otherCollider.node.name].duration;
            this.reEvaluateSpeed(_lossValue, duration, false);
            this.updateScore(GameConfig.powerup[otherCollider.node.name].score);
          }

          if (otherCollider.node.name == 'GainSpeed') {
            this.gameController.powerupController.removeGummy(otherCollider);
            var _lossValue2 = GameConfig.powerup[otherCollider.node.name].increaseSpeedPercentage;
            var _duration = GameConfig.powerup[otherCollider.node.name].duration;
            this.reEvaluateSpeed(_lossValue2, _duration, true);
            this.updateScore(GameConfig.powerup[otherCollider.node.name].score);
          }

          if (otherCollider.node.name == 'Sheild') {
            this.gameController.powerupController.removeGummy(otherCollider);
            var _duration2 = GameConfig.powerup[otherCollider.node.name].duration;
            this.startSheild(_duration2);
            this.updateScore(GameConfig.powerup[otherCollider.node.name].score);
          }
        };

        _proto.updateScore = function updateScore(score) {
          this._score = this._score + score;
          if (this._score < 0) this._score = 0;
        };

        _proto.increasePlayerScaleOnOpponentDeath = function increasePlayerScaleOnOpponentDeath(size) {
          var _this3 = this;

          if (this.getCurrentScale() <= this.maxScale) {
            this.setCurrentScale(this.getCurrentScale() + size);
            if (this.getCurrentScale() > this.maxScale) this.setCurrentScale(this.maxScale);
            tween(this.node.scale).to(1, new Vec3(this.currentScale, this.currentScale, this.currentScale)).call(function () {
              _this3.updateSpeed();
            }).start();
            this.characterHud.tweenPosition(this.getCurrentScale());
          }
        };

        _proto.startSheild = function startSheild(duration) {
          this.commonFun.setPowerGainAnimation(this);
          this._sheildActiveCount += duration;
          this._isSheildActive = true;
        };

        _proto.checkGainSpeedActive = function checkGainSpeedActive() {
          return this._isGainSpeedActive;
        };

        _proto.checkPoisionSpeedActive = function checkPoisionSpeedActive() {
          return this._isPoisionSpeedActive;
        };

        _proto.checkSheildActive = function checkSheildActive() {
          return this._isSheildActive;
        };

        _proto.reEvaluateSpeed = function reEvaluateSpeed(gain, duration, isgain) {
          if (isgain) {
            if (this._isGainSpeedActive) {
              this._isPoisionSpeedActive = false;
              this._isGainSpeedActive = false;
              this._poisionSpeedActiveCount = 0;
              this._gainSpeedActiveCount = 0;
              return;
            }

            this._poisionSpeedActivePercentage = gain;
            this._poisionSpeedActiveCount += duration;
            this._isPoisionSpeedActive = true;
            this.speed = this.speed + this.commonFun.getPercentage(gain * 100, this.speed);
            this.commonFun.setPowerGainAnimation(this);
            this.commonFun.changeWalkAnimationSpeed(this.speed, this);
          } else {
            if (this._isPoisionSpeedActive) {
              this._isPoisionSpeedActive = false;
              this._isGainSpeedActive = false;
              this._poisionSpeedActiveCount = 0;
              this._gainSpeedActiveCount = 0;
              return;
            }

            this._gainSpeedActivePercentage = gain;
            this._gainSpeedActiveCount += duration;
            this._isGainSpeedActive = true;
            this.speed = this.speed - this.commonFun.getPercentage(gain * 100, this.speed);
            this.commonFun.setPowerLoseAnimation(this);
            this.commonFun.changeWalkAnimationSpeed(this.speed, this);
          }
        };

        _proto.powerUpUpdates = function powerUpUpdates() {
          if (this._isPoisionSpeedActive && this._poisionSpeedActiveCount > 0) {
            this._poisionSpeedActiveCount--;

            if (this._poisionSpeedActiveCount <= 0) {
              this._poisionSpeedActiveCount = 0;
              this._isPoisionSpeedActive = false;
            }
          }

          if (this._isGainSpeedActive && this._gainSpeedActiveCount > 0) {
            this._gainSpeedActiveCount--;

            if (this._gainSpeedActiveCount <= 0) {
              this._gainSpeedActiveCount = 0;
              this._isGainSpeedActive = false;
            }
          }

          if (this._isSheildActive && this._sheildActiveCount > 0) {
            this._sheildActiveCount--;

            if (this._sheildActiveCount <= 0) {
              this._sheildActiveCount = 0;
              this._isSheildActive = false;
            }
          }
        };

        _proto.resize = function resize(gain, isgain) {
          var _this4 = this;

          if (isgain) {
            if (this.getCurrentScale() <= this.maxScale) {
              this.setCurrentScale(this.getCurrentScale() + this.commonFun.getPercentage(gain * 100, this.currentScale));
              if (this.getCurrentScale() > this.maxScale) this.setCurrentScale(this.maxScale);
              tween(this.node.scale).to(1, new Vec3(this.currentScale, this.currentScale, this.currentScale)).call(function () {
                _this4.updateSpeed();
              }).start();
              this.characterHud.tweenPosition(this.getCurrentScale());
              this.commonFun.setPowerGainAnimation(this);
            }
          } else {
            if (this.getCurrentScale() > this.initialSize) {
              this.setCurrentScale(this.getCurrentScale() - this.commonFun.getPercentage(gain * 100, this.currentScale));
              if (this.getCurrentScale() < this.initialSize) this.setCurrentScale(this.initialSize);
              tween(this.node.scale).to(1, new Vec3(this.currentScale, this.currentScale, this.currentScale)).call(function () {
                _this4.updateSpeed();
              }).start();
              this.characterHud.tweenPosition(this.getCurrentScale());
              this.commonFun.setPowerLoseAnimation(this);
            }
          }
        };

        _proto.getBumpValue = function getBumpValue(opponentPlayer) {
          var _this5 = this;

          if (this.checkSheildActive()) return 0;
          var oppScript = opponentPlayer.getComponent("Bot") == null ? opponentPlayer.getComponent("Player") : opponentPlayer.getComponent("Bot");
          var updatedSize = this.getCurrentScale();
          updatedSize = this.getBumpSize();

          if (this.getCurrentScale() > this.initialSize) {
            this.setCurrentScale(this.getCurrentScale() - updatedSize);
            if (this.getCurrentScale() < this.initialSize) this.setCurrentScale(this.initialSize);
            tween(this.node.scale).to(1, new Vec3(this.currentScale, this.currentScale, this.currentScale)).call(function () {
              _this5.updateSpeed();
            }).start();
            this.characterHud.tweenPosition(this.getCurrentScale());
          }

          this.updateSpeed();
          var dist = this.getSpeed() * oppScript.getCurrentScale();
          var isBumpedOnBack = this.checkDidBumpedOnBck(opponentPlayer);
          if (isBumpedOnBack) dist = dist * 2;
          var isPlayerBumpedOnOtherBack = this.isPlayerBumpedOnOtherBack(opponentPlayer);

          if (isPlayerBumpedOnOtherBack) {
            dist = this.getSpeed() * oppScript.getCurrentScale();
            dist = dist / 2;
          }

          return dist;
        };

        _proto.getBumpSize = function getBumpSize() {
          return this.commonFun.getPercentage(GameConfig.commonData.bumpSizeDecreasePercentage, this.getCurrentScale());
        };

        _proto.getCurrentScale = function getCurrentScale() {
          return this.currentScale;
        };

        _proto.setCurrentScale = function setCurrentScale(scale) {
          this.currentScale = scale;
        };

        _proto.getMaxScale = function getMaxScale() {
          return this.maxScale;
        };

        _proto.update = function update(deltaTime) {
          // return;
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
            return;
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
              this.commonFun.setWalkStateAnimation(this);
            }
          } else {
            this._movement = Vec3.ZERO;

            if (this._currentState == STATE.WALK) {
              this.commonFun.setIdleStateAnimation(this);
            }
          }

          var currentSpeed = this.getSpeed();

          if (this._isPoisionSpeedActive && this._poisionSpeedActiveCount > 0) {
            currentSpeed = currentSpeed + this.commonFun.getPercentage(this._poisionSpeedActivePercentage * 100, this.speed);
          }

          if (this._isGainSpeedActive && this._gainSpeedActiveCount > 0) {
            currentSpeed = currentSpeed + this.commonFun.getPercentage(this._gainSpeedActivePercentage * 100, this.speed);
          }

          this.node.setPosition(this.node.position.add3f(this._movement.x * currentSpeed * dt, 0, this._movement.z * currentSpeed * dt));
        };

        _proto.checkBotLogic = function checkBotLogic() {
          if (this._currentFollowingNode != null) //is following something
            {
              if (this._currentFollowingNode.getComponent("Bot") || this._currentFollowingNode.getComponent("Player")) //is following other bot or player
                {
                  if (this.getCurrentScale() > this.criticalMass) {
                    var opponentPresent = false;

                    for (var i = 0; i < this._playerList.length; i++) {
                      if (this._playerList[i] == this._currentFollowingNode) opponentPresent = true;
                    }

                    if (opponentPresent) {
                      var oppScript = this._currentFollowingNode.getComponent("Bot") == null ? this._currentFollowingNode.getComponent("Player") : this._currentFollowingNode.getComponent("Bot");
                      var oppCurrentScale = oppScript.getCurrentScale();
                      if (this.getCurrentScale() >= oppCurrentScale) return this._currentFollowingNode.getPosition();
                    }
                  }
                }

              if (this._currentFollowingNode.name == 'GummyBear') {
                if (this._currentFollowingNode.active) return this._currentFollowingNode.getPosition();
              }
            }

          var gummyBear = this.checkPowerUpDistance('GummyBear');
          var poisionSize = this.checkPowerUpDistance('PoisionSize');
          var poisionSpeed = this.checkPowerUpDistance('PoisionSpeed');
          var gainSpeed = this.checkPowerUpDistance('GainSpeed'); //after critical mass

          var sheild = this.checkPowerUpDistance('Sheild'); //dont take other power up

          var opponent = this.checkOtherPlayerPosition(); //easy medium hard bot 

          if (sheild != null && this.botType == "hard") {
            this._currentFollowingNode = sheild;
            return sheild.getPosition();
          }

          if (gummyBear != null && opponent == null) {
            this._currentFollowingNode = gummyBear;
            return gummyBear.getPosition();
          } else if (gummyBear == null && opponent != null && this.botType != "easy") {
            this._currentFollowingNode = opponent;
            return opponent.getPosition();
          } else if (gainSpeed != null && this.getCurrentScale() >= this.criticalMass && this.botType != "easy") {
            this._currentFollowingNode = gainSpeed;
            return gainSpeed.getPosition();
          } else if (gummyBear != null && opponent != null && this.botType != "easy") {
            var gummyDistance = this.getDistance(gummyBear.getPosition().x, gummyBear.getPosition().z, this.node.getPosition().x, this.node.getPosition().z);
            var opponentDistance = this.getDistance(opponent.getPosition().x, opponent.getPosition().z, this.node.getPosition().x, this.node.getPosition().z);

            var _oppScript = opponent.getComponent("Bot") == null ? opponent.getComponent("Player") : opponent.getComponent("Bot");

            if (this.getCurrentScale() <= this.criticalMass) {
              this._currentFollowingNode = gummyBear;
              return gummyBear.getPosition();
            } else if (this.getCurrentScale() >= this.maxScale) {
              this._currentFollowingNode = opponent;
              return opponent.getPosition();
            } else {
              if (_oppScript.getCurrentScale() >= this.getCurrentScale()) {
                if (this.getCurrentScale() < this.getMaxScale()) {
                  this._currentFollowingNode = gummyBear;
                  return gummyBear.getPosition();
                } else {
                  var range = randomRange(0, 10);

                  if (range < 5) {
                    this._currentFollowingNode = gummyBear;
                    return gummyBear.getPosition();
                  } else {
                    this._currentFollowingNode = opponent;
                    return opponent.getPosition();
                  }
                }
              } else {
                this._currentFollowingNode = gummyDistance > opponentDistance ? opponent : gummyBear;
                return this._currentFollowingNode.getPosition();
              }
            }
          } else {
            this._currentFollowingNode = null;
            this.check();
            return this._vector;
          }
        };

        _proto.checkPowerUpDistance = function checkPowerUpDistance(powerUpName) {
          if (this.gameController.powerupController == undefined) return null;
          var powerupArrayList = this.gameController.powerupController.getPowerUpArrayList();
          var shortetDistance = 0;
          var index = -1;
          var initalData = true;

          for (var i = 0; i < powerupArrayList.length; i++) {
            if (powerupArrayList[i].active && powerupArrayList[i].name == powerUpName) {
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

            if (this.getCurrentScale() >= oppCurrentScale) {
              beatableOpponentArray.push(opponentArray[_i]);
            }
          } //shuffle array


          beatableOpponentArray = this.commonFun.shuffleArr(beatableOpponentArray);
          beatableOpponentArray.sort(function (x, y) {
            var oppScript1 = x.getComponent("Bot") == null ? x.getComponent("Player") : x.getComponent("Bot");
            var oppCurrentScale1 = oppScript1.getCurrentScale();
            var oppScript2 = y.getComponent("Bot") == null ? y.getComponent("Player") : y.getComponent("Bot");
            var oppCurrentScale2 = oppScript2.getCurrentScale();
            return oppCurrentScale1 - oppCurrentScale2;
          });
          var shortestDistance = 999999;
          var index = -1;

          if (Math.floor(Math.random() * 10) > 5) {
            if (beatableOpponentArray.length > 0) index = 0;
          } else {
            for (var _i2 = 0; _i2 < beatableOpponentArray.length; _i2++) {
              var _oppScript2 = beatableOpponentArray[_i2].getComponent("Bot") == null ? beatableOpponentArray[_i2].getComponent("Player") : beatableOpponentArray[_i2].getComponent("Bot");

              var distance = this.getDistance(beatableOpponentArray[_i2].getPosition().x, beatableOpponentArray[_i2].getPosition().z, this.node.getPosition().x, this.node.getPosition().z);

              if (distance < shortestDistance) {
                shortestDistance = distance;
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
          var radius = 500;
          var center = new Vec2(this.node.getPosition().x, this.node.getPosition().z);
          var range = Math.floor(randomRange(0, 360)); // this._currentAngle = this._currentAngle + 1;
          // range = this._currentAngle;

          var currentAngle = Math.ceil(range);
          currentAngle = 90 - currentAngle;
          var newangle = currentAngle * (Math.PI / 180);
          var newX = Number(center.x + radius * Math.cos(newangle));
          var newY = Number(center.y + radius * Math.sin(newangle));
          var p = new Vec2(newX, newY);
          this.sendRayCast(new Vec3(p.x, 1, p.y));
        };

        _proto.check = function check() {
          var k = this.getSemiCirclePoint(0, 500, new Vec2(this.node.getPosition().x, this.node.getPosition().z), 30, this.node.eulerAngles.y);

          for (var i = 0; i < k.length; i++) {
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
          var randomPointsCalled = false;
          var loopWorked = false;

          for (var i = 0; i < this.gameController.platformVertices.length; i++) {
            var p1x = this.gameController.platformVertices[i].x;
            var p1y = this.gameController.platformVertices[i].z;
            var p2x = this.gameController.platformVertices[i + 1 < this.gameController.platformVertices.length ? i + 1 : 0].x;
            var p2y = this.gameController.platformVertices[i + 1 < this.gameController.platformVertices.length ? i + 1 : 0].z;
            var data = this.calculateIntersection(p1x, p1y, p2x, p2y, this.node.getPosition().x, this.node.getPosition().z, pos.x, pos.z);

            if (data.isIntersected) {
              loopWorked = true;
              var posX = this.commonFun.getIntValue(this.node.getPosition().x);
              var posZ = this.commonFun.getIntValue(this.node.getPosition().z);
              if (p1x == posX || p2x == posX || p1y == posZ || p2y == posZ) ;else {
                this.currentDistance = this.getDistance(this.node.getPosition().x, this.node.getPosition().z, data.x, data.y);

                if (this.currentDistance < this._maxWallDistance) {
                  randomPointsCalled = true;
                  this._vector = null;
                  this.checkRandomPoints();
                  return;
                }

                break;
              }
            }
          }

          if (!loopWorked) {
            randomPointsCalled = true;
            this.checkRandomPoints();
            return;
          }

          if (!randomPointsCalled) {
            this._vector = pos;
            this._currentAngle = 0;
            return;
          }
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

        _proto.isPlayerBumpedOnOtherBack = function isPlayerBumpedOnOtherBack(otherCollider) {
          var p2 = new Vec2(this.node.getPosition().x, this.node.getPosition().z); // always will be the current node

          var p1 = new Vec2(otherCollider.getPosition().x, otherCollider.getPosition().z);
          var left = Math.round(otherCollider.eulerAngles.y) + 100;

          if (left > 180) {
            left -= 360;
          }

          var right = Math.round(otherCollider.eulerAngles.y) - 100;

          if (right < -180) {
            right += 360;
          }

          var hitAngle = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
          hitAngle = this.commonFun.findGameAngle(hitAngle);

          if (this.commonFun.angleBetweenAngle(hitAngle, left, right)) {
            return true;
          }

          return false;
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
          hitAngle = this.commonFun.findGameAngle(hitAngle);

          if (this.commonFun.angleBetweenAngle(hitAngle, left, right)) {
            return true;
          }

          return false;
        };

        _proto.calculateIntersection = function calculateIntersection(a, b, c, d, p, q, r, s) {
          var det, gamma, lambda, x, y;
          det = (c - a) * (s - q) - (r - p) * (d - b);

          if (det === 0) {
            return {
              isIntersected: false,
              x: 0,
              y: 0
            };
          } else {
            lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
            gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
            x = a + lambda * (c - a);
            y = b + lambda * (d - b);
            return {
              isIntersected: 0 < lambda && lambda < 1 && 0 < gamma && gamma < 1,
              x: x,
              y: y
            };
          }
        };

        return Bot;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Helper.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy, _decorator;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "870b0Aa1mBDrY0a9De020ZU", "Helper", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Helper = exports('Helper', (_dec = ccclass('Helper'), _dec(_class = /*#__PURE__*/function () {
        function Helper() {}

        Helper.setFixedInterval = function setFixedInterval(fn, ms) {
          var last = new Date().getTime();
          var fixed = last + ms;
          var intervalatedFun;

          intervalatedFun = function () {
            var now = new Date().getTime();
            var delta = now - last;
            fn(delta);
            last = now;
            fixed += ms;
            now = new Date().getTime();
            var next = fixed - now;

            if (next <= 0) {
              var skipIntervals = 1 + parseInt(String((now - fixed) / ms));
              next = fixed + skipIntervals * ms - now;
            }

            clear_id = setTimeout(intervalatedFun, next);
          }.bind(this);

          var clear_id = setTimeout(intervalatedFun, fixed - new Date().getTime());
          return function cancelFixedInterval() {
            clearTimeout(clear_id);
          };
        };

        return Helper;
      }()) || _class));
      var STATE = exports('STATE', {
        IDLE: 0,
        WALK: 1,
        BUMP: 2,
        EAT: 3,
        WIN: 4
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/leaderBoardBanner.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './commonFun.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, SpriteFrame, Node, Label, Sprite, tween, Component, CommonFun;

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
      SpriteFrame = module.SpriteFrame;
      Node = module.Node;
      Label = module.Label;
      Sprite = module.Sprite;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      CommonFun = module.CommonFun;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;

      cclegacy._RF.push({}, "882e8b6yNlDmpl3SZwb5Qhi", "leaderBoardBanner", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var LeaderBoardBanner = exports('LeaderBoardBanner', (_dec = ccclass('LeaderBoardBanner'), _dec2 = property({
        type: SpriteFrame
      }), _dec3 = property({
        type: SpriteFrame
      }), _dec4 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LeaderBoardBanner, _Component);

        function LeaderBoardBanner() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "panel", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "trophy", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "bannr", _descriptor3, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "commonFun", null);

          _defineProperty(_assertThisInitialized(_this), "tween", null);

          return _this;
        }

        var _proto = LeaderBoardBanner.prototype;

        _proto.start = function start() {// [3]
        };

        _proto.initialiseData = function initialiseData(index, currentTimer, currentList, gameOver) {
          this.commonFun = new CommonFun();
          this.bannr.getChildByName("rankText").getComponent(Label).string = (index + 1).toString();
          this.bannr.getChildByName("nameText").getComponent(Label).string = currentList.name;

          switch (index) {
            case 0:
              {
                this.node.getComponent(Sprite).spriteFrame = this.panel[index];
                this.bannr.getChildByName("medal").getComponent(Sprite).spriteFrame = this.trophy[index];
              }
              break;

            case 1:
              {
                this.node.getComponent(Sprite).spriteFrame = this.panel[index];
                this.bannr.getChildByName("medal").getComponent(Sprite).spriteFrame = this.trophy[index];
              }
              break;

            case 2:
              {
                this.node.getComponent(Sprite).spriteFrame = this.panel[index];
                this.bannr.getChildByName("medal").getComponent(Sprite).spriteFrame = this.trophy[index];
              }
              break;
          }

          if (currentList.name == "-----") {
            this.bannr.getChildByName("timer").getComponent(Label).string = "-:--:---";
          } else {
            var timeDiff = currentList.time - gameOver.gameController.currentTime;
            var timer = this.commonFun.millisecondsToTime(timeDiff);
            this.bannr.getChildByName("timer").getComponent(Label).string = timer;
          }

          this.deactivateBanner(currentTimer);
        };

        _proto.deactivateBanner = function deactivateBanner(currentTimer) {
          var _this2 = this;

          this.bannr.active = false;
          this.tween = tween(this.node).delay(currentTimer).call(function () {
            _this2.activateBanner();
          }).start();
        };

        _proto.activateBanner = function activateBanner() {
          this.bannr.active = true;
        };

        return LeaderBoardBanner;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "panel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "trophy", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bannr", [_dec4], {
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

System.register("chunks:///_virtual/audioManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './constant.ts', './resourceUtil.ts'], function (exports) {
  'use strict';

  var _createClass, _defineProperty, cclegacy, assert, AudioClip, warn, clamp01, constant, resourceUtil;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      assert = module.assert;
      AudioClip = module.AudioClip;
      warn = module.warn;
      clamp01 = module.clamp01;
    }, function (module) {
      constant = module.constant;
    }, function (module) {
      resourceUtil = module.resourceUtil;
    }],
    execute: function () {
      cclegacy._RF.push({}, "884daUfIQRNRq4ZxJzJ5kOx", "audioManager", undefined);

      var audioManager = exports('audioManager', /*#__PURE__*/function () {
        function audioManager() {
          _defineProperty(this, "soundVolume", 1);
        }

        var _proto = audioManager.prototype; // init AudioManager in GameRoot.

        _proto.init = function init(audioSource) {
          this.soundVolume = 0.8; //this.getConfiguration(false) ? 1 : 0;

          audioManager._audioSource = audioSource;
          this.checkSound();
        };

        _proto.getConfiguration = function getConfiguration(isMusic) {
          // let state;
          // if (isMusic) {
          //     state = configuration.instance.getGlobalData('music');
          // } else {
          //     state = configuration.instance.getGlobalData('sound');
          // }
          // // console.log('Config for [' + (isMusic ? 'Music' : 'Sound') + '] is ' + state);
          // return state === undefined || state === 'true' ? true : false;
          return constant.CheckSoundEnabled();
        }
        /**
         * 播放音乐
         * @param {String} name 音乐名称可通过constants.AUDIO_MUSIC 获取
         * @param {Boolean} loop 是否循环播放
         */
        ;

        _proto.playMusic = function playMusic(loop) {
          var audioSource = audioManager._audioSource;
          assert(audioSource, 'AudioManager not inited!');
          audioSource.loop = loop;

          if (!audioSource.playing) {
            audioSource.play();
          }
        }
        /**
         * 播放音效
         * @param {String} name 音效名称可通过constants.AUDIO_SOUND 获取
         */
        ;

        _proto.playSound = function playSound(name) {
          var _this = this;

          var audioSource = audioManager._audioSource;
          assert(audioSource, 'AudioManager not inited!'); //音效一般是多个的，不会只有一个

          var path = 'gamePackage/audio/sound/'; // if (name !== 'click') {
          //     path = 'gamePackage/' + path; //微信特殊处理，除一开场的音乐，其余的放在子包里头
          // }

          resourceUtil.loadRes(path + name, AudioClip, function (err, clip) {
            if (err) {
              warn('load audioClip failed: ', err);
              return;
            } // NOTE: the second parameter is volume scale.


            audioSource.playOneShot(clip, audioSource.volume ? _this.soundVolume / audioSource.volume : 0);
          });
        };

        _proto.setMusicVolume = function setMusicVolume(flag) {
          var audioSource = audioManager._audioSource;
          assert(audioSource, 'AudioManager not inited!');
          flag = clamp01(flag);
          audioSource.volume = flag;
        };

        _proto.setSoundVolume = function setSoundVolume(flag) {
          this.soundVolume = flag;
        };

        _proto.openMusic = function openMusic() {
          this.setMusicVolume(0.8); // configuration.instance.setGlobalData('music', 'true');
        };

        _proto.closeMusic = function closeMusic() {
          this.setMusicVolume(0); // configuration.instance.setGlobalData('music', 'false');
        };

        _proto.openSound = function openSound() {
          this.setSoundVolume(1); // configuration.instance.setGlobalData('sound', 'true');
        };

        _proto.closeSound = function closeSound() {
          this.setSoundVolume(0); // configuration.instance.setGlobalData('sound', 'false');
        };

        _proto.checkSound = function checkSound() {
          if (constant.CheckSoundEnabled()) this.enableSound();else this.disableSound();
        };

        _proto.toggleGameSound = function toggleGameSound() {
          if (constant.ToggleSound()) this.enableSound();else this.disableSound();
          return constant.CheckSoundEnabled();
        };

        _proto.enableSound = function enableSound() {
          this.openMusic();
          this.openSound();
        };

        _proto.disableSound = function disableSound() {
          this.closeMusic();
          this.closeSound();
        };

        _createClass(audioManager, null, [{
          key: "instance",
          get: function get() {
            if (this._instance) {
              return this._instance;
            }

            this._instance = new audioManager();
            return this._instance;
          }
        }]);

        return audioManager;
      }());

      _defineProperty(audioManager, "_instance", void 0);

      _defineProperty(audioManager, "_audioSource", void 0);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/InitSceneManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SocketConnection.ts'], function (exports) {
  'use strict';

  var _defineProperty, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, game, director, Component, SocketConnection, SocketListener;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      game = module.game;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      SocketConnection = module.SocketConnection;
      SocketListener = module.SocketListener;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _temp;

      cclegacy._RF.push({}, "8973frGxu9LmbPkA4WnAOW7", "InitSceneManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var InitSceneManager = exports('InitSceneManager', (_dec = ccclass('InitSceneManager'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Node), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(InitSceneManager, _Component);

        function InitSceneManager() {
          var _this;

          _this = _Component.call(this) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "message", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "ping", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "bgContainer", _descriptor3, _assertThisInitialized(_this));

          InitSceneManager.instance = _assertThisInitialized(_this);
          return _this;
        }

        var _proto = InitSceneManager.prototype;

        _proto.start = function start() {
          game.addPersistRootNode(this.node);
          director.preloadScene('MenuScene');
          SocketConnection.instance.on(SocketListener.ON_CONNECT, this.onConnect, this);
          SocketConnection.instance.start();
        };

        _proto.onConnect = function onConnect(room) {
          console.log("Starting Menu Scene ");
          this.startMenu();
        };

        _proto.gameLoaded = function gameLoaded() {
          this.bgContainer.active = false;
        };

        _proto.startMenuLoaded = function startMenuLoaded() {
          this.bgContainer.active = false;
        };

        _proto.startMenu = function startMenu() {
          director.loadScene('MenuScene');
        };

        return InitSceneManager;
      }(Component), _defineProperty(_class3, "instance", void 0), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "message", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ping", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bgContainer", [_dec4], {
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

System.register("chunks:///_virtual/mxManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _createClass, _defineProperty, cclegacy;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8a9ca29cz5PnaCLIhult98e", "mxManager", undefined);

      var MxManager = exports('MxManager', /*#__PURE__*/function () {
        function MxManager() {
          _defineProperty(this, "isMiloApp", false);

          _defineProperty(this, "currentManager", void 0);
        }

        var _proto = MxManager.prototype;

        _proto.init = function init() {
          if (typeof window['gameManager'] !== 'undefined') {
            this.isMiloApp = false;
            this.currentManager = window['gameManager'];
          } else if (typeof window['mxMiloManager'] !== 'undefined') {
            this.isMiloApp = true;
            this.currentManager = window['mxMiloManager'];
          } else this.currentManager = null;
        };

        _proto.onGameStart = function onGameStart() {
          if (this.currentManager != null && typeof this.currentManager.onGameStart === 'function') {
            try {
              this.currentManager.onGameStart();
            } catch (err) {
              this.currentManager.onError(err.stack.toString());
            }
          }
        };

        _proto.onGameInit = function onGameInit() {
          if (this.currentManager != null && typeof this.currentManager.onGameInit === 'function') {
            try {
              var gameInit = JSON.parse(this.currentManager.onGameInit());

              if (this.isMiloApp) {
                var replaceConfig = function replaceConfig(config, replacableConfig) {
                  if (replacableConfig === null || replacableConfig === undefined) return;
                  Object.keys(replacableConfig).forEach(function (key) {
                    var value = replacableConfig[key];
                    loopObject(config, key, value);
                  });
                };

                var loopObject = function loopObject(obj, searchKey, newvalue) {
                  if (typeof obj === 'object' && obj !== null) {
                    Object.keys(obj).forEach(function (key) {
                      if (obj.hasOwnProperty(searchKey)) {
                        if (typeof obj[searchKey] != 'object' && searchKey == key) {
                          console.log("key " + key + " with previous value " + obj[searchKey] + " replaced with new value " + newvalue);
                          obj[searchKey] = newvalue;
                        }
                      }

                      if (typeof obj[key] == 'object') {
                        loopObject(obj[key], searchKey, newvalue);
                      }
                    });
                  }
                };

                gameInit = gameInit.initInfo;
                this.saveUserIdData(gameInit);
                var config = gameInit.gameConfig;
                config = JSON.parse(config);
                config.purchases = gameInit.purchases; //replace

                replaceConfig(config, gameInit.userSelectedGameConfiguration);
                return config;
              } else {
                this.saveUserIdData(gameInit);
                window.localStorage.setItem("SumohighScore", gameInit.highestScore);

                if (typeof this.currentManager.getGameSettings === 'function') {
                  try {
                    var gameSettingString = this.currentManager.getGameSettings();
                    var config = JSON.parse(gameSettingString);
                    return config;
                  } catch (e) {
                    return null;
                  }
                } else {
                  return null;
                }
              }
            } catch (e) {
              return null;
            }
          }

          return null;
        } //coin
        ;

        _proto.deductCoins = function deductCoins(eventName, data, currentScene) {
          if (this.currentManager != null && typeof this.currentManager.deductCoins === 'function') {
            var stringdata = JSON.stringify(data);
            this.currentManager.deductCoins(eventName, stringdata);
          } else {
            currentScene.coinDeductAccessories('{"success":1,"balance":100}');
          }
        } //video
        ;

        _proto.onCheckRewardedVideoAds = function onCheckRewardedVideoAds(eventName, currentScene) {
          if (this.currentManager != null && typeof this.currentManager.onCheckRewardedVideoAds === 'function') {
            this.currentManager.onCheckRewardedVideoAds(eventName);
          } else {
            currentScene[eventName]({
              status: 0
            });
          }
        };

        _proto.onShowRewardedVideoAds = function onShowRewardedVideoAds(eventName, currentScene) {
          if (this.currentManager != null && typeof this.currentManager.onShowRewardedVideoAds === 'function') {
            this.currentManager.onShowRewardedVideoAds(eventName, null);
          } else {
            currentScene[eventName]({
              status: 0
            });
          }
        } //mic event
        ;

        _proto.onEnableMic = function onEnableMic(eventName, currentScene) {
          if (this.currentManager != null && typeof this.currentManager.onEnableMic === 'function') {
            this.currentManager.onEnableMic(eventName);
          } else {
            currentScene[eventName]({
              status: 0
            });
          }
        };

        _proto.onDisableMic = function onDisableMic() {
          if (this.currentManager != null && typeof this.currentManager.onDisableMic === 'function') {
            this.currentManager.onDisableMic();
          }
        } //xp lvl
        ;

        _proto.onAvatarClick = function onAvatarClick(userID) {
          if (this.currentManager != null && this.currentManager.onAvatarClick === 'function') {
            this.currentManager.onAvatarClick(userID);
          }
        };

        _proto.pushFromGameToAndroid = function pushFromGameToAndroid(userID) {
          if (this.currentManager != null && typeof this.currentManager.pushFromGameToAndroid === 'function') {
            var payload = {
              eventType: "XPEvent",
              payload: {
                userId: userID
              }
            };
            var stringifiedPayload = JSON.stringify(payload);
            this.currentManager.pushFromGameToAndroid(stringifiedPayload);
          }
        } //gameover
        ;

        _proto.onGameOver = function onGameOver(data) {
          data = this.appendCommomData(data);
          var stringifiedJson = JSON.stringify(data);

          if (this.currentManager != null && typeof this.currentManager.onGameOver === 'function') {
            try {
              this.currentManager.onGameOver(stringifiedJson);
            } catch (err) {
              this.currentManager.onError(err.stack.toString());
            }
          }
        } //analytics
        ;

        _proto.onTrack = function onTrack(data, eventName) {
          data = this.appendCommomData(data);
          var stringifiedJson = JSON.stringify(data);

          if (this.currentManager != null && typeof this.currentManager.onTrack === 'function') {
            try {
              this.currentManager.onTrack(eventName, stringifiedJson);
            } catch (err) {
              this.currentManager.onError(err.stack.toString());
            }
          }
        };

        _proto.saveUserIdData = function saveUserIdData(data) {
          window.localStorage.setItem("SumoroomId", data.roomId);
          window.localStorage.setItem("SumouserId", data.userId);
          window.localStorage.setItem("SumogameId", data.gameId);
        };

        _proto.appendCommomData = function appendCommomData(jsonFile) {
          var ob1 = {
            gameId: String(window.localStorage.getItem("SumogameId")),
            roomID: String(window.localStorage.getItem("SumoroomId")),
            userID: String(window.localStorage.getItem("SumouserId"))
          };
          var ob = Object.assign({}, ob1);

          for (var key in jsonFile) {
            ob[key] = jsonFile[key];
          }

          console.log(ob);
          return ob;
        };

        _createClass(MxManager, null, [{
          key: "instance",
          get: function get() {
            if (this._instance) {
              return this._instance;
            }

            this._instance = new MxManager();
            return this._instance;
          }
        }]);

        return MxManager;
      }());

      _defineProperty(MxManager, "_instance", void 0);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PowerUpController.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SocketConnection.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, randomRange, Vec2, Vec3, instantiate, Component, SocketConnection;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      randomRange = module.randomRange;
      Vec2 = module.Vec2;
      Vec3 = module.Vec3;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      SocketConnection = module.SocketConnection;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "8bf73q3+cdE0rnIIGpvubbX", "PowerUpController", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SAFEAREA = 18;
      var PowerUpController = exports('PowerUpController', (_dec = ccclass('PowerUpController'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PowerUpController, _Component);

        function PowerUpController(gameController) {
          var _this;

          _this = _Component.call(this) || this;

          _defineProperty(_assertThisInitialized(_this), "gameController", void 0);

          _defineProperty(_assertThisInitialized(_this), "eatablesMap", {});

          _defineProperty(_assertThisInitialized(_this), "powerupArray", []);

          _defineProperty(_assertThisInitialized(_this), "gummySpawnInterval", void 0);

          _defineProperty(_assertThisInitialized(_this), "totalGummyToPresent", void 0);

          _defineProperty(_assertThisInitialized(_this), "powerUpMap", {});

          _this.gameController = gameController;

          _this.loadPowerUps();

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
          this.checkTotalPowerUpSpawn(totalPlayer);
          var initialTotalPowerup = this.totalGummyToPresent;

          for (var i = 0; i < initialTotalPowerup; i++) {
            this.respawnGummys();
          }
        };

        _proto.startSpawningNewPowerups = function startSpawningNewPowerups() {
          this.schedule(this.spawnAnyPowerup, this.gameController.gameData.levelDetail.powerUp.spawnDuration);
        };

        _proto.spawnAnyPowerup = function spawnAnyPowerup() {
          var PoisionSize = this.gameController.gameData.levelDetail.powerUp.spawnProbability.PoisionSize ? this.gameController.gameData.levelDetail.powerUp.spawnProbability.PoisionSize : 0;
          var PoisionSpeed = this.gameController.gameData.levelDetail.powerUp.spawnProbability.PoisionSpeed ? this.gameController.gameData.levelDetail.powerUp.spawnProbability.PoisionSpeed : 0;
          var GainSpeed = this.gameController.gameData.levelDetail.powerUp.spawnProbability.GainSpeed ? this.gameController.gameData.levelDetail.powerUp.spawnProbability.GainSpeed : 0;
          var Sheild = this.gameController.gameData.levelDetail.powerUp.spawnProbability.Sheild ? this.gameController.gameData.levelDetail.powerUp.spawnProbability.Sheild : 0;
          var totalCount = PoisionSize + PoisionSpeed + GainSpeed + Sheild;
          var range = Math.floor(randomRange(1, totalCount));
          var PoisionSizeRange = PoisionSize != 0 ? [0 + 1, PoisionSize] : [0, 0];
          var PoisionSpeedRange = PoisionSpeed != 0 ? [PoisionSize + 1, PoisionSpeed + PoisionSize] : [0, 0];
          var GainSpeedRange = GainSpeed != 0 ? [PoisionSize + PoisionSpeed + 1, GainSpeed + PoisionSize + PoisionSpeed] : [0, 0];
          var SheildRange = Sheild != 0 ? [PoisionSize + PoisionSpeed + GainSpeed + 1, Sheild + PoisionSize + PoisionSpeed + GainSpeed] : [0, 0];
          var val = 0;
          if (range >= PoisionSizeRange[0] && range <= PoisionSizeRange[1]) val = 0;
          if (range >= PoisionSpeedRange[0] && range <= PoisionSpeedRange[1]) val = 1;
          if (range >= GainSpeedRange[0] && range <= GainSpeedRange[1]) val = 2;
          if (range >= SheildRange[0] && range <= SheildRange[1]) val = 3;

          switch (val) {
            case 0:
              this.spawnGummy(this.eatablesMap['PoisionSize']);
              break;

            case 1:
              this.spawnGummy(this.eatablesMap['PoisionSpeed']);
              break;

            case 2:
              this.spawnGummy(this.eatablesMap['GainSpeed']);
              break;

            case 3:
              this.spawnGummy(this.eatablesMap['Sheild']);
              break;
          }
        };

        _proto.getGummyNumber = function getGummyNumber() {
          var currentGummy = 0;

          for (var i = 0; i < this.powerupArray.length; i++) {
            if (this.powerupArray[i].active && this.powerupArray[i].name == 'GummyBear') currentGummy++;
          }

          return currentGummy;
        };

        _proto.getSpawnLocation = function getSpawnLocation() {
          var platformXRange = this.gameController.platform.getScale().x + SAFEAREA;
          var platformYRange = this.gameController.platform.getScale().z + SAFEAREA;
          var platformXRandomRange = randomRange(-platformXRange, platformXRange);
          var platformYRandomRange = randomRange(-platformYRange, platformYRange);

          while (!this.inside(new Vec2(platformXRandomRange, platformYRandomRange), this.gameController.platformVertices)) {
            platformXRandomRange = randomRange(-platformXRange, platformXRange);
            platformYRandomRange = randomRange(-platformYRange, platformYRange);
          }

          return new Vec3(platformXRandomRange, 2, platformYRandomRange);
        };

        _proto.inside = function inside(point, vs) {
          // ray-casting algorithm based on
          // https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html/pnpoly.html
          var x = point.x,
              y = point.y;
          var inside = false;

          for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
            var xi = vs[i].x,
                yi = vs[i].z;
            var xj = vs[j].x,
                yj = vs[j].z;
            var intersect = yi > y != yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
            if (intersect) inside = !inside;
          }

          return inside;
        };

        _proto.spawnGummy = function spawnGummy(gummy) {
          var loc = this.getSpawnLocation();
          var newGummyNeeded = true;

          for (var i = 0; i < this.powerupArray.length; i++) {
            if (!this.powerupArray[i].active && gummy.data.name == this.powerupArray[i].name) {
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
            var strngData = window.localStorage.getItem("playerData");
            var playerData = JSON.parse(strngData);
            var characterIndex = playerData.food == -1 ? 0 : playerData.food;
            var food = instantiate(this.gameController.foodPrefabList[characterIndex]);
            gummyBear.getChildByName("foodNode").addChild(food);
          }
        };

        _proto.getPowerUpArrayList = function getPowerUpArrayList() {
          return this.powerupArray;
        };

        _proto.removeGummy = function removeGummy(collider) {
          collider.node.active = false;

          for (var i = 0; i < this.gameController.botController._totalPlayerArrayList.length; i++) {
            var data = this.gameController.botController._totalPlayerArrayList[i];
            var oppScript = data.getComponent("Bot") == null ? data.getComponent("Player") : data.getComponent("Bot");

            if (!oppScript._isPlayer) {
              if (collider.node == oppScript._currentFollowingNode) oppScript._currentFollowingNode = null;
            }
          }

          this.checkTotalPowerUpSpawn(this.gameController.botController._totalPlayerArrayList.length);
          var currentGummy = this.getGummyNumber();
          if (currentGummy < this.totalGummyToPresent) this.respawnGummys();
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

        _proto.checkTotalPowerUpSpawn = function checkTotalPowerUpSpawn(totalPlayer) {
          this.totalGummyToPresent = this.getPercentage(this.gameController.gameData.levelDetail.powerUp.totalSpawn * 100, totalPlayer);
        } // MILO
        ;

        _proto.createServerPowerUp = function createServerPowerUp(powerUp) {
          var gummyPrefab = this.getPowerUpPrefab(powerUp.name);
          var gummyBear = instantiate(gummyPrefab);
          gummyBear.setPosition(new Vec3(powerUp.x, powerUp.y, powerUp.z));
          this.powerUpMap[powerUp.id] = gummyBear;
          this.gameController.addToWorld(gummyBear);
          var strngData = window.localStorage.getItem("playerData");
          var playerData = JSON.parse(strngData);
          var characterIndex = playerData.food == -1 ? 0 : playerData.food;
          var food = instantiate(this.gameController.foodPrefabList[characterIndex]);
          gummyBear.getChildByName("foodNode").addChild(food);
        };

        _proto.activateOrDeactivatePowerUps = function activateOrDeactivatePowerUps(powerUp) {
          var currentPowerup = this.powerUpMap[powerUp.id];
          currentPowerup.active = powerUp.active;
          currentPowerup.setPosition(new Vec3(powerUp.x, powerUp.y, powerUp.z));
        } // powerup call is in param
        ;

        _proto.onChangeListener = function onChangeListener(powerUp) {
          if (!this.powerUpMap[powerUp.id]) {
            this.createServerPowerUp(powerUp);
          } else {
            this.activateOrDeactivatePowerUps(powerUp);
          }
        };

        _proto.loadPowerUps = function loadPowerUps() {
          for (var index = 0; index < SocketConnection.instance.powerUpsArr.length; index++) {
            var element = SocketConnection.instance.powerUpsArr[index];

            if (!this.powerUpMap[element.id] && element.name != null) {
              this.createServerPowerUp(element);
            }
          }
        };

        _proto.getPowerUpPrefab = function getPowerUpPrefab(name) {
          console.log(' powerup requested', name);
          return this.eatablesMap[name];
        };

        return PowerUpController;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CharacterHud.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Label, Node, Vec3, tween, Animation, ProgressBar, Component;

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
      Node = module.Node;
      Vec3 = module.Vec3;
      tween = module.tween;
      Animation = module.Animation;
      ProgressBar = module.ProgressBar;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "8d0a7RNVcpBfqZHaK6QYt4a", "CharacterHud", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CharacterHud = exports('CharacterHud', (_dec = ccclass('CharacterHud'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CharacterHud, _Component);

        function CharacterHud() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "nameLabel", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "powerwProgress", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_currentDuration", null);

          _defineProperty(_assertThisInitialized(_this), "_playerAngle", new Vec3(0, 0, 0));

          return _this;
        }

        var _proto = CharacterHud.prototype;

        _proto.start = function start() {// [3]
        };

        _proto.updateNameData = function updateNameData(name) {
          this.nameLabel.string = name;
        };

        _proto.updateHudPos = function updateHudPos(parentPos, camera) {
          this.node.setPosition(new Vec3(parentPos.x, this.node.position.y, parentPos.z));
          this.node.eulerAngles = new Vec3(camera.eulerAngles.x, camera.eulerAngles.y, camera.eulerAngles.z);
        };

        _proto.tweenPosition = function tweenPosition(characterScale) {
          var value = this.getRangeVal(characterScale, 0, 0.5, 0.5, 3.5);
          tween(this.node.position).to(1, {
            y: value
          }).start();
        };

        _proto.showScore = function showScore(score) {
          if (score >= 0) this.node.getChildByName("score").getComponent(Label).string = "+" + score;else this.node.getChildByName("score").getComponent(Label).string = score;
          var anim = this.node.getComponent(Animation);
          anim.play('showScore');
        };

        _proto.getRangeVal = function getRangeVal(percentage, minPercentage, maxPercentage, minValue, maxValue) {
          var minPercentage = minPercentage;
          var maxPercentage = maxPercentage;
          var minValue = minValue;
          var maxValue = maxValue;
          return (percentage - minPercentage) / (maxPercentage - minPercentage) * (maxValue - minValue) + minValue;
        };

        _proto.startPowerupProgress = function startPowerupProgress(time) {
          this.powerwProgress.active = true;
          this._currentDuration = time;
          var value = this.getRangeVal(time, 0, this._currentDuration, 0, 1);
          this.powerwProgress.getChildByName("progress").getComponent(ProgressBar).progress = value;
          var value1 = this.getRangeVal(time - 1, 0, this._currentDuration, 0, 1);
          tween(this.powerwProgress.getChildByName("progress").getComponent(ProgressBar)).to(1, {
            progress: value1
          }).start();
          this.powerwProgress.getChildByName("counterBg").getChildByName("counter").getComponent(Label).string = time;
        };

        _proto.updatePowerProgress = function updatePowerProgress(value) {
          var progressValue = this.getRangeVal(value - 1, 0, this._currentDuration, 0, 1);
          tween(this.powerwProgress.getChildByName("progress").getComponent(ProgressBar)).to(1, {
            progress: progressValue
          }).start();
          this.powerwProgress.getChildByName("counterBg").getChildByName("counter").getComponent(Label).string = value;
          if (value == 0) this.powerwProgress.active = false;
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return CharacterHud;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nameLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "powerwProgress", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
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

System.register("chunks:///_virtual/SocketConnection.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './colyseus.js', './colyseus.mjs_cjs=&original=.js', './GameConfig.ts', './EventManager.ts', './MiloManager.ts', './InitSceneManager.ts'], function (exports) {
  'use strict';

  var _defineProperty, _createClass, _asyncToGenerator, cclegacy, _decorator, log, _cjsExports, GameConfig, EventManager, MiloManager, InitSceneManager;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      log = module.log;
    }, function (module) {
      _cjsExports = module.default;
    }, null, function (module) {
      GameConfig = module.GameConfig;
    }, function (module) {
      EventManager = module.EventManager;
    }, function (module) {
      MiloManager = module.MiloManager;
    }, function (module) {
      InitSceneManager = module.InitSceneManager;
    }],
    execute: function () {
      exports('SocketListener', void 0);

      var _dec, _class, _class2, _temp;

      cclegacy._RF.push({}, "9113fbeb1RIL5g7gTGC3X/R", "SocketConnection", undefined);

      var ccclass = _decorator.ccclass;
      var SocketListener;

      (function (SocketListener) {
        SocketListener["ON_ADD"] = "ON_ADD";
        SocketListener["ON_CONNECT"] = "ON_CONNECT";
        SocketListener["ON_PLAYER_CHANGE"] = "ON_PLAYER_CHANGE";
        SocketListener["ON_POWERUP_ADD"] = "ON_POWERUP_ADD";
        SocketListener["ON_POWERUP_CHANGE"] = "ON_POWERUP_CHANGE";
        SocketListener["ON_WAIT_TIME"] = "ON_WAIT_TIME";
        SocketListener["GAME_STARTED"] = "GAME_STARTED";
        SocketListener["READY_GO_COUNT"] = "READY_GO_COUNT";
        SocketListener["SERVER_GAME_TIME"] = "SERVER_GAME_TIME";
        SocketListener["CURRENT_GAME_MAP"] = "CURRENT_GAME_MAP";
        SocketListener["ON_BUMP"] = "ON_BUMP";
        SocketListener["ON_POWERUP_BUMP"] = "ON_POWERUP_BUMP";
        SocketListener["ON_PLAYER_DEAD"] = "ON_PLAYER_DEAD";
        SocketListener["ON_GAME_OVER"] = "ON_GAME_OVER";
        SocketListener["ON_CROWN"] = "ON_CROWN";
        SocketListener["ON_SCORE_CHANGE"] = "ON_SCORE_CHANGE";
      })(SocketListener || (SocketListener = exports('SocketListener', {})));

      var SocketConnection = exports('SocketConnection', (_dec = ccclass('SocketConnection'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
        function SocketConnection() {
          _defineProperty(this, "playerName", void 0);

          _defineProperty(this, "isConnected", false);

          _defineProperty(this, "isReconected", false);

          _defineProperty(this, "maxRetry", 10);

          _defineProperty(this, "retryCount", 0);

          _defineProperty(this, "lastPingTime", new Date().getTime());

          _defineProperty(this, "initInfo", {});

          _defineProperty(this, "miloManager", null);

          _defineProperty(this, "onlinePlayers", []);

          _defineProperty(this, "powerUpsArr", []);

          _defineProperty(this, "eventManager", void 0);

          _defineProperty(this, "pingInterval", 0);

          this.eventManager = new EventManager();
        }

        var _proto = SocketConnection.prototype;

        _proto.start = function start() {
          if ('mxMiloManager' in window == false) {
            this.miloManager = MiloManager();
          } else {
            this.miloManager = window['mxMiloManager'];
          }

          this.miloManager.onGameStart();
          this.initInfo = JSON.parse(this.miloManager.onGameInit());
          var userInfo = this.initInfo;
          var playerInfo = userInfo['players'].find(function (obj) {
            return obj.userId == userInfo['initInfo'].userId;
          });
          this.playerName = playerInfo.name;
          playerInfo = Object.assign(playerInfo, {
            micEnable: userInfo['initInfo']['micEnabled']
          });
          var loginDetails = Object.assign(userInfo['initInfo'], {
            isHost: playerInfo.host,
            playerInfo: playerInfo,
            gameConfig: GameConfig,
            roomName: 'SumoRoom'
          });
          var isProd = GameConfig.serverInfo.isProd;
          var url = "";
          {
            var domain = window.location.href.split('/')[2];
            url = "ws://" + domain.split(':')[0] + ':2567';
          }
          this.client = new _cjsExports.Client(url);
          this.connect(loginDetails);
          console.log("Connecting server to " + url);
        };

        _proto.connect = /*#__PURE__*/function () {
          var _connect = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
            var _this = this;

            var roomId;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    roomId = options.roomId;
                    _context.next = 4;
                    return this.client.joinById(roomId, {
                      roomType: 'PRIVATE',
                      roomId: roomId,
                      playerInfo: options.playerInfo
                    });

                  case 4:
                    this.room = _context.sent;
                    this.isConnected = true;
                    console.log("Room joined successfully!");
                    console.log("user's sessionId:", this.room.sessionId);
                    this.addRoomListeners();
                    this.addBroadCastListener();
                    this.startPing();
                    this.dispatch(SocketListener.ON_CONNECT, this.room);
                    _context.next = 20;
                    break;

                  case 14:
                    _context.prev = 14;
                    _context.t0 = _context["catch"](0);
                    log(_context.t0);

                    if (!this.isConnected) {
                      _context.next = 19;
                      break;
                    }

                    return _context.abrupt("return");

                  case 19:
                    setTimeout(function () {
                      if (_this.retryCount < _this.maxRetry) {
                        _this.connect(options);
                      }

                      ++_this.retryCount;
                    }, 1000);

                  case 20:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[0, 14]]);
          }));

          function connect(_x) {
            return _connect.apply(this, arguments);
          }

          return connect;
        }();

        _proto.onReconnect = function onReconnect() {
          this.isReconected = true;
          this.addRoomListeners();
          this.addBroadCastListener();
          this.isReconected = false;
        };

        _proto.reconnect = function reconnect() {// TODO
        };

        _proto.startPing = function startPing() {
          var _this2 = this;
          /* if (this.lastPingTime != 0) {
              console.log(`%c Network offline`, 'background: #000; color: #ffffff');
              this.isConnected = false;
              // this.reconnect();
           } else if (!this.isConnected) {
              this.isConnected = true;
          } */


          this.pingInterval = setInterval(function () {
            if (_this2.isConnected) {
              _this2.lastPingTime = new Date().getTime();

              _this2.room.send('action', {
                command: "PING",
                data: _this2.lastPingTime
              });
            }
          }, 1000);
        };

        _proto.countPingTime = function countPingTime() {
          var now = new Date();
          var pingTime = now.getTime() - this.lastPingTime;
          InitSceneManager.instance.ping.string = pingTime.toString();
        };

        _proto.addRoomListeners = function addRoomListeners() {
          var _this3 = this;

          var self = this; // this.room.onStateChange((state) => {
          //     console.log("onStateChange: ", state);
          // });

          this.room.onMessage("PONG", function (data) {
            _this3.countPingTime(); // if (this.lastPingTime == data) {
            // }

          });
          this.room.onLeave(function (code) {
            console.log("onLeave:", code);
            _this3.isConnected = false;
          });
          this.room.state.listen("gameStartTime", function (value) {
            _this3.dispatch(SocketListener.ON_WAIT_TIME, value);
          });
          this.room.state.listen("gameStarted", function (value) {
            _this3.dispatch(SocketListener.GAME_STARTED, value);
          });
          this.room.state.listen("serverGameTime", function (value) {
            _this3.dispatch(SocketListener.SERVER_GAME_TIME, value);
          });
          this.room.state.listen("currentMap", function (value) {
            _this3.dispatch(SocketListener.CURRENT_GAME_MAP, value);
          });
          this.room.state.listen("readyGoCount", function (value) {
            _this3.dispatch(SocketListener.READY_GO_COUNT, value);
          }); // this.room.state.listen("gameOver", (value) => {
          //     this.dispatch(SocketListener.ON_GAME_OVER, value);
          // });

          this.room.onMessage("GAME_OVER", function (data) {
            _this3.dispatch(SocketListener.ON_GAME_OVER, data);
          });

          this.room.state.powerUps.onAdd = function (powerUp) {
            console.log('Powerup added');

            _this3.addPowerUps(powerUp); // this.dispatch(SocketListener.ON_POWERUP_ADD, powerUp);


            powerUp.onChange = function (changes) {
              // console.log('Powerup change', this);
              self.dispatch(SocketListener.ON_POWERUP_CHANGE, this);
            };
          };

          this.room.state.playerMap.onAdd = function (player, key) {
            console.log(player, "has been added at", key);

            _this3.addPlayerToArray(player);

            _this3.dispatch(SocketListener.ON_ADD);

            player.onChange = function (changes) {
              self.dispatch(SocketListener.ON_PLAYER_CHANGE, this);
            };

            player.listen('isDead', function () {
              self.dispatch(SocketListener.ON_PLAYER_DEAD, player);
            });
            player.listen('score', function () {
              self.dispatch(SocketListener.ON_SCORE_CHANGE, player);
            });
            player.listen('crownActive', function (value) {
              self.dispatch(SocketListener.ON_CROWN, player);
            }); // force "onChange" to be called immediatelly

            player.triggerAll();
          };
        };

        _proto.addBroadCastListener = function addBroadCastListener() {
          var _this4 = this;

          this.room.onMessage(SocketListener.ON_BUMP, function (data) {
            _this4.dispatch(SocketListener.ON_BUMP, {
              ANIM_STATE: data.ANIM_STATE,
              vector: data.vector,
              bumpValue: data.bumpValue,
              bumpPos: data.bumpPos,
              collider: data.colliderId
            });
          });
          this.room.onMessage(SocketListener.ON_POWERUP_BUMP, function (data) {
            _this4.dispatch(SocketListener.ON_POWERUP_BUMP, {
              scale: data.scale,
              duration: data.duration,
              gainValue: data.gainValue,
              isGain: data.isGain,
              resize: data.resize
            });
          });
        };

        _proto.addPlayerToArray = function addPlayerToArray(player) {
          var index = this.onlinePlayers.findIndex(function (element) {
            return element.userId == player.userId;
          });

          if (index > -1) {
            this.onlinePlayers.splice(index, 1);
          }

          this.onlinePlayers.push(player);
        };

        _proto.addPowerUps = function addPowerUps(powerUp) {
          this.powerUpsArr.push(powerUp);
        };

        _proto.send = function send(msg) {
          this.room.send('action', msg);
        };

        _proto.on = function on(eventType, callback, context) {
          this.eventManager.addListener(eventType, callback.bind(context));
        };

        _proto.remove = function remove(eventType, callback) {
          this.eventManager.removeListener(eventType, callback);
        };

        _proto.dispatch = function dispatch(eventType, details) {
          this.eventManager.dispatch(eventType, details);
        };

        _createClass(SocketConnection, [{
          key: "sessionId",
          get: function get() {
            return this.room.sessionId;
          }
        }], [{
          key: "instance",
          get: function get() {
            if (this._instance) {
              return this._instance;
            }

            this._instance = new SocketConnection();
            return this._instance;
          }
        }]);

        return SocketConnection;
      }(), _defineProperty(_class2, "_instance", void 0), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/eventListener.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, _decorator, error, log;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      error = module.error;
      log = module.log;
    }],
    execute: function () {
      var _dec, _class, _temp, _dec2, _class3;

      cclegacy._RF.push({}, "9dccaCF91dApYnQ1vWQIfmq", "eventListener", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var oneToOneListener = (_dec = ccclass("oneToOneListener"), _dec(_class = (_temp = /*#__PURE__*/function () {
        function oneToOneListener() {
          _defineProperty(this, "supportEvent", {});

          _defineProperty(this, "handle", {});

          this.supportEvent = null;
        }

        var _proto = oneToOneListener.prototype;

        _proto.on = function on(eventName, handler, target) {
          this.handle[eventName] = {
            handler: handler,
            target: target
          };
        };

        _proto.off = function off(eventName, handler) {
          var oldObj = this.handle[eventName];

          if (oldObj && oldObj.handler && oldObj.handler === handler) {
            delete this.handle[eventName];
          }
        };

        _proto.dispatchEvent = function dispatchEvent(eventName) {
          if (this.supportEvent !== null && !this.supportEvent.hasOwnProperty(eventName)) {
            error("please add the event into clientEvent.js");
            return;
          }

          var objHandler = this.handle[eventName];
          var args = [];

          for (var i = 1; i < arguments.length; i++) {
            args.push(arguments[i]);
          }

          if (objHandler.handler) {
            objHandler.handler.apply(objHandler.target, args);
          } else {
            log("not register " + eventName + "    callback func");
          }
        };

        _proto.setSupportEventList = function setSupportEventList(arrSupportEvent) {
          if (!(arrSupportEvent instanceof Array)) {
            error("supportEvent was not array");
            return false;
          }

          this.supportEvent = {};

          for (var i in arrSupportEvent) {
            var eventName = arrSupportEvent[i];
            this.supportEvent[eventName] = i;
          }

          return true;
        };

        return oneToOneListener;
      }(), _temp)) || _class);
      var eventListener = exports('eventListener', (_dec2 = ccclass("eventListener"), _dec2(_class3 = /*#__PURE__*/function () {
        function eventListener() {}

        eventListener.getBaseClass = function getBaseClass(type) {
          return oneToOneListener;
        };

        return eventListener;
      }()) || _class3));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/commonFun.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './constant.ts', './audioManager.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Component, constant, audioManager;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      constant = module.constant;
    }, function (module) {
      audioManager = module.audioManager;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "a12d4+l2AhNPJDGsDtZTX1+", "commonFun", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var STATE = {
        IDLE: 0,
        WALK: 1,
        BUMP: 2
      };
      var CommonFun = exports('CommonFun', (_dec = ccclass('CommonFun'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CommonFun, _Component);

        function CommonFun() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = CommonFun.prototype;

        _proto.start = function start() {// [3]
        };

        _proto.getPercentage = function getPercentage(percentToGet, number) {
          return percentToGet / 100 * number;
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

        _proto.getNewModifiedSpeed = function getNewModifiedSpeed(botScale, refe) {
          return (botScale - refe.initialSize) / (refe.maxSize - refe.initialSize) * (refe.endspeed - refe.startSpeed) + refe.startSpeed;
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

        _proto.shuffleArray = function shuffleArray(array) {
          for (var i = array.length - 1; i > 0; i--) {
            // Generate random number
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
          }

          return array;
        } //animation
        ;

        _proto.changeWalkAnimationSpeed = function changeWalkAnimationSpeed(speed, node) {// node._skeletal.getState('walk').speed = speed / 2;
        };

        _proto.setWalkStateAnimation = function setWalkStateAnimation(node) {
          node._currentState = STATE.WALK;

          node._skeletal.play('walk');
        };

        _proto.setBumpStateAnimation = function setBumpStateAnimation(node) {
          audioManager.instance.playSound(constant.AUDIO_SOUND.push);
          node._currentState = STATE.BUMP;

          node._skeletal.play('push');

          node._skeletal.getState('push').repeatCount = 1;
        };

        _proto.setIdleStateAnimation = function setIdleStateAnimation(node) {
          node._currentState = STATE.IDLE;

          node._skeletal.play('idle');
        };

        _proto.setPowerGainAnimation = function setPowerGainAnimation(node) {
          if (node.eatTimeout != null) clearTimeout(node.eatTimeout);

          node._skeletal.play('powerGain');

          var duration = node._skeletal.getState('powerGain').duration;

          node.eatTimeout = setTimeout(function () {
            node._skeletal.play('walk');

            node.eatTimeout = null;
          }, 1000 * duration);
        };

        _proto.setPowerLoseAnimation = function setPowerLoseAnimation(node) {
          if (node.eatTimeout != null) clearTimeout(node.eatTimeout);

          node._skeletal.play('powerLose');

          var duration = node._skeletal.getState('powerLose').duration;

          node.eatTimeout = setTimeout(function () {
            node._skeletal.play('walk');

            node.eatTimeout = null;
          }, 1000 * duration);
        };

        _proto.setWinStateAnimation = function setWinStateAnimation(node) {
          node._skeletal.play('win');
        } //common Names
        ;

        _proto.getNames = function getNames() {
          var names = ["Sanjay", "Vinay", "Salman", "Parvez", "Rohan", "Shahzad", "Shantanu", "shenaz", "vivek", "ramesh", "suresh ", "rahul", "arun", "sai", "abhishek", "vikas", "lokesh", "mahesh", "ram", "shyam", "Abhijeet", "Aditya", "Akshat", "Amitava", "Angad", "Aniruddh", "Anubhav", "Arjun", "Armaan", "Ashish", "Anjali", "Antara", "Aparna", "Aruna", "Arunima", "Arzoo", "Ayesha", "Bahaar", "Bhavna", "Bhoomi", "Bipasha", "Chaaya", "Chandrika", "Chhavi", "Deepika", "Devika", "Diya", "Ekta", "Falguni", "Farah", "Fatima", "Garima", "Gauhar", "Gayatri", "Geetha", "Gurleen", "Harini", "Harpreet", "Indrani", "Ira", "Jasleen", "Jayanti", "Jyothsna", "Kalyani", "Kanika", "Jeet", "Junaid", "Kabir", "Kartik", "Karun", "Khalid", "Kshitij", "Lohith", "Madhav", "Mohammed", "Mridul", "Navjot", "Nikhil", "Nimit", "Nishith", "Ojas", "Om", "Onkar", "Paramjit", "Paritosh", "Parth", "Parvez", "Pavan", "Pranav", "Purab", "Rehaan", "Rohan", "Sahil", "Salman", "Samarth", "Samir", "Sanchit", "Sanjay", "Sarabjit", "Shahzad", "Shantanu", "Shishir", "Shray", "Sparsh", "Sumer", "Surjan", "Swapan", "Tarun", "Tejas", "Tushar", "Udit", "Umang", "Umar", "Varun", "Veer", "Vidur", "Vinay", "Yash", "Zeeshan", "Zubin", "Rajesh", "Ramesh", "Sanju", "Manju", "Alfaz", "Bhavesh", "Bipin", "Daljeet", "Fardeen", "Girish"];
          var randNumber = Math.floor(Math.random() * (names.length - 1 + 1));
          return names[randNumber];
        };

        _proto.removeObjectFromArray = function removeObjectFromArray(array, value) {
          var idx = array.indexOf(value);

          if (idx !== -1) {
            array.splice(idx, 1);
          }

          return array;
        };

        _proto.harmonicMean = function harmonicMean(arr) {
          var n = arr.length; // Declare sum variables and initialize
          // with zero.

          var sum = 0;

          for (var i = 0; i < n; i++) {
            sum = sum + 1 / arr[i];
          }

          return n / sum;
        };

        _proto.millisecondsToTime = function millisecondsToTime(milli) {
          var milliseconds = milli % 1000;
          var seconds = Math.floor(milli / 1000 % 60);
          var minutes = Math.floor(milli / (60 * 1000) % 60);
          return minutes + ":" + seconds + ":" + milliseconds;
        };

        _proto.getIntValue = function getIntValue(loc) {
          return parseInt(loc);
        };

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

System.register("chunks:///_virtual/Player.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './mxManager.ts', './constant.ts', './audioManager.ts', './GameConfig.ts', './SocketConnection.ts', './Helper.ts', './PlayerMovement.ts', './commonFun.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, Vec3, SkeletalAnimationComponent, RigidBodyComponent, Vec2, instantiate, tween, macro, MxManager, constant, audioManager, GameConfig, SocketConnection, SocketListener, STATE, PlayerMovement, CommonFun;

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
      RigidBodyComponent = module.RigidBodyComponent;
      Vec2 = module.Vec2;
      instantiate = module.instantiate;
      tween = module.tween;
      macro = module.macro;
    }, function (module) {
      MxManager = module.MxManager;
    }, function (module) {
      constant = module.constant;
    }, function (module) {
      audioManager = module.audioManager;
    }, function (module) {
      GameConfig = module.GameConfig;
    }, function (module) {
      SocketConnection = module.SocketConnection;
      SocketListener = module.SocketListener;
    }, function (module) {
      STATE = module.STATE;
    }, function (module) {
      PlayerMovement = module.PlayerMovement;
    }, function (module) {
      CommonFun = module.CommonFun;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "a3addpkf1lOCoVufXlKk5xR", "Player", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CELL_TIME = 0.016;
      var Player = exports('Player', (_dec = ccclass('Player'), _dec(_class = (_temp = /*#__PURE__*/function (_PlayerMovement) {
        _inheritsLoose(Player, _PlayerMovement);

        function Player() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _PlayerMovement.call.apply(_PlayerMovement, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "playerCamera", null);

          _defineProperty(_assertThisInitialized(_this), "_isPlayer", false);

          _defineProperty(_assertThisInitialized(_this), "playerName", void 0);

          _defineProperty(_assertThisInitialized(_this), "_currentFollowingNode", null);

          _defineProperty(_assertThisInitialized(_this), "_currentPlayerPosition", Vec3.ZERO);

          _defineProperty(_assertThisInitialized(_this), "_vector", Vec3.ZERO);

          _defineProperty(_assertThisInitialized(_this), "_vectorAngle", Vec3.ZERO);

          _defineProperty(_assertThisInitialized(_this), "_now_time", 0);

          _defineProperty(_assertThisInitialized(_this), "_skeletal", void 0);

          _defineProperty(_assertThisInitialized(_this), "_currentState", STATE.IDLE);

          _defineProperty(_assertThisInitialized(_this), "_charName", "LOL");

          _defineProperty(_assertThisInitialized(_this), "eatTimeout", null);

          _defineProperty(_assertThisInitialized(_this), "gameController", null);

          _defineProperty(_assertThisInitialized(_this), "initialSize", 0);

          _defineProperty(_assertThisInitialized(_this), "maxSize", 0);

          _defineProperty(_assertThisInitialized(_this), "startSpeed", 0);

          _defineProperty(_assertThisInitialized(_this), "endspeed", 0);

          _defineProperty(_assertThisInitialized(_this), "maxScale", 0);

          _defineProperty(_assertThisInitialized(_this), "currentScale", 0);

          _defineProperty(_assertThisInitialized(_this), "speed", 0);

          _defineProperty(_assertThisInitialized(_this), "bumpTween", null);

          _defineProperty(_assertThisInitialized(_this), "bumptimeTween", null);

          _defineProperty(_assertThisInitialized(_this), "characterHud", null);

          _defineProperty(_assertThisInitialized(_this), "_isPoisionSpeedActive", false);

          _defineProperty(_assertThisInitialized(_this), "_isGainSpeedActive", false);

          _defineProperty(_assertThisInitialized(_this), "_isSheildActive", false);

          _defineProperty(_assertThisInitialized(_this), "_poisionSpeedActiveCount", 0);

          _defineProperty(_assertThisInitialized(_this), "_gainSpeedActiveCount", 0);

          _defineProperty(_assertThisInitialized(_this), "_sheildActiveCount", 0);

          _defineProperty(_assertThisInitialized(_this), "_sheildCountDown", 0);

          _defineProperty(_assertThisInitialized(_this), "_poisionSpeedActivePercentage", 0);

          _defineProperty(_assertThisInitialized(_this), "_gainSpeedActivePercentage", 0);

          _defineProperty(_assertThisInitialized(_this), "_score", 0);

          _defineProperty(_assertThisInitialized(_this), "_totalSumoPushed", 0);

          _defineProperty(_assertThisInitialized(_this), "_collidedOpponentPlayer", null);

          _defineProperty(_assertThisInitialized(_this), "commonFun", null);

          _defineProperty(_assertThisInitialized(_this), "playerData", null);

          _defineProperty(_assertThisInitialized(_this), "isReady", false);

          return _this;
        }

        var _proto = Player.prototype;

        _proto.start = function start() {
          this.commonFun = new CommonFun();
          this._skeletal = this.node.getChildByName("Penguine_Anim").getComponent(SkeletalAnimationComponent);
          this.commonFun.setIdleStateAnimation(this);
          this.setProperties();
          this.schedule(this.powerUpUpdates, 1);
          this.isReady = true;
        };

        _proto.setProperties = function setProperties() {
          this._isPlayer = true;
          this.initialSize = GameConfig.player.initialSize;
          this.maxSize = GameConfig.player.playerMaxSize;
          this.startSpeed = GameConfig.player.playerStartSpeed;
          this.endspeed = GameConfig.player.playerEndSpeed;
          this.setCurrentScale(this.initialSize);
          this.node.scale.set(this.currentScale, this.currentScale, this.currentScale);
          this.maxScale = this.maxSize;
          if (!MxManager.instance.isMiloApp) this.getComponent(RigidBodyComponent).linearFactor.y = 1;else this.getComponent(RigidBodyComponent).linearFactor.y = 0;
          this.updateSpeed();
        };

        _proto.setCamera = function setCamera(camera, gameController, cameraAngle) {
          this.playerCamera = camera;
          this.gameController = gameController;
          if (GameConfig.debug.camera.angleChange) this.playerCamera.eulerAngles = new Vec3(cameraAngle.x, cameraAngle.y + 180, cameraAngle.z); // TODO check lerp code

          var target_position = new Vec2(this.node.getPosition().x, this.node.getPosition().z);
          target_position.lerp(target_position, 0.1);
          this.playerCamera.setPosition(new Vec3(target_position.x, this.node.getPosition().y, target_position.y));
        };

        _proto.addName = function addName(namePrefab, world) {
          this.playerName = instantiate(namePrefab);
          world.addChild(this.playerName);
          this._charName = "you";
          this.characterHud = this.playerName.getComponent("CharacterHud");
          this.characterHud.updateNameData(this._charName);
          this.updateNamePos();
        };

        _proto.updateSpeed = function updateSpeed() {
          this.speed = this.commonFun.getNewModifiedSpeed(this.getCurrentScale(), this);
          this.commonFun.changeWalkAnimationSpeed(this.speed, this);
        };

        _proto.setSpeed = function setSpeed(value) {
          this.speed = value;
        };

        _proto.getSpeed = function getSpeed() {
          return this.speed;
        };

        _proto.startSheild = function startSheild(duration) {
          this.commonFun.setPowerGainAnimation(this);
          this.characterHud.startPowerupProgress(duration);
          this.gameController.startPowerupProgress(duration, "sheild");
          this._sheildActiveCount += duration;
          this._sheildCountDown = 3;
          this._isSheildActive = true;
        };

        _proto.checkGainSpeedActive = function checkGainSpeedActive() {
          return this._isGainSpeedActive;
        };

        _proto.checkPoisionSpeedActive = function checkPoisionSpeedActive() {
          return this._isPoisionSpeedActive;
        };

        _proto.checkSheildActive = function checkSheildActive() {
          return this._isSheildActive;
        };

        _proto.reEvaluateSpeed = function reEvaluateSpeed(gain, duration, isgain) {
          this.characterHud.startPowerupProgress(duration);
          this.gameController.startPowerupProgress(duration, isgain ? "GainSpeed" : "PoisionSpeed");

          if (isgain) {
            if (this._isGainSpeedActive) {
              this._isPoisionSpeedActive = false;
              this._isGainSpeedActive = false;
              this._poisionSpeedActiveCount = 0;
              this._gainSpeedActiveCount = 0;
              return;
            }

            this._poisionSpeedActivePercentage = gain;
            this._poisionSpeedActiveCount += duration;
            this._isPoisionSpeedActive = true; // this.speed = this.speed + this.commonFun.getPercentage(gain*100,this.speed);     

            this.commonFun.setPowerGainAnimation(this);
            this.commonFun.changeWalkAnimationSpeed(this.speed, this);
          } else {
            if (this._isPoisionSpeedActive) {
              this._isPoisionSpeedActive = false;
              this._isGainSpeedActive = false;
              this._poisionSpeedActiveCount = 0;
              this._gainSpeedActiveCount = 0;
              return;
            }

            this._gainSpeedActivePercentage = gain;
            this._gainSpeedActiveCount += duration;
            this._isGainSpeedActive = true; // this.speed = this.speed - this.commonFun.getPercentage(gain*100,this.speed);       

            this.commonFun.setPowerLoseAnimation(this);
            this.commonFun.changeWalkAnimationSpeed(this.speed, this);
          }
        };

        _proto.powerUpUpdates = function powerUpUpdates() {
          if (this._isPoisionSpeedActive && this._poisionSpeedActiveCount > 0) {
            this._poisionSpeedActiveCount--;
            this.characterHud.updatePowerProgress(this._poisionSpeedActiveCount);
            this.gameController.updatePowerProgress(this._poisionSpeedActiveCount);

            if (this._poisionSpeedActiveCount <= 0) {
              this._poisionSpeedActiveCount = 0;
              this._isPoisionSpeedActive = false;
            }
          }

          if (this._isGainSpeedActive && this._gainSpeedActiveCount > 0) {
            this._gainSpeedActiveCount--;
            this.characterHud.updatePowerProgress(this._gainSpeedActiveCount);
            this.gameController.updatePowerProgress(this._gainSpeedActiveCount);

            if (this._gainSpeedActiveCount <= 0) {
              this._gainSpeedActiveCount = 0;
              this._isGainSpeedActive = false;
            }
          }

          if (this._isSheildActive && this._sheildActiveCount > 0) {
            if (this._sheildCountDown >= 0) audioManager.instance.playSound(constant.AUDIO_SOUND.sheildPowerUp);
            this._sheildCountDown--;
            this._sheildActiveCount--;
            this.characterHud.updatePowerProgress(this._sheildActiveCount);
            this.gameController.updatePowerProgress(this._sheildActiveCount);

            if (this._sheildActiveCount <= 0) {
              this._sheildActiveCount = 0;
              this._isSheildActive = false;
            }
          }
        };

        _proto.resize = function resize(gain, isgain) {
          var _this2 = this;

          if (isgain) {
            if (this.getCurrentScale() <= this.maxScale) {
              this.setCurrentScale(this.getCurrentScale() + this.commonFun.getPercentage(gain * 100, this.currentScale));
              if (this.getCurrentScale() > this.maxScale) this.setCurrentScale(this.maxScale);
              tween(this.node.scale).to(1, new Vec3(this.currentScale, this.currentScale, this.currentScale)).call(function () {
                _this2.updateSpeed();
              }).start();
              this.characterHud.tweenPosition(this.getCurrentScale());
              this.commonFun.setPowerGainAnimation(this);
            }
          } else {
            if (this.getCurrentScale() > this.initialSize) {
              this.setCurrentScale(this.getCurrentScale() - this.commonFun.getPercentage(gain * 100, this.currentScale));
              if (this.getCurrentScale() < this.initialSize) this.setCurrentScale(this.initialSize);
              tween(this.node.scale).to(1, new Vec3(this.currentScale, this.currentScale, this.currentScale)).call(function () {
                _this2.updateSpeed();
              }).start();
              this.characterHud.tweenPosition(this.getCurrentScale());
              this.commonFun.setPowerLoseAnimation(this);
            }
          }
        } // moveStationCamera() {
        //     let cameraNode = this.playerCamera.getChildByName('playerCamera');
        //     // cameraNode.eulerAngles = cameraNode.eulerAngles.add3f(0, 10, 0);
        //     tween(cameraNode.position)
        //         .to(1, new Vec3(0, 8, 8))
        //         .start();
        // }
        // resetStationCamera() {
        //     let cameraNode = this.playerCamera.getChildByName('playerCamera');
        //     // cameraNode.eulerAngles = cameraNode.eulerAngles.add3f(0, 10, 0);
        //     tween(cameraNode.position)
        //         .to(1, new Vec3(0, 17.788, 25.71))
        //         .start();
        // }
        ;

        _proto.removeAllHud = function removeAllHud() {
          this.gameController.getWorld().removeChild(this.playerName);
        };

        _proto._onDeathPlatform = function _onDeathPlatform(event) {
          audioManager.instance.playSound(constant.AUDIO_SOUND.myDeath);
          var currentScript = event.selfCollider.node.getComponent("Bot") == null ? event.selfCollider.node.getComponent("Player") : event.selfCollider.node.getComponent("Bot");

          if (this._collidedOpponentPlayer != null) {
            var oppScript = this._collidedOpponentPlayer.getComponent("Bot") == null ? this._collidedOpponentPlayer.getComponent("Player") : this._collidedOpponentPlayer.getComponent("Bot");
            var currentPlayerScale = currentScript.getCurrentScale();
            var opponentPlayerScale = oppScript.getCurrentScale();
            var gainValue = opponentPlayerScale;
            if (currentPlayerScale < opponentPlayerScale) //bigger pushed
              gainValue = this.commonFun.harmonicMean([currentPlayerScale, opponentPlayerScale]) - currentPlayerScale + opponentPlayerScale;else if (currentPlayerScale > opponentPlayerScale) //smaller pushed
              gainValue = this.commonFun.harmonicMean([currentPlayerScale, opponentPlayerScale]);else //same size
              {
                gainValue = 0;
                var gainValue1 = GameConfig.powerup["GummyBear"].gainPercentage;
                oppScript.resize(gainValue1, true);
              }
            if (gainValue > 0) oppScript.increasePlayerScaleOnOpponentDeath(gainValue);
            oppScript.updateScore(GameConfig.commonData.deathScore);
            oppScript._totalSumoPushed++;
          }

          currentScript.removeAllHud();
          this.commonFun.removeObjectFromArray(this.gameController.botController._totalPlayerArrayList, event.selfCollider.node);
          this.gameController.getWorld().removeChild(event.selfCollider.node);
          var d = new Date();
          this.gameController.currentTime;
          var ob1 = {
            "name": this._charName,
            "time": d.getTime(),
            "isSelf": true
          };
          this.gameController.playerBoardData.push(ob1);

          if (this.gameController.botController._totalPlayerArrayList.length == 1) {
            var data = this.gameController.botController._totalPlayerArrayList[0];

            var _currentScript = data.getComponent("Bot") == null ? data.getComponent("Player") : data.getComponent("Bot");

            var ob1 = {
              "name": _currentScript._charName,
              "time": d.getTime(),
              "isSelf": false
            };
            this.gameController.playerBoardData.push(ob1);
          }
        };

        _proto._onCollisionEnter = function _onCollisionEnter(event) {
          var _this3 = this;

          var otherCollider = event.otherCollider;
          this._collidedOpponentPlayer = otherCollider.node;
          this.commonFun.setBumpStateAnimation(this);
          this.getComponent(RigidBodyComponent).clearVelocity();
          var pos1 = new Vec3(this.node.getPosition().x - otherCollider.node.getPosition().x, 0, this.node.getPosition().z - otherCollider.node.getPosition().z);

          var _vector = pos1.normalize();

          var bumpValue = this.getBumpValue(otherCollider.node);
          var pos = new Vec3(this.node.getPosition().x + bumpValue * _vector.x, this.node.getPosition().z + bumpValue * _vector.z); // console.log("bumpValuePlayer     "+bumpValue+"     bumpTime      "+GameConfig.commonData.bumpTime);

          if (this.bumpTween != null) {
            this.bumpTween.stop();
            clearTimeout(this.bumptimeTween);
          }

          this.bumpTween = tween(this.node).to(GameConfig.commonData.bumpTime, {
            position: new Vec3(pos.x, this.node.getPosition().y, pos.y)
          }).start();
          this.bumptimeTween = setTimeout(function () {
            _this3.getComponent(RigidBodyComponent).clearVelocity();

            _this3.commonFun.setWalkStateAnimation(_this3);

            _this3.bumptimeTween = null;
            _this3.bumptimeTween = setTimeout(function () {
              _this3._collidedOpponentPlayer = null;
            }, GameConfig.commonData.bumpTime * 1000);
          }, GameConfig.commonData.bumpTime * 1000);
        };

        _proto.updateScore = function updateScore(score) {
          this._score = this._score + score;
          if (this._score < 0) this._score = 0;
          this.characterHud.showScore(score);
          this.gameController.gameScore.string = "<color=#000000>" + "<size=56>" + "Score : " + "</size>" + "<color=#449b9a>" + "<size=56>" + this._score + "</size>";
        };

        _proto.increasePlayerScaleOnOpponentDeath = function increasePlayerScaleOnOpponentDeath(size) {
          var _this4 = this;

          if (this.getCurrentScale() <= this.maxScale) {
            this.setCurrentScale(this.getCurrentScale() + size);
            if (this.getCurrentScale() > this.maxScale) this.setCurrentScale(this.maxScale);
            tween(this.node.scale).to(1, new Vec3(this.currentScale, this.currentScale, this.currentScale)).call(function () {
              _this4.updateSpeed();
            }).start();
            this.characterHud.tweenPosition(this.getCurrentScale());
          }
        };

        _proto.getBumpValue = function getBumpValue(opponentPlayer) {
          var _this5 = this;

          if (this.checkSheildActive()) return 0;
          var oppScript = opponentPlayer.getComponent("Bot") == null ? opponentPlayer.getComponent("Player") : opponentPlayer.getComponent("Bot");
          var currentSpeed = this.speed;
          var currentSize = this.getCurrentScale();
          var updatedSize = this.getCurrentScale();
          var time = GameConfig.commonData.bumpTime;
          updatedSize = this.getBumpSize();

          if (this.getCurrentScale() > this.initialSize) {
            this.setCurrentScale(this.getCurrentScale() - updatedSize);
            if (this.getCurrentScale() < this.initialSize) this.setCurrentScale(this.initialSize);
            tween(this.node.scale).to(1, new Vec3(this.currentScale, this.currentScale, this.currentScale)).call(function () {
              _this5.updateSpeed();
            }).start();
            this.characterHud.tweenPosition(this.getCurrentScale());
          }

          this.updateSpeed();
          var dist = this.getSpeed() * oppScript.getCurrentScale();
          var isBumpedOnBack = this.checkDidBumpedOnBck(opponentPlayer);
          if (isBumpedOnBack) dist = dist * 2;
          var isPlayerBumpedOnOtherBack = this.isPlayerBumpedOnOtherBack(opponentPlayer);

          if (isPlayerBumpedOnOtherBack) {
            dist = this.getSpeed() * oppScript.getCurrentScale();
            dist = dist / 2;
          }

          return dist;
        };

        _proto.getBumpSize = function getBumpSize() {
          return this.commonFun.getPercentage(GameConfig.commonData.bumpSizeDecreasePercentage, this.getCurrentScale());
        };

        _proto.getCurrentScale = function getCurrentScale() {
          return this.currentScale;
        };

        _proto.setCurrentScale = function setCurrentScale(scale) {
          this.currentScale = scale;
        };

        _proto.sliderCallBack = function sliderCallBack(name, value) {
          var cameraNode = this.playerCamera.getChildByName('playerCamera');
          if (name == "YSlider") cameraNode.setPosition(new Vec3(cameraNode.position.x, value, cameraNode.position.z));else if (name == "ZSlider") cameraNode.setPosition(new Vec3(cameraNode.position.x, cameraNode.position.y, value));else if (name == "XSlider") cameraNode.setPosition(new Vec3(value, cameraNode.position.y, cameraNode.position.z));else if (name == "RYSlider") {
            cameraNode.eulerAngles = new Vec3(value, cameraNode.eulerAngles.y, cameraNode.eulerAngles.z);
          } else if (name == "RXSlider") {
            cameraNode.eulerAngles = new Vec3(cameraNode.eulerAngles.x, value, cameraNode.eulerAngles.z);
          } else if (name == "RZSlider") {
            cameraNode.eulerAngles = new Vec3(cameraNode.eulerAngles.x, cameraNode.eulerAngles.y, value);
          }
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
          this.characterHud.updateHudPos(namePos, this.playerCamera);
        };

        _proto.fix_update = function fix_update(dt) {
          if (this._currentState == STATE.BUMP) {
            return;
          }

          var currentSpeed = this.getSpeed();

          if (this._isPoisionSpeedActive && this._poisionSpeedActiveCount > 0) {
            currentSpeed = currentSpeed + this.commonFun.getPercentage(this._poisionSpeedActivePercentage * 100, this.speed);
          }

          if (this._isGainSpeedActive && this._gainSpeedActiveCount > 0) {
            currentSpeed = currentSpeed + this.commonFun.getPercentage(this._gainSpeedActivePercentage * 100, this.speed);
          }

          if (this._vector.lengthSqr() > 0) {
            if (this._currentState == STATE.IDLE) {
              this.commonFun.setWalkStateAnimation(this);
            }

            this.node.setPosition(this.node.position.add3f(this._vector.x * currentSpeed * dt, 0, -this._vector.y * currentSpeed * dt));
            this._currentPlayerPosition = new Vec3(this._vector.x, 0, this._vector.y); // this.playerCamera.setPosition(this.playerCamera.position.add3f(this._vector.x * currentSpeed * dt, 0, 0));
            // this.updateNamePos();
          } else {
            if (this._currentState == STATE.WALK) {
              this.commonFun.setIdleStateAnimation(this);
            } // this.node.setPosition(this.node.position.add3f(this._currentPlayerPosition.x * this.speed * dt, 0, -this._currentPlayerPosition.z * this.speed * dt));

          } // if (this._vectorAngle.lengthSqr() > 0) {
          //     this.playerCamera.eulerAngles = this.playerCamera.eulerAngles.add3f(0, -this._vectorAngle.x, 0);
          // } 

        };

        _proto.updateCamera = function updateCamera() {
          // let cameraNode = this.playerCamera.getChildByName('playerCamera');
          var target_position = new Vec2(this.node.getPosition().x, this.node.getPosition().z);
          target_position.lerp(target_position, 0.1);
          this.playerCamera.setPosition(new Vec3(target_position.x, this.node.getPosition().y, target_position.y));
        };

        _proto.update = function update(deltaTime) {
          if (parseInt(window.localStorage.getItem("isStopped"))) return;
          if (!this.isReady) return;
          this._now_time += deltaTime;

          while (this._now_time >= CELL_TIME) {
            this.updateNamePos();

            if (MxManager.instance.isMiloApp) {
              if (this.isSelfUpdateAllowed) {
                this.fix_update(CELL_TIME);
                this.updateCamera();
              }
            } else {
              this.fix_update(CELL_TIME);
              this.updateCamera();
            }

            this._now_time -= CELL_TIME;
          }
        };

        _proto.isPlayerBumpedOnOtherBack = function isPlayerBumpedOnOtherBack(otherCollider) {
          var p2 = new Vec2(this.node.getPosition().x, this.node.getPosition().z); // always will be the current node

          var p1 = new Vec2(otherCollider.getPosition().x, otherCollider.getPosition().z);
          var left = Math.round(otherCollider.eulerAngles.y) + 100;

          if (left > 180) {
            left -= 360;
          }

          var right = Math.round(otherCollider.eulerAngles.y) - 100;

          if (right < -180) {
            right += 360;
          }

          var hitAngle = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
          hitAngle = this.commonFun.findGameAngle(hitAngle);

          if (this.commonFun.angleBetweenAngle(hitAngle, left, right)) {
            return true;
          }

          return false;
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
          hitAngle = this.commonFun.findGameAngle(hitAngle);

          if (this.commonFun.angleBetweenAngle(hitAngle, left, right)) {
            return true;
          }

          return false;
        } // Milo work
        ;

        _proto.collisionReceivedFromServer = function collisionReceivedFromServer(data, collider) {
          var _this6 = this;

          this._collidedOpponentPlayer = collider.node;
          this.commonFun.setBumpStateAnimation(this);
          this.getComponent(RigidBodyComponent).clearVelocity(); // let _vector = data.vector;
          // var bumpValue = data.bumpValue;

          var pos = data.bumpPos; //new Vec3((this.node.getPosition().x) + (bumpValue * _vector.x), (this.node.getPosition().z) + (bumpValue * _vector.z));

          if (this.bumpTween != null) {
            this.bumpTween.stop();
            clearTimeout(this.bumptimeTween);
          }

          this.bumpTween = tween(this.node).to(GameConfig.commonData.bumpTime, {
            position: new Vec3(pos.x, this.node.getPosition().y, pos.y)
          }).start();
          this.bumptimeTween = setTimeout(function () {
            _this6.getComponent(RigidBodyComponent).clearVelocity();

            _this6.commonFun.setWalkStateAnimation(_this6);

            _this6.bumptimeTween = null;
            _this6.bumptimeTween = setTimeout(function () {
              _this6._collidedOpponentPlayer = null;

              _this6.afterCollison();
            }, GameConfig.commonData.bumpTime * 1000);
          }, GameConfig.commonData.bumpTime * 1000);
        };

        _proto.powerUpBumpListener = function powerUpBumpListener(data) {
          var _this7 = this;

          console.log('OnPoweruUpBump', data);

          if (data.resize) {
            var scale = data.scale;
            this.currentScale = scale;
            tween(this.node.scale).to(1, new Vec3(scale, scale, scale)).call(function () {
              _this7.updateSpeed();

              _this7.afterCollisonToPowerUp();
            }).start();

            if (data.isGain) {
              this.characterHud.tweenPosition(this.getCurrentScale());
              this.commonFun.setPowerGainAnimation(this);
            } else {
              this.characterHud.tweenPosition(this.getCurrentScale());
              this.commonFun.setPowerLoseAnimation(this);
            }
          } else {
            this.reEvaluateSpeed(data.gainValue, data.duration, data.isGain);
          }
        };

        _proto.afterCollison = function afterCollison() {
          SocketConnection.instance.send({
            command: SocketListener.ON_BUMP,
            data: {
              msg: 'After bump callback'
            }
          });
        };

        _proto.afterCollisonToPowerUp = function afterCollisonToPowerUp() {
          SocketConnection.instance.send({
            command: SocketListener.ON_POWERUP_BUMP,
            data: {
              msg: 'After powerup bump callback'
            }
          });
        };

        return Player;
      }(PlayerMovement), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/localConfig.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './resourceUtil.ts', './csvManager.ts'], function (exports) {
  'use strict';

  var _defineProperty, _createClass, cclegacy, _decorator, resourceUtil, csvManager;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      resourceUtil = module.resourceUtil;
    }, function (module) {
      csvManager = module.csvManager;
    }],
    execute: function () {
      var _dec, _class, _class2, _temp;

      cclegacy._RF.push({}, "b04c1Prv6lKsZf481h5hCUF", "localConfig", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var localConfig = exports('localConfig', (_dec = ccclass("localConfig"), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
        function localConfig() {
          _defineProperty(this, "csvManager", null);

          _defineProperty(this, "arrCars", []);

          _defineProperty(this, "_callback", null);

          _defineProperty(this, "_skills", {});

          _defineProperty(this, "currentLoad", 0);

          _defineProperty(this, "cntLoad", 0);

          _defineProperty(this, "servers", []);
        }

        var _proto = localConfig.prototype;

        _proto.loadConfig = function loadConfig(cb) {
          this._callback = cb;
          this.csvManager = new csvManager();
          this.loadCSV();
        };

        _proto.loadCSV = function loadCSV() {
          var _this = this; //新增数据表 请往该数组中添加....


          var arrTables = ['talk', 'car', 'signIn'];
          this.cntLoad = arrTables.length + 1; //+1主要是后续还有技能配置的加载，特殊处理
          //客户端加载

          arrTables.forEach(function (tableName, index, array) {
            resourceUtil.getData(tableName, function (err, content) {
              _this.csvManager.addTable(tableName, content);

              _this.tryToCallbackOnFinished();
            });
          }); //载入技能配置信息
          // resourceUtil.getData("skills", function (err, content) {
          //     _this._skills = JSON.parse(content);
          //     _this.tryToCallbackOnFinished();
          // });

          resourceUtil.getJsonData("servers", function (err, content) {
            _this.servers = content;

            _this.tryToCallbackOnFinished();
          });
        };

        _proto.queryOne = function queryOne(tableName, key, value) {
          return this.csvManager.queryOne(tableName, key, value);
        };

        _proto.queryByID = function queryByID(tableName, ID) {
          return this.csvManager.queryByID(tableName, ID);
        };

        _proto.getTable = function getTable(tableName) {
          return this.csvManager.getTable(tableName);
        };

        _proto.getTableArr = function getTableArr(tableName) {
          return this.csvManager.getTableArr(tableName);
        };

        _proto.getCars = function getCars() {
          if (this.arrCars.length > 0) {
            return this.arrCars;
          }

          var arr = localConfig.instance.getTableArr('car');
          this.arrCars = arr.sort(function (elementA, elementB) {
            return elementA.sort - elementB.sort;
          });
          return this.arrCars;
        } // 选出指定表里面所有有 key=>value 键值对的数据
        ;

        _proto.queryAll = function queryAll(tableName, key, value) {
          return this.csvManager.queryAll(tableName, key, value);
        } // 选出指定表里所有 key 的值在 values 数组中的数据，返回 Object，key 为 ID
        ;

        _proto.queryIn = function queryIn(tableName, key, values) {
          return this.csvManager.queryIn(tableName, key, values);
        } // 选出符合条件的数据。condition key 为表格的key，value 为值的数组。返回的object，key 为数据在表格的ID，value为具体数据
        ;

        _proto.queryByCondition = function queryByCondition(tableName, condition) {
          return this.csvManager.queryByCondition(tableName, condition);
        };

        _proto.tryToCallbackOnFinished = function tryToCallbackOnFinished() {
          if (this._callback) {
            this.currentLoad++;

            if (this.currentLoad >= this.cntLoad) {
              this._callback();
            }
          }
        };

        _proto.getCurrentServer = function getCurrentServer() {
          return this.servers[0];
        };

        _proto.getVersion = function getVersion() {
          var server = this.getCurrentServer();
          var version = server ? server.version : 'unknown';
          return version;
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        _createClass(localConfig, null, [{
          key: "instance",
          get: function get() {
            if (this._instance) {
              return this._instance;
            }

            this._instance = new localConfig();
            return this._instance;
          }
        }]);

        return localConfig;
      }(), _defineProperty(_class2, "_instance", void 0), _temp)) || _class));

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
      cclegacy._RF.push({}, "b14a73ELXhMArrIH12FDw58", "MiloManager", undefined);

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
        var urlArr = window.location.href.split('?');
        var userNum = "1";
        if (urlArr[1]) userNum = urlArr[1].split("user")[1];
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

System.register("chunks:///_virtual/shopMenu.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './mxManager.ts', './constant.ts', './audioManager.ts', './GameConfig.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Prefab, SpriteFrame, Material, Mesh, Node, Vec3, ScrollViewComponent, game, MeshRenderer, Animation, SkeletalAnimationComponent, Label, Sprite, instantiate, UITransform, RichText, tween, Component, MxManager, constant, audioManager, GameConfig;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      SpriteFrame = module.SpriteFrame;
      Material = module.Material;
      Mesh = module.Mesh;
      Node = module.Node;
      Vec3 = module.Vec3;
      ScrollViewComponent = module.ScrollViewComponent;
      game = module.game;
      MeshRenderer = module.MeshRenderer;
      Animation = module.Animation;
      SkeletalAnimationComponent = module.SkeletalAnimationComponent;
      Label = module.Label;
      Sprite = module.Sprite;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      RichText = module.RichText;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      MxManager = module.MxManager;
    }, function (module) {
      constant = module.constant;
    }, function (module) {
      audioManager = module.audioManager;
    }, function (module) {
      GameConfig = module.GameConfig;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _class4, _class5, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _temp2;

      cclegacy._RF.push({}, "bc1f9xPktZJfb90qNMLVw00", "shopMenu", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /**
       * Predefined variables
       * Name = ShopMenu
       * DateTime = Fri Jan 21 2022 12:26:31 GMT+0530 (India Standard Time)
       * Author = sushant
       * FileBasename = shopMenu.ts
       * FileBasenameNoExtension = shopMenu
       * URL = db://assets/Script/menuScene/shop/shopMenu.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      var Item = exports('Item', (_dec = ccclass('Item'), _dec2 = property(Prefab), _dec3 = property(SpriteFrame), _dec4 = property(Material), _dec5 = property(Mesh), _dec(_class = (_class2 = (_temp = function Item() {
        _initializerDefineProperty(this, "model", _descriptor, this);

        _initializerDefineProperty(this, "frame", _descriptor2, this);

        _initializerDefineProperty(this, "material", _descriptor3, this);

        _initializerDefineProperty(this, "mesh", _descriptor4, this);
      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "model", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "frame", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "material", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "mesh", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      var ShopMenu = exports('ShopMenu', (_dec6 = ccclass('ShopMenu'), _dec7 = property({
        type: Prefab
      }), _dec8 = property({
        type: Node
      }), _dec9 = property({
        type: Node
      }), _dec10 = property({
        type: Prefab
      }), _dec11 = property({
        type: Prefab
      }), _dec12 = property({
        type: Item
      }), _dec13 = property({
        type: Item
      }), _dec14 = property({
        type: Item
      }), _dec15 = property({
        type: Item
      }), _dec16 = property({
        type: SpriteFrame
      }), _dec17 = property({
        type: SpriteFrame
      }), _dec18 = property({
        type: SpriteFrame
      }), _dec19 = property({
        type: SpriteFrame
      }), _dec20 = property({
        type: SpriteFrame
      }), _dec21 = property({
        type: SpriteFrame
      }), _dec6(_class4 = (_class5 = (_temp2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ShopMenu, _Component);

        function ShopMenu() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "skinNode", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "buyNode", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "coinNode", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "characterSkinNode", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "foodSkinNode", _descriptor9, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "menuController", null);

          _initializerDefineProperty(_assertThisInitialized(_this), "bagAcceesories", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "headPhoneAcceesories", _descriptor11, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "gogglesAcceesories", _descriptor12, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "targetAcceesories", _descriptor13, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "accessoriesType", {
            "none": 0,
            "bag": 1,
            "headPhone": 2,
            "goggles": 3,
            "target": 4
          });

          _defineProperty(_assertThisInitialized(_this), "accessoriesArray", []);

          _defineProperty(_assertThisInitialized(_this), "characterSkinArray", []);

          _defineProperty(_assertThisInitialized(_this), "characterFoodArray", []);

          _defineProperty(_assertThisInitialized(_this), "scrollView", null);

          _defineProperty(_assertThisInitialized(_this), "scrollViewContent", null);

          _defineProperty(_assertThisInitialized(_this), "currentAccessoriesClicked", null);

          _defineProperty(_assertThisInitialized(_this), "selectedScaleValue", new Vec3(1.1, 1.1, 1.1));

          _defineProperty(_assertThisInitialized(_this), "unSelectedScaleValue", new Vec3(0.8, 0.8, 0.8));

          _initializerDefineProperty(_assertThisInitialized(_this), "characterSelectedframe", _descriptor14, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "characterUnSelectedframe", _descriptor15, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "foodSelectedframe", _descriptor16, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "foodUnSelectedframe", _descriptor17, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "accesSelectedframe", _descriptor18, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "accesUnSelectedframe", _descriptor19, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "buttonBlocked", false);

          return _this;
        }

        var _proto = ShopMenu.prototype;

        _proto.start = function start() {
          this.scrollView = this.node.getChildByName("shopScroll").getComponent(ScrollViewComponent);
          this.scrollViewContent = this.scrollView.content;
        };

        _proto.initialise = function initialise(canvas) {
          var _this2 = this;

          this.menuController = canvas;

          if (constant.isMiloEnabled()) {
            game.on('coinDeductAccessories', function (status) {
              _this2.coinDeductAccessories(status);
            }, this);
          } else {
            game.on('rewardinGameAccessories', function (status) {
              _this2.rewardinGameAccessories(status);
            }, this);
            game.on('rewardAdsExist', function (status) {
              _this2.rewardAdsExist(status);
            }, this);
          }

          this.coinNode.active = false;

          if (constant.isMiloEnabled()) {
            this.coinNode.active = true;
          }

          this.updateCoinData();
        };

        _proto.onSopBackButtonClick = function onSopBackButtonClick() {
          var _this3 = this;

          this.resetData();
          clearTimeout(this.menuController.animationTimeOut);
          this.menuController.sumo.setRotationFromEuler(this.menuController.sumo.eulerAngles.x, 0, this.menuController.sumo.eulerAngles.z);
          this.menuController.threedNode.getChildByName("bg").getComponent(MeshRenderer).setMaterial(this.menuController.menuMaterial, 0);
          var anim = this.menuController.node.getComponent(Animation);
          anim.play('shopClose');
          var skeletalAnimation = this.menuController.sumo.getChildByName("Penguine_Anim").getComponent(SkeletalAnimationComponent);
          skeletalAnimation.play('walk');
          setTimeout(function () {
            _this3.menuController.startAnimation();
          }, 500);
        };

        _proto.updateCoinData = function updateCoinData() {
          var coinValue = constant.getCoinBalance();
          this.coinNode.getChildByName("coinLabel").getComponent(Label).string = coinValue;
        };

        _proto.addAccessoriesScrollContent = function addAccessoriesScrollContent() {
          if (this.buttonBlocked) return;
          this.resetData();
          this.node.getChildByName("buttons").getChildByName("characterButton").getComponent(Sprite).spriteFrame = this.characterUnSelectedframe;
          this.node.getChildByName("buttons").getChildByName("accessoriesButton").getComponent(Sprite).spriteFrame = this.accesSelectedframe;
          this.node.getChildByName("buttons").getChildByName("FoodButton").getComponent(Sprite).spriteFrame = this.foodUnSelectedframe;
          var accessories = constant.getAccessories();

          for (var i = 0; i <= accessories.length; i++) {
            var _skin = instantiate(this.skinNode);

            this.scrollViewContent.addChild(_skin);

            var skincomponent = _skin.getComponent("Skin");

            skincomponent.initialiseData(accessories[i], i, this);
            if (i < accessories.length) this.accessoriesArray.push(_skin);
          }

          var skin1 = instantiate(this.skinNode);
          var heiight = skin1.getComponent(UITransform).height * Math.ceil(accessories.length / 3) + 10 * Math.ceil(accessories.length / 3);
          this.scrollViewContent.getComponent(UITransform).height = heiight;
        };

        _proto.addCharacterScrollContent = function addCharacterScrollContent() {
          if (this.buttonBlocked) return;
          this.resetData();
          this.node.getChildByName("buttons").getChildByName("characterButton").getComponent(Sprite).spriteFrame = this.characterSelectedframe;
          this.node.getChildByName("buttons").getChildByName("accessoriesButton").getComponent(Sprite).spriteFrame = this.accesUnSelectedframe;
          this.node.getChildByName("buttons").getChildByName("FoodButton").getComponent(Sprite).spriteFrame = this.foodUnSelectedframe;
          var accessoriesSkin = constant.getSkin();

          for (var i = 0; i <= accessoriesSkin.length; i++) {
            var _skin2 = instantiate(this.characterSkinNode);

            this.scrollViewContent.addChild(_skin2);

            var skincomponent = _skin2.getComponent("CharacterSkins");

            skincomponent.initialiseData(accessoriesSkin[i], i, this);
            if (i < accessoriesSkin.length) this.characterSkinArray.push(_skin2);
          }

          var skin1 = instantiate(this.characterSkinNode);
          var heiight = skin1.getComponent(UITransform).height * Math.ceil(accessoriesSkin.length / 3) + 10 * Math.ceil(accessoriesSkin.length / 3);
          this.scrollViewContent.getComponent(UITransform).height = heiight;
        };

        _proto.addFoodScrollContent = function addFoodScrollContent() {
          if (this.buttonBlocked) return;
          this.resetData();
          this.menuController.sumo.active = false;
          this.node.getChildByName("buttons").getChildByName("characterButton").getComponent(Sprite).spriteFrame = this.characterUnSelectedframe;
          this.node.getChildByName("buttons").getChildByName("accessoriesButton").getComponent(Sprite).spriteFrame = this.accesUnSelectedframe;
          this.node.getChildByName("buttons").getChildByName("FoodButton").getComponent(Sprite).spriteFrame = this.foodSelectedframe;
          var accessoriesfoodSkin = constant.getFood();

          for (var i = 0; i <= accessoriesfoodSkin.length; i++) {
            var _skin3 = instantiate(this.foodSkinNode);

            this.scrollViewContent.addChild(_skin3);

            var skincomponent = _skin3.getComponent("FoodSkins");

            skincomponent.initialiseData(accessoriesfoodSkin[i], i, this);
            if (i < accessoriesfoodSkin.length) this.characterFoodArray.push(_skin3);
          }

          var skin1 = instantiate(this.foodSkinNode);
          var heiight = skin1.getComponent(UITransform).height * Math.ceil(accessoriesfoodSkin.length / 3) + 10 * Math.ceil(accessoriesfoodSkin.length / 3);
          this.scrollViewContent.getComponent(UITransform).height = heiight;
        };

        _proto.resetData = function resetData() {
          audioManager.instance.playSound(constant.AUDIO_SOUND.buttonClick);
          this.menuController.sumo.active = true;
          this.menuController.playerNode.getChildByName("foodNode").removeAllChildren();
          this.scrollViewContent.removeAllChildren();
        };

        _proto.updatePlayerAccessoriesData = function updatePlayerAccessoriesData(skinType, count) {
          switch (skinType) {
            case 0:
              this.menuController.playerData.character = count;
              break;

            case 1:
              this.menuController.playerData.bag = count;
              break;

            case 2:
              this.menuController.playerData.headPhone = count;
              break;

            case 3:
              this.menuController.playerData.goggles = count;
              break;

            case 4:
              this.menuController.playerData.target = count;
              break;

            case 5:
              this.menuController.playerData.food = count;
              break;
          }

          var strngData = JSON.stringify(this.menuController.playerData);
          window.localStorage.setItem("playerData", strngData);
        };

        _proto.onShowBuyPopup = function onShowBuyPopup(buynode) {
          audioManager.instance.playSound(constant.AUDIO_SOUND.buttonClick);
          this.currentAccessoriesClicked = buynode;
          var text = constant.TEXT.BUYCOIN;

          if (constant.isMiloEnabled()) {
            var buyAmount = GameConfig.purchases.accessories;
            text = constant.TEXT.BUYCOIN;
            text = text.replace("@", buynode.skinName);
            text = text.replace("#", buyAmount.toString());
            this.buyNode.getChildByName("popup").getChildByName("textPopup").getComponent(RichText).string = "<color=#000000>" + "<size=60>" + text + "</size>";
            if (constant.getCoinBalance() < buyAmount) return;
          } else {
            text = constant.TEXT.WATCHAD;
            text = text.replace("@", buynode.skinName);
            this.buyNode.getChildByName("popup").getChildByName("textPopup").getComponent(RichText).string = "<color=#000000>" + "<size=60>" + text + "</size>";
            MxManager.instance.onCheckRewardedVideoAds('rewardAdsExist', this);
            return;
          }

          this.buyNode.active = true;
        };

        _proto.rewardAdsExist = function rewardAdsExist(args) {
          var status = args && args.status;

          if (status == 0) {
            this.buyNode.active = true;
          }
        };

        _proto.rewardinGameAccessories = function rewardinGameAccessories(args) {
          var status = args && args.status;

          if (status === 0) {
            this.activateAccessories();
          }

          this.onBuyClosed();
        };

        _proto.coinDeductAccessories = function coinDeductAccessories(status) {
          if (status == undefined || status == null) {
            this.onBuyClosed();
            return;
          }

          status = JSON.parse(status);

          if (status.success) {
            //deduct coins
            constant.setCoinBalance(status.balance);
            this.updateCoinData();
            this.activateAccessories();
          }

          this.onBuyClosed();
        };

        _proto.onBuyclicked = function onBuyclicked() {
          audioManager.instance.playSound(constant.AUDIO_SOUND.buttonClick);

          if (this.currentAccessoriesClicked != null) {
            if (constant.isMiloEnabled()) {
              var data = {
                type: 'accessories'
              };
              MxManager.instance.deductCoins('coinDeductAccessories', data, this);
            } else {
              MxManager.instance.onShowRewardedVideoAds('rewardinGameAccessories', this);
            }
          }
        };

        _proto.activateAccessories = function activateAccessories() {
          this.currentAccessoriesClicked.isActive = true;
          constant.updateAccessories(this.currentAccessoriesClicked.type, this.currentAccessoriesClicked.currentIndex);
          tween(this.currentAccessoriesClicked.node.getChildByName("lockIcon")).to(0.1, {
            position: new Vec3(100, -100, 0)
          }).to(0.5, {
            scale: new Vec3(2, 2, 2)
          }).to(0.1, {
            scale: new Vec3(0, 0, 0)
          }).start();
          this.onBuyClosed();
        };

        _proto.onBuyClosed = function onBuyClosed() {
          audioManager.instance.playSound(constant.AUDIO_SOUND.buttonClick);
          this.currentAccessoriesClicked = null;
          this.buyNode.active = false;
        };

        _proto.onLayerClicked = function onLayerClicked() {};

        return ShopMenu;
      }(Component), _temp2), (_descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "skinNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "buyNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class5.prototype, "coinNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class5.prototype, "characterSkinNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class5.prototype, "foodSkinNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class5.prototype, "bagAcceesories", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class5.prototype, "headPhoneAcceesories", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class5.prototype, "gogglesAcceesories", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class5.prototype, "targetAcceesories", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class5.prototype, "characterSelectedframe", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class5.prototype, "characterUnSelectedframe", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class5.prototype, "foodSelectedframe", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class5.prototype, "foodUnSelectedframe", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class5.prototype, "accesSelectedframe", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class5.prototype, "accesUnSelectedframe", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class5)) || _class4));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/lodash.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, _decorator;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class, _class2, _temp;

      cclegacy._RF.push({}, "bf88fX3aSFOYLiDYhjB7I97", "lodash", undefined);

      var ccclass = _decorator.ccclass;
      var lodash = exports('lodash', (_dec = ccclass("lodash"), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
        function lodash() {}
        /* class member could be defined like this */
        // dummy = '';


        lodash.find = function find(collection, predicate) {
          var result;

          if (!Array.isArray(collection)) {
            collection = this.toArray(collection);
          }

          result = collection.filter(predicate);

          if (result.length) {
            return result[0];
          }

          return undefined;
        };

        lodash.forEach = function forEach(collection, iteratee) {
          if (!Array.isArray(collection)) {
            var _array = this.toArrayKey(collection);

            _array.forEach(function (value, index, arr) {
              var key1 = value['key'];
              var value1 = value['value'];
              iteratee(value1, key1, collection);
            });
          } else {
            collection.forEach(iteratee);
          }
        };

        lodash.cloneDeep = function cloneDeep(sObj) {
          if (sObj === null || typeof sObj !== "object") {
            return sObj;
          }

          var s = {};

          if (sObj.constructor === Array) {
            s = [];
          }

          for (var i in sObj) {
            if (sObj.hasOwnProperty(i)) {
              s[i] = this.cloneDeep(sObj[i]);
            }
          }

          return s;
        };

        lodash.map = function map(collection, iteratee) {
          if (!Array.isArray(collection)) {
            collection = this.toArray(collection);
          }

          var arr = [];
          collection.forEach(function (value, index, array) {
            arr.push(iteratee(value, index, array));
          });
          return arr;
        };

        lodash.random = function random(min, max) {
          var r = Math.random();
          var rr = r * (max - min + 1) + min;
          return Math.floor(rr);
        };

        lodash.toArrayKey = function toArrayKey(srcObj) {
          var resultArr = []; // to array

          for (var _key in srcObj) {
            if (!srcObj.hasOwnProperty(_key)) {
              continue;
            }

            resultArr.push({
              key: _key,
              value: srcObj[_key]
            });
          }

          return resultArr;
        };

        lodash.toArray = function toArray(srcObj) {
          var resultArr = []; // to array

          for (var _key2 in srcObj) {
            if (!srcObj.hasOwnProperty(_key2)) {
              continue;
            }

            resultArr.push(srcObj[_key2]);
          }

          return resultArr;
        };

        lodash.filter = function filter(collection, iteratees) {
          if (!Array.isArray(collection)) {
            collection = this.toArray(collection);
          }

          return collection.filter(iteratees);
        };

        lodash.isEqual = function isEqual(x, y) {
          var in1 = x instanceof Object;
          var in2 = y instanceof Object;

          if (!in1 || !in2) {
            return x === y;
          }

          if (Object.keys(x).length !== Object.keys(y).length) {
            return false;
          }

          for (var p in x) {
            var a = x[p] instanceof Object;
            var b = y[p] instanceof Object;

            if (a && b) {
              return this.isEqual(x[p], y[p]);
            } else if (x[p] !== y[p]) {
              return false;
            }
          }

          return true;
        };

        lodash.pullAllWith = function pullAllWith(array, value, comparator) {
          value.forEach(function (item) {
            var res = array.filter(function (n) {
              return comparator(n, item);
            });
            res.forEach(function (item) {
              var index = array.indexOf(item);

              if (array.indexOf(item) !== -1) {
                array.splice(index, 1);
              }
            });
          });
          return array;
        };

        lodash.now = function now() {
          return Date.now();
        };

        lodash.pullAll = function pullAll(array, value) {
          value.forEach(function (item) {
            var index = array.indexOf(item);

            if (array.indexOf(item) !== -1) {
              array.splice(index, 1);
            }
          });
          return array;
        };

        lodash.forEachRight = function forEachRight(collection, iteratee) {
          if (!Array.isArray(collection)) {
            collection = this.toArray(collection);
          }

          for (var i = collection.length - 1; i >= 0; i--) {
            var ret = iteratee(collection[i]);
            if (!ret) break;
          }
        };

        lodash.startsWith = function startsWith(str, target, position) {
          str = str.substr(position);
          return str.startsWith(target);
        };

        lodash.endsWith = function endsWith(str, target, position) {
          str = str.substr(position);
          return str.endsWith(target);
        };

        lodash.remove = function remove(array, predicate) {
          var result = [];
          var indexes = [];
          array.forEach(function (item, index) {
            if (predicate(item)) {
              result.push(item);
              indexes.push(index);
            }
          });
          this.basePullAt(array, indexes);
          return result;
        };

        lodash.basePullAt = function basePullAt(array, indexes) {
          var length = array ? indexes.length : 0;
          var lastIndex = length - 1;
          var previous;

          while (length--) {
            var index = indexes[length];

            if (length === lastIndex || index !== previous) {
              previous = index;
              Array.prototype.splice.call(array, index, 1);
            }
          }

          return array;
        };

        lodash.findIndex = function findIndex(array, predicate, fromIndex) {
          array = array.slice(fromIndex);
          var i;

          if (typeof predicate === "function") {
            for (i = 0; i < array.length; i++) {
              if (predicate(array[i])) {
                return i;
              }
            }
          } else if (Array.isArray(predicate)) {
            for (i = 0; i < array.length; i++) {
              var key = predicate[0];
              var vaule = true;

              if (predicate.length > 1) {
                vaule = predicate[1];
              }

              if (array[i][key] === vaule) {
                return i;
              }
            }
          } else {
            for (i = 0; i < array.length; i++) {
              if (array[i] === predicate) {
                return i;
              }
            }
          }

          return -1;
        };

        lodash.concat = function concat() {
          var length = arguments.length;

          if (!length) {
            return [];
          }

          var array = arguments[0];
          var index = 1;

          while (index < length) {
            array = array.concat(arguments[index]);
            index++;
          }

          return array;
        };

        lodash.isNumber = function isNumber(value) {
          return typeof value === 'number';
        };

        lodash.indexOf = function indexOf(array, value, fromIndex) {
          array = array.slice(fromIndex);
          return array.indexOf(value);
        };

        lodash.join = function join(array, separator) {
          if (array === null) return '';
          var result = '';
          array.forEach(function (item) {
            result += item + separator;
          });
          return result.substr(0, result.length - 1);
        };

        lodash.split = function split(str, separator, limit) {
          return str.split(separator, limit);
        };

        lodash.max = function max(array) {
          if (array && array.length) {
            var result;

            for (var i = 0; i < array.length; i++) {
              if (i === 0) {
                result = array[0];
              } else if (result < array[i]) {
                result = array[i];
              }
            }

            return result;
          }

          return undefined;
        };

        lodash.drop = function drop(array, n) {
          var length = array === null ? 0 : array.length;

          if (!length) {
            return [];
          }

          return array.slice(n);
        };

        lodash.flattenDeep = function flattenDeep(arr) {
          return arr.reduce(function (prev, cur) {
            return prev.concat(
            /*Array.isArray(cur) ? this.flattenDeep(cur) :*/
            cur);
          });
        };

        lodash.uniq = function uniq(array) {
          var result = [];
          array.forEach(function (item) {
            if (result.indexOf(item) === -1) {
              result.push(item);
            }
          });
          return result;
        };

        lodash.isNaN = function isNaN(value) {
          // An `NaN` primitive is the only value that is not equal to itself.
          // Perform the `toStringTag` check first to avoid errors with some
          // ActiveX objects in IE.
          return this.isNumber(value) && value !== +value;
        };

        lodash.chunk = function chunk(array, size) {
          var length = array === null ? 0 : array.length;

          if (!length || size < 1) {
            return [];
          }

          var result = [];

          while (array.length > size) {
            result.push(array.slice(0, size));
            array = array.slice(size);
          }

          result.push(array);
          return result;
        };

        lodash.toFinite = function toFinite(value) {
          var INFINITY = 1 / 0;
          var MAX_INTEGER = 1.7976931348623157e+308;

          if (!value) {
            return value === 0 ? value : 0;
          }

          value = Number(value);

          if (value === INFINITY || value === -INFINITY) {
            var sign = value < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
          }

          return value === value ? value : 0;
        };

        lodash.baseRange = function baseRange(start, end, step, fromRight) {
          var nativeMax = Math.max;
          var nativeCeil = Math.ceil;
          var index = -1,
              length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
              result = Array(length);

          while (length--) {
            result[fromRight ? length : ++index] = start;
            start += step;
          }

          return result;
        };

        lodash.isObject = function isObject(value) {
          var type = typeof value;
          return value !== null && (type === 'object' || type === 'function');
        };

        lodash.isLength = function isLength(value) {
          return typeof value === 'number' && value > -1 && value % 1 === 0 && value <= lodash.MAX_SAFE_INTEGER;
        };

        lodash.isArrayLike = function isArrayLike(value) {
          return value !== null && this.isLength(value.length)
          /*&& !isFunction(value)*/
          ;
        };

        lodash.eq = function eq(value, other) {
          return value === other || value !== value && other !== other;
        };

        lodash.isIndex = function isIndex(value, length) {
          var type = typeof value;
          length = length === null ? lodash.MAX_SAFE_INTEGER : length;
          var reIsUint = /^(?:0|[1-9]\d*)$/;
          return !!length && (type === 'number' || type !== 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 === 0 && value < length;
        };

        lodash.isIterateeCall = function isIterateeCall(value, index, object) {
          if (!this.isObject(object)) {
            return false;
          }

          var type = typeof index;

          if (type === 'number' ? this.isArrayLike(object) && this.isIndex(index, object.length) : type === 'string' && index in object) {
            return this.eq(object[index], value);
          }

          return false;
        };

        lodash.createRange = function createRange(fromRight) {
          var _this = this;

          return function (start, end, step) {
            if (step && typeof step !== 'number' && _this.isIterateeCall(start, end, step)) {
              end = step = undefined;
            } // Ensure the sign of `-0` is preserved.


            start = _this.toFinite(start);

            if (end === undefined) {
              end = start;
              start = 0;
            } else {
              end = _this.toFinite(end);
            }

            step = step === undefined ? start < end ? 1 : -1 : _this.toFinite(step);
            return _this.baseRange(start, end, step, fromRight);
          }.bind(this);
        };

        lodash.maxBy = function maxBy(array, predicate) {
          if (array && array.length) {
            var result = -1;
            var objResult = -1;

            for (var i = 0; i < array.length; i++) {
              if (i === 0) {
                result = predicate(array[0]);
                objResult = array[0];
              } else if (result < array[i]) {
                result = array[i];
                objResult = array[i];
              }
            }

            return objResult;
          }

          return undefined;
        };

        lodash.minBy = function minBy(array, predicate) {
          if (array && array.length) {
            var result = -1;
            var objResult = -1;

            for (var i = 0; i < array.length; i++) {
              if (i === 0) {
                result = predicate(array[0]);
                objResult = array[0];
              } else if (result > array[i]) {
                result = predicate(array[i]);
                objResult = array[i];
              }
            }

            return objResult;
          }

          return undefined;
        };

        lodash.sumBy = function sumBy(collection, predicate) {
          var sum = 0;

          for (var _key3 in collection) {
            sum += predicate(collection[_key3]);
          }

          return sum;
        };

        lodash.countBy = function countBy(collection) {
          var objRet = {};

          for (var _key4 in collection) {
            var _value = collection[_key4];

            if (objRet.hasOwnProperty(_value)) {
              objRet[_value] += 1;
            } else {
              objRet[_value] = 1;
            }
          }

          return objRet;
        };

        return lodash;
      }(), _defineProperty(_class2, "MAX_SAFE_INTEGER", 9007199254740991), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, _decorator;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "c73dePapjJAnLg+9aXUBSrj", "GameManager", undefined);

      var ccclass = _decorator.ccclass;
      var GameManager = exports('GameManager', (_dec = ccclass('GameManager'), _dec(_class = (_temp = /*#__PURE__*/function () {
        function GameManager() {
          _defineProperty(this, "initInfo", {
            "players": [{
              "bot": false,
              "host": true,
              "name": "Player1",
              "profilePicUrl": "https://i.picsum.photos/id/177/200/200.jpg?hmac=785Vry8HsdS9dQ7mFYbwV8bR2tWVtzJWWl9YLp6L0n8",
              "userId": "mx-user-1"
            }]
          });

          _defineProperty(this, "userInfo", {
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
          });
        }

        var _proto = GameManager.prototype;

        _proto.setData = function setData(initInfo) {};

        _proto.onGameInit = function onGameInit() {};

        _proto.onGameOver = function onGameOver() {};

        _proto.onGameStart = function onGameStart() {};

        _proto.onError = function onError() {};

        return GameManager;
      }(), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/clientEvent.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './oneToMultiListener.ts'], function (exports) {
  'use strict';

  var _defineProperty, _inheritsLoose, cclegacy, _decorator, oneToMultiListener;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      oneToMultiListener = module.oneToMultiListener;
    }],
    execute: function () {
      var _dec, _class, _class2, _temp;

      cclegacy._RF.push({}, "e0d8biI9TpEO6Z8pVTWWXiY", "clientEvent", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var clientEvent = exports('clientEvent', (_dec = ccclass("clientEvent"), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_oneToMultiListener) {
        _inheritsLoose(clientEvent, _oneToMultiListener);

        function clientEvent() {
          return _oneToMultiListener.apply(this, arguments) || this;
        }

        return clientEvent;
      }(oneToMultiListener), _defineProperty(_class2, "handlers", {}), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameConfig.ts", ['cc', './mxManager.ts'], function (exports) {
  'use strict';

  var cclegacy, MxManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      MxManager = module.MxManager;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e823dOXK0JI6raju8IgRB5T", "GameConfig", undefined);

      var GameConfig = exports('GameConfig', {
        "network": {
          "dataPerSec": 10
        },
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
        "gameStartTime": 30,
        "gameplay": {
          "levels": [{
            "noOfBotsInGame": 1,
            "botsProbabilty": {
              "easy": 1,
              "medium": 0,
              "hard": 0
            },
            "time": 300,
            "map": {
              "currentMap": "triangle"
            },
            "powerUp": {
              "totalSpawn": 0.5,
              "initialiseDuration": 5,
              "spawnDuration": 5,
              "spawnProbability": {
                "PoisionSize": 20,
                "PoisionSpeed": 20,
                "GainSpeed": 30,
                "Sheild": 30
              }
            }
          }, {
            "noOfBotsInGame": 8,
            "botsProbabilty": {
              "easy": 0.4,
              "medium": 0.4,
              "hard": 0.2
            },
            "time": 300,
            "map": {
              "currentMap": "triangle"
            },
            "powerUp": {
              "totalSpawn": 0.5,
              "initialiseDuration": 5,
              "spawnDuration": 5,
              "spawnProbability": {
                "PoisionSize": 20,
                "PoisionSpeed": 20,
                "GainSpeed": 30,
                "Sheild": 30
              }
            }
          }],
          "default": {
            "noOfBotsInGame": 1,
            "botsProbabilty": {
              "easy": 1,
              "medium": 0,
              "hard": 0
            },
            "time": 100,
            "map": {
              "currentMap": "triangle"
            },
            "powerUp": {
              "totalSpawn": 0.5,
              "initialiseDuration": 5,
              "spawnDuration": 5,
              "spawnProbability": {
                "PoisionSize": 20,
                "PoisionSpeed": 20,
                "GainSpeed": 20,
                "Sheild": 40
              }
            }
          }
        },
        "purchases": {
          "accessories": 1
        },
        "player": {
          "initialSize": 0.5,
          "playerMaxSize": 2,
          "playerStartSpeed": 6,
          "playerEndSpeed": 5
        },
        "debug": {
          "camera": {
            "angleChange": false,
            "isdebugEnabled": false,
            "Yangle": -35,
            "Xangle": 0,
            "Zangle": 0,
            "YAxis": 15,
            "ZAxis": 15,
            "XAxis": 0
          },
          "playerPos": 0,
          "mapList": ["triangle", "circular", "infinite", "star", "square"],
          "mapDefault": "isRandom"
        },
        "bot": {
          "initialSize": 0.5,
          "botMaxSize": 2,
          "botConfig": {
            "easy": {
              "criticalMass": 1,
              "botStartSpeed": 6,
              "botEndSpeed": 5
            },
            "medium": {
              "criticalMass": 1,
              "botStartSpeed": 8,
              "botEndSpeed": 5
            },
            "hard": {
              "criticalMass": 1,
              "botStartSpeed": 8,
              "botEndSpeed": 7
            }
          }
        },
        "commonData": {
          "deathPercent": 50,
          "deathScore": 10,
          "bumpTime": 0.5,
          "bumpSizeDecreasePercentage": 10
        },
        "obstacles": {
          "nonMovable": {
            "sizeDecreasePercent": 2
          }
        },
        "powerup": {
          "GummyBear": {
            "gainPercentage": 0.2,
            "score": 10,
            "size": 1
          },
          "PoisionSize": {
            "lossPercentage": 0.2,
            "score": -10,
            "size": 1
          },
          "PoisionSpeed": {
            "lossSpeedPercentage": 0.2,
            "score": -10,
            "size": 1,
            "duration": 10
          },
          "GainSpeed": {
            "increaseSpeedPercentage": 0.5,
            "score": 10,
            "size": 1,
            "duration": 10
          },
          "Sheild": {
            "score": 10,
            "duration": 10
          }
        }
      });
      MxManager.instance.init();
      var latestGameConfig = MxManager.instance.onGameInit();

      if (latestGameConfig != null && !(Object.keys(latestGameConfig).length === 0 && latestGameConfig.constructor === Object)) {
        GameConfig = exports('GameConfig', latestGameConfig);
      }

      console.log("CurrentGameConfig ----   " + JSON.stringify(GameConfig));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/util.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy, _decorator;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "f38ecZtzoND0r955vpu2xww", "util", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var util = exports('util', (_dec = ccclass("util"), _dec(_class = /*#__PURE__*/function () {
        function util() {}
        /**
         * !#zh 拷贝object。
         */


        util.clone = function clone(sObj) {
          if (sObj === null || typeof sObj !== "object") {
            return sObj;
          }

          var s = {};

          if (sObj.constructor === Array) {
            s = [];
          }

          for (var i in sObj) {
            if (sObj.hasOwnProperty(i)) {
              s[i] = this.clone(sObj[i]);
            }
          }

          return s;
        }
        /**
         * 将object转化为数组。
         */
        ;

        util.objectToArray = function objectToArray(srcObj) {
          var resultArr = []; // to array

          for (var key in srcObj) {
            if (!srcObj.hasOwnProperty(key)) {
              continue;
            }

            resultArr.push(srcObj[key]);
          }

          return resultArr;
        }
        /**
         * !#zh 将数组转化为object。
         */
        ;

        util.arrayToObject = function arrayToObject(srcObj, objectKey) {
          var resultObj = {}; // to object

          for (var key in srcObj) {
            if (!srcObj.hasOwnProperty(key) || !srcObj[key][objectKey]) {
              continue;
            }

            resultObj[srcObj[key][objectKey]] = srcObj[key];
          }

          return resultObj;
        } // 根据权重,计算随机内容
        ;

        util.getWeightRandIndex = function getWeightRandIndex(weightArr, totalWeight) {
          var randWeight = Math.floor(Math.random() * totalWeight);
          var sum = 0;
          var weightIndex = 0;

          for (weightIndex; weightIndex < weightArr.length; weightIndex++) {
            sum += weightArr[weightIndex];

            if (randWeight < sum) {
              break;
            }
          }

          return weightIndex;
        }
        /**
         * 从n个数中获取m个随机数
         * @param {Number} n   总数
         * @param {Number} m    获取数
         * @returns {Array} array   获取数列
         */
        ;

        util.getRandomNFromM = function getRandomNFromM(n, m) {
          var array = [];
          var intRd = 0;
          var count = 0;

          while (count < m) {
            if (count >= n + 1) {
              break;
            }

            intRd = this.getRandomInt(0, n);
            var flag = 0;

            for (var i = 0; i < count; i++) {
              if (array[i] === intRd) {
                flag = 1;
                break;
              }
            }

            if (flag === 0) {
              array[count] = intRd;
              count++;
            }
          }

          return array;
        };

        util.getRandomInt = function getRandomInt(min, max) {
          var r = Math.random();
          var rr = r * (max - min + 1) + min;
          return Math.floor(rr);
        };

        util.getStringLength = function getStringLength(render) {
          var strArr = render;
          var len = 0;

          for (var i = 0, n = strArr.length; i < n; i++) {
            var val = strArr.charCodeAt(i);

            if (val <= 255) {
              len = len + 1;
            } else {
              len = len + 2;
            }
          }

          return Math.ceil(len / 2);
        }
        /**
         * 判断传入的参数是否为空的Object。数组或undefined会返回false
         * @param obj
         */
        ;

        util.isEmptyObject = function isEmptyObject(obj) {
          var result = true;

          if (obj && obj.constructor === Object) {
            for (var key in obj) {
              if (obj.hasOwnProperty(key)) {
                result = false;
                break;
              }
            }
          } else {
            result = false;
          }

          return result;
        };

        util.formatNum = function formatNum(num) {
          // 0 和负数均返回 NaN。特殊处理。
          if (num <= 0) {
            return '0';
          }

          var k = 1000;
          var sizes = ['', '', 'K', 'M', 'B'];
          var i = Math.round(Math.log(num) / Math.log(k));
          return parseInt((num / Math.pow(k, i - 1 < 0 ? 0 : i - 1)).toString(), 10) + sizes[i];
        }
        /**
         * 判断是否是新的一天
         * @param {Object|Number} dateValue 时间对象 todo MessageCenter 与 pve 相关的时间存储建议改为 Date 类型
         * @returns {boolean}
         */
        ;

        util.isNewDay = function isNewDay(dateValue) {
          // todo：是否需要判断时区？
          var oldDate = new Date(dateValue);
          var curDate = new Date();
          var oldYear = oldDate.getFullYear();
          var oldMonth = oldDate.getMonth();
          var oldDay = oldDate.getDate();
          var curYear = curDate.getFullYear();
          var curMonth = curDate.getMonth();
          var curDay = curDate.getDate();

          if (curYear > oldYear) {
            return true;
          } else {
            if (curMonth > oldMonth) {
              return true;
            } else {
              if (curDay > oldDay) {
                return true;
              }
            }
          }

          return false;
        };

        util.getPropertyCount = function getPropertyCount(o) {
          var n,
              count = 0;

          for (n in o) {
            if (o.hasOwnProperty(n)) {
              count++;
            }
          }

          return count;
        }
        /**
         * 返回一个差异化数组（将array中diff里的值去掉）
         * @param array
         * @param diff
         */
        ;

        util.difference = function difference(array, diff) {
          var result = [];

          if (array.constructor !== Array || diff.constructor !== Array) {
            return result;
          }

          var length = array.length;

          for (var i = 0; i < length; i++) {
            if (diff.indexOf(array[i]) === -1) {
              result.push(array[i]);
            }
          }

          return result;
        } // 模拟传msg的uuid
        ;

        util.simulationUUID = function simulationUUID() {
          function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
          }

          return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        };

        util.trim = function trim(str) {
          return str.replace(/(^\s*)|(\s*$)/g, "");
        }
        /**
         * 判断当前时间是否在有效时间内
         * @param {String|Number} start 起始时间。带有时区信息
         * @param {String|Number} end 结束时间。带有时区信息
         */
        ;

        util.isNowValid = function isNowValid(start, end) {
          var startTime = new Date(start);
          var endTime = new Date(end);
          var result = false;

          if (startTime.getDate() + '' !== 'NaN' && endTime.getDate() + '' !== 'NaN') {
            var curDate = new Date();
            result = curDate < endTime && curDate > startTime;
          }

          return result;
        };

        util.getDeltaDays = function getDeltaDays(start, end) {
          var startData = new Date(start);
          var endData = new Date(end);
          var startYear = startData.getFullYear();
          var startMonth = startData.getMonth() + 1;
          var startDate = startData.getDate();
          var endYear = endData.getFullYear();
          var endMonth = endData.getMonth() + 1;
          var endDate = endData.getDate();
          start = new Date(startYear + '/' + startMonth + '/' + startDate + ' GMT+0800').getTime();
          end = new Date(endYear + '/' + endMonth + '/' + endDate + ' GMT+0800').getTime();
          var deltaTime = end - start;
          return Math.floor(deltaTime / (24 * 60 * 60 * 1000));
        };

        util.getMin = function getMin(array) {
          var result = 0;

          if (array.constructor === Array) {
            var length = array.length;

            for (var i = 0; i < length; i++) {
              if (i === 0) {
                result = Number(array[0]);
              } else {
                result = result > Number(array[i]) ? Number(array[i]) : result;
              }
            }
          }

          return result;
        };

        util.formatTwoDigits = function formatTwoDigits(time) {
          return (Array(2).join('0') + time).slice(-2);
        };

        util.formatDate = function formatDate(date, fmt) {
          var o = {
            "M+": date.getMonth() + 1,
            //月份
            "d+": date.getDate(),
            //日
            "h+": date.getHours(),
            //小时
            "m+": date.getMinutes(),
            //分
            "s+": date.getSeconds(),
            //秒
            "q+": Math.floor((date.getMonth() + 3) / 3),
            //季度
            "S": date.getMilliseconds() //毫秒

          };
          if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));

          for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? "" + o[k] : ("00" + o[k]).substr(("" + o[k]).length));
          }

          return fmt;
        }
        /**
         * 获取格式化后的日期（不含小时分秒）
         */
        ;

        util.getDay = function getDay() {
          var date = new Date();
          return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        }
        /**
         * 格式化钱数，超过10000 转换位 10K   10000K 转换为 10M
         */
        ;

        util.formatMoney = function formatMoney(money) {
          var arrUnit = ['', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y', 'B', 'N', 'D'];
          var strValue = '';

          for (var idx = 0; idx < arrUnit.length; idx++) {
            if (money >= 10000) {
              money /= 1000;
            } else {
              strValue = Math.floor(money) + arrUnit[idx];
              break;
            }
          }

          if (strValue === '') {
            strValue = Math.floor(money) + 'U'; //超过最大值就加个U
          }

          return strValue;
        }
        /**
         * 根据剩余秒数格式化剩余时间 返回 HH:MM:SS
         * @param {Number} leftSec
         */
        ;

        util.formatTimeForSecond = function formatTimeForSecond(leftSec) {
          var timeStr = '';
          var sec = leftSec % 60;
          var leftMin = Math.floor(leftSec / 60);
          leftMin = leftMin < 0 ? 0 : leftMin;
          var hour = Math.floor(leftMin / 60);
          var min = leftMin % 60;

          if (hour > 0) {
            timeStr += hour > 9 ? hour.toString() : '0' + hour;
            timeStr += ':';
          }

          timeStr += min > 9 ? min.toString() : '0' + min;
          timeStr += ':';
          timeStr += sec > 9 ? sec.toString() : '0' + sec;
          return timeStr;
        }
        /**
         *  根据剩余毫秒数格式化剩余时间 返回 HH:MM:SS
         *
         * @param {Number} ms
         */
        ;

        util.formatTimeForMillisecond = function formatTimeForMillisecond(ms) {
          var second = Math.floor(ms / 1000 % 60);
          var minute = Math.floor(ms / 1000 / 60 % 60);
          var hour = Math.floor(ms / 1000 / 60 / 60);
          var strSecond = second < 10 ? '0' + second : second;
          var strMinute = minute < 10 ? '0' + minute : minute;
          var strHour = hour < 10 ? '0' + hour : hour;
          return strSecond + ":" + strMinute + ":" + strHour;
        }
        /**
         * TODO 需要将pako进行引入，目前已经去除了压缩算法的需要，如需要使用需引入库文件
         * 将字符串进行压缩
         * @param {String} str
         */
        ;

        util.zip = function zip(str) {
          var binaryString = pako.gzip(encodeURIComponent(str), {
            to: 'string'
          }); // @ts-ignore

          return this.base64encode(binaryString);
        };

        util.rand = function rand(arr) {
          var arrClone = this.clone(arr); // 首先从最大的数开始遍历，之后递减

          for (var i = arrClone.length - 1; i >= 0; i--) {
            // 随机索引值randomIndex是从0-arrClone.length中随机抽取的
            var randomIndex = Math.floor(Math.random() * (i + 1)); // 下面三句相当于把从数组中随机抽取到的值与当前遍历的值互换位置

            var itemIndex = arrClone[randomIndex];
            arrClone[randomIndex] = arrClone[i];
            arrClone[i] = itemIndex;
          } // 每一次的遍历都相当于把从数组中随机抽取（不重复）的一个元素放到数组的最后面（索引顺序为：len-1,len-2,len-3......0）


          return arrClone;
        };

        return util;
      }()) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./mxManager.ts', './constant.ts', './resourceUtil.ts', './audioManager.ts', './GameRoot.ts', './poolManager.ts', './Sumo.ts', './colyseus.mjs_cjs=&original=.js', './GameConfig.ts', './EventManager.ts', './MiloManager.ts', './SocketConnection.ts', './InitSceneManager.ts', './MenuController.ts', './Gummy.ts', './foodSkins.ts', './csvManager.ts', './configuration.ts', './BotController.ts', './Helper.ts', './PlayerMovement.ts', './commonFun.ts', './PowerUpController.ts', './GameController.ts', './characterSkins.ts', './gameOver.ts', './GameUIController.ts', './skin.ts', './oneToMultiListener.ts', './Bot.ts', './leaderBoardBanner.ts', './CharacterHud.ts', './eventListener.ts', './Player.ts', './localConfig.ts', './Menu.ts', './shopMenu.ts', './lodash.ts', './GameManager.ts', './clientEvent.ts', './util.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
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