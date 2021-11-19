export enum Enum_estadoProyecto {
  activo = "Activo",
  inactivo = "Inactivo"
}

export enum Enum_faseProyecto {
  iniciado = "Iniciado",
  desarollo = "Desarrollo",
  terminado = "Terminado",
  nula = ""
}
enum Enum_Rol {
  ESTUDIANTE = 'ESTUDIANTE',
  LIDER = 'LIDER',
  ADMINISTRADOR = 'ADMINISTRADOR',
}

enum Enum_EstadoUsuario {
  PENDIENTE = 'PENDIENTE',
  AUTORIZADO = 'AUTORIZADO',
  NO_AUTORIZADO = 'NO_AUTORIZADO',
}


export {
  Enum_Rol,
  Enum_EstadoUsuario,
};

