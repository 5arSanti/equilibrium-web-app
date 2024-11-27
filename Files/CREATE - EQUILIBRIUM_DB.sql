CREATE DATABASE EQUILIBRIUM_DB;
GO

USE EQUILIBRIUM_DB;


-- Tipos de Usuarios
CREATE TABLE Tipo_Usuarios (
	ID_Tipo_Usuarios INT PRIMARY KEY,
	Nombre VARCHAR(50) NOT NULL
);

INSERT INTO Tipo_Usuarios (ID_Tipo_Usuarios, Nombre) VALUES 
(1, 'Administrador'),
(2, 'Cliente');


-- Sexos
CREATE TABLE Generos (
	ID_Genero INT PRIMARY KEY NOT NULL,
	Genero VARCHAR(20) NOT NULL,
)

INSERT INTO Generos (ID_Genero, Genero) VALUES 
(1, 'Femenino'),
(2, 'Masculino'),
(3, 'Otro');


-- Usuarios
CREATE TABLE Usuarios (
	Cedula_Usuario INT PRIMARY KEY NOT NULL,
	Nombre VARCHAR(50) NOT NULL,
	Apellidos VARCHAR(50) NOT NULL,
	Correo VARCHAR(255) NOT NULL,
	Contraseña TEXT NOT NULL,
	Imagen VARBINARY(MAX) NULL,
	ID_Tipo_De_Usuario INT FOREIGN KEY REFERENCES Tipo_Usuarios(ID_Tipo_Usuarios) DEFAULT 2 NOT NULL,
	ID_Genero INT FOREIGN KEY REFERENCES Generos(ID_Genero) NOT NULL
)

INSERT INTO Usuarios (Cedula_Usuario, Nombre, Apellidos, Correo, Contraseña, ID_Tipo_De_Usuario, ID_Genero) VALUES 
(1016947063, 'Johel Santiago', 'Arias Becerra', 'santiari05@hotmail.com', '$2b$10$pY5JINU8DNEU1DuLLPE/a.Arm9VipTccjKNeQ2S6n/sqPTrOaU68C', 1, 2)



-- Entidades
CREATE TABLE Entidades (
	ID_Entidad INT PRIMARY KEY NOT NULL,
	Nombre VARCHAR(50) NOT NULL
)

INSERT INTO Entidades (ID_Entidad, Nombre) VALUES 
(1, 'EGES'),
(2, 'EQUILIBRIUM');



-- Servicios princiaples
CREATE TABLE Servicios_Principales (
	ID_Servicio_Principal INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
	Nombre VARCHAR(255) NOT NULL,
	Descripcion TEXT NOT NULL,
	Icono VARCHAR(50) NOT NULL,
	Imagen VARBINARY(MAX) NULL,
	ID_Entidad INT FOREIGN KEY REFERENCES Entidades(ID_Entidad) NOT NULL
);



--Categorias de servicios
CREATE TABLE Categorias_Servicios (
	ID_Categoria INT PRIMARY KEY NOT NULL,
	Nombre VARCHAR(50) NOT NULL
)

INSERT INTO Categorias_Servicios VALUES 
(1, 'Faciales'),
(2, 'Corporales'),
(3, 'Salud integral');



-- Servicios Asociados
CREATE TABLE Servicios_Asociados (
	ID_Servicio_Asociado INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
	Nombre VARCHAR(255) NOT NULL,
	Descripcion TEXT NOT NULL,
	Imagen VARBINARY(MAX) NULL,
	Precio MONEY NOT NULL,
	ID_Categoria INT FOREIGN KEY REFERENCES Categorias_Servicios(ID_Categoria) NOT NULL,
);



CREATE TABLE Detalles_Servicios_Principales_Servicios_Asociados (
	ID_Servicio_Principal INT FOREIGN KEY REFERENCES Servicios_Principales(ID_Servicio_Principal),
	ID_Servicio_Asociado INT FOREIGN KEY REFERENCES Servicios_Asociados(ID_Servicio_Asociado),
);

-- Dias de la semana
CREATE TABLE Dias_Semana(
	ID_Dia INT PRIMARY KEY NOT NULL,
	Nombre VARCHAR(50) NOT NULL
)

INSERT INTO Dias_Semana (ID_Dia, Nombre) VALUES 
(1, 'Lunes'),
(2, 'Martes'),
(3, 'Miercoles'),
(4, 'Jueves'),
(5, 'Viernes'),
(6, 'Sabado'),
(7, 'Domingo');


-- Horarios
CREATE TABLE Horarios (
    ID_Horario INT PRIMARY KEY NOT NULL,
    Hora_Inicio TIME(0) NOT NULL,
    Hora_Fin TIME(0) NOT NULL,
);

INSERT INTO Horarios (ID_Horario, Hora_Inicio, Hora_Fin) VALUES
(1, '08:00', '09:00'),
(2, '09:00', '10:00'),
(3, '10:00', '11:00'),
(4, '11:00', '12:00'),
(5, '13:00', '14:00'),
(6, '14:00', '15:00'),
(7, '15:00', '16:00'),
(8, '16:00', '17:00');

-- Estado de los horarios
CREATE TABLE Estado_Horario (
	ID_Estado_Horario INT PRIMARY KEY NOT NULL,
	Estado VARCHAR(20) NOT NULL
)

INSERT INTO Estado_Horario (ID_Estado_Horario, Estado) VALUES
(0, 'Ocupado'),
(1, 'Disponible');



-- Servicios con horarios
CREATE TABLE Servicios_Horarios (
    ID_Servicio_Horario INT PRIMARY KEY IDENTITY(1,1),
    ID_Servicio_Asociado INT FOREIGN KEY REFERENCES Servicios_Asociados(ID_Servicio_Asociado),
    ID_Dia INT FOREIGN KEY REFERENCES Dias_Semana(ID_Dia),
    ID_Horario INT FOREIGN KEY REFERENCES Horarios(ID_Horario),
    ID_Estado_Horario INT FOREIGN KEY REFERENCES Estado_Horario(ID_Estado_Horario)
);

INSERT INTO Servicios_Horarios (ID_Servicio_Asociado, ID_Dia, ID_Horario, ID_Estado_Horario)
SELECT 
    sa.ID_Servicio_Asociado,
    ds.ID_Dia,
    h.ID_Horario,
    1 
FROM Servicios_Asociados sa
CROSS JOIN Dias_Semana ds
CROSS JOIN Horarios h;



-- Noticias
CREATE TABLE Tipo_Noticia (
	ID_Tipo_Noticia INT PRIMARY KEY NOT NULL,
	Nombre TEXT NOT NULL,
)
INSERT INTO Tipo_Noticia VALUES 
(1, 'Salud y Bienestar'),
(2, 'Actividades y Eventos'),
(3, 'Innovación y Tecnología'),
(4, 'Comunidad y Voluntariado'),
(5, 'Regulaciones y Políticas Públicas');

CREATE TABLE Noticias (
	ID_Noticia INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
	Titulo VARCHAR(255) NOT NULL,
	SubTitulo VARCHAR(255) NOT NULL,
	Cuerpo_Noticia TEXT NOT NULL,
	Imagen VARBINARY(MAX) NULL,
	Fuente TEXT NULL,
	Fecha_Publicacion DATETIME DEFAULT GETDATE() NOT NULL,
	ID_Tipo_Noticia INT FOREIGN KEY REFERENCES Tipo_Noticia(ID_Tipo_Noticia) NOT NULL,
	ID_Usuario INT FOREIGN KEY REFERENCES Usuarios(Cedula_Usuario) NOT NULL,
	ID_Categoria_Servicios INT FOREIGN KEY REFERENCES Categorias_Servicios(ID_Categoria) NOT NULL
)

--Opiniones
CREATE TABLE Opiniones (
	ID_Opinion INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
	Opinion VARCHAR(255) NOT NULL,
	Nombres VARCHAR(50) NOT NULL,
	Apellidos VARCHAR(50) NOT NULL,
	Fecha_Publicacion DATETIME NOT NULL,
	ID_Servicio_Asociado INT FOREIGN KEY REFERENCES Servicios_Asociados(ID_Servicio_Asociado) NOT NULL,
)


--Empleados
CREATE TABLE Tipo_Empleados(
	ID_Tipo_Empleado INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
	Nombres VARCHAR(255) NOT NULL,
	Descripcion TEXT NOT NULL,
)

CREATE TABLE Empleados (
	Cedula_Empleado INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
	Nombres VARCHAR(50) NOT NULL,
	Apellidos VARCHAR(50) NOT NULL,
	Correo VARCHAR(255) NOT NULL,
	ID_Tipo_Empleado INT FOREIGN KEY REFERENCES Tipo_Empleados(ID_Tipo_Empleado) NOT NULL
)


-- Estado de Citas
CREATE TABLE Estado_Cita (
	ID_Estado_Cita INT PRIMARY KEY NOT NULL,
	Estado VARCHAR(25) NOT NULL
)

INSERT INTO Estado_Cita (ID_Estado_Cita, Estado) VALUES 
(1, 'Programada'),
(2, 'En curso'),
(3, 'Finalizada'),
(4, 'Cancelada'),
(5, 'Reprogramada');

-- Citas
CREATE TABLE Citas (
    ID_Cita INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
    Fecha DATE NULL,
    Observaciones TEXT NULL DEFAULT 'Sin observaciones',
    ID_Estado_Cita INT FOREIGN KEY REFERENCES Estado_Cita(ID_Estado_Cita) NOT NULL,
    ID_Servicio_Horario INT FOREIGN KEY REFERENCES Servicios_Horarios(ID_Servicio_Horario),
    ID_Usuario INT FOREIGN KEY REFERENCES Usuarios(Cedula_Usuario),
    ID_Servicio INT FOREIGN KEY REFERENCES Servicios_Asociados(ID_Servicio_Asociado),
    Fecha_Creacion DATETIME DEFAULT GETDATE() NOT NULL,
    Fecha_Modificacion DATETIME NULL
);