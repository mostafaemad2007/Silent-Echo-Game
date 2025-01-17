const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Button,
		C3.Plugins.Sprite,
		C3.Behaviors.TileMovement,
		C3.Plugins.Keyboard,
		C3.Behaviors.scrollto,
		C3.Behaviors.Follow,
		C3.Plugins.Text,
		C3.Plugins.Audio,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Button.Acts.SetChecked,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Cnds.IsVisible,
		C3.Behaviors.Follow.Acts.FollowObject,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Button.Acts.SetText,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.Play
	];
};
self.C3_JsPropNameTable = [
	{TiledBackground: 0},
	{Solid: 0},
	{TiledBackground2: 0},
	{Button3: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{Button1: 0},
	{Button2: 0},
	{TileMovement: 0},
	{Sprite5: 0},
	{lo1: 0},
	{Sprite7: 0},
	{Button4: 0},
	{Button5: 0},
	{Sprite8: 0},
	{Keyboard: 0},
	{ScrollTo: 0},
	{Camera: 0},
	{Sprite9: 0},
	{Follow: 0},
	{Sprite10: 0},
	{Sprite6: 0},
	{Sprite11: 0},
	{Sprite12: 0},
	{Sprite13: 0},
	{Sprite14: 0},
	{Sprite15: 0},
	{Sprite16: 0},
	{Sprite17: 0},
	{Text: 0},
	{Audio: 0},
	{Text2: 0},
	{Text3: 0}
];

self.InstanceType = {
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	Button3: class extends self.IButtonInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Button1: class extends self.IButtonInstance {},
	Button2: class extends self.IButtonInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	lo1: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Button4: class extends self.IButtonInstance {},
	Button5: class extends self.IButtonInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	Camera: class extends self.ISpriteInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	Sprite10: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite11: class extends self.ISpriteInstance {},
	Sprite12: class extends self.ISpriteInstance {},
	Sprite13: class extends self.ISpriteInstance {},
	Sprite14: class extends self.ISpriteInstance {},
	Sprite15: class extends self.ISpriteInstance {},
	Sprite16: class extends self.ISpriteInstance {},
	Sprite17: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	Audio: class extends self.IInstance {},
	Text2: class extends self.ITextInstance {},
	Text3: class extends self.ITextInstance {}
}