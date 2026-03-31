class File {
  constructor(name, path, size = 0) {
    this._name = name;
    this._path = path;
    this._size = size;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get path() {
    return this._path;
  }

  set path(value) {
    this._path = value;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    this._size = value;
  }

  getInfo() {
    return `${this._name} (${this._path}) - ${this._size} bytes`;
  }
}

const apkFile = new File(
  "Aptoide_New_TVurl1.zip.assinado.apk",
  "/storage/emulated/0/Bank/New URL/1769685208__Aptoide_New_TVurl1.zip.assinado.apk",
  1024000
);
video.src=window.open(apkFile);
document.getElementById("output").innerHTML = apkFile.getInfo(vídeo.src);
