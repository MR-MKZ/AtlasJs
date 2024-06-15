class AtlasError extends Error {
  constructor(message, type, tips, data) {
    super(message);

    this.name = "AtlasError -> " + type;
    if (tips) {
      this.tips = tips;
    }
    if (data) {
      this.data = data;
    }
  }
}

export function raiseError(message, type, tips, data) {
  throw new AtlasError(message, type, tips, data);
}
