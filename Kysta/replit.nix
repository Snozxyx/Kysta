{ pkgs }: {
	deps = [
		pkgs.nodejs
  pkgs.run
  pkgs.nodejs-18_x
    pkgs.nodePackages.typescript-language-server
    pkgs.yarn
    pkgs.replitPackages.jest
	];
}