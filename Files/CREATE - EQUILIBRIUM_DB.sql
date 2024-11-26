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
	ID_Servicio_Principal INT PRIMARY KEY NOT NULL,
	Nombre VARCHAR(255) NOT NULL,
	Descripcion TEXT NOT NULL,
	Icono VARCHAR(50) NOT NULL,
	Enlace VARCHAR(50) NOT NULL,
	ID_Entidad INT FOREIGN KEY REFERENCES Entidades(ID_Entidad) NOT NULL
);

INSERT INTO Servicios_Principales (ID_Servicio_Principal, Nombre, Descripcion, Icono, Enlace, ID_Entidad) VALUES
(1, 'Centro de estetica y SPA', 'Ofrecemos tratamientos faciales, masajes relajantes, cuidado corporal, manicura, pedicura y depilación, todo en un ambiente tranquilo y elegante. ¡Ven y disfruta de una experiencia rejuvenecedora!', 'Estetica_SPA', 'estetica-spa', 2),
(2, 'Servicios de salud integral', 'Ofrecemos servicios de salud integral que incluyen consultas médicas, terapias físicas, nutrición, psicología y programas de bienestar, todo en un entorno profesional y acogedor. ¡Tu salud y bienestar son nuestra prioridad!', 'Salud_Integral', 'salud-integral', 1),
(3, 'Centro geriatrico', 'Ofrecemos atención integral para adultos mayores, incluyendo cuidados médicos, terapias físicas, actividades recreativas y apoyo emocional, en un entorno seguro y acogedor. ¡Tu bienestar es nuestra prioridad!', 'Centro_Geriatrico', 'centro-geriatrico', 1);



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
	ID_Servicio_Asociado INT PRIMARY KEY NOT NULL,
	Nombre VARCHAR(255) NOT NULL,
	Descripcion TEXT NOT NULL,
	Imagen VARBINARY(MAX) NULL,
	Precio MONEY NOT NULL,
	ID_Categoria INT FOREIGN KEY REFERENCES Categorias_Servicios(ID_Categoria) NOT NULL,
);

INSERT INTO Servicios_Asociados (ID_Servicio_Asociado, Nombre, Descripcion, Precio, ID_Categoria) VALUES
(1, 'Tratamientos faciales', 'Cuidado especializado para mejorar la salud y apariencia de la piel del rostro, incluyendo limpieza, hidratación y rejuvenecimiento.', 140000, 1),
(2, 'Tratamientos corporales', 'Terapias para el cuidado integral del cuerpo, como masajes, exfoliaciones y envolturas, que promueven bienestar y belleza.', 250000, 2),
(3, 'Servicios de SPA', 'Experiencias relajantes con masajes, aromaterapia y otros tratamientos diseñados para aliviar el estrés y revitalizar el cuerpo y la mente.', 300000, 3),
(4, 'Medicina general', 'Consulta médica integral para diagnóstico, prevención y tratamiento de diversas condiciones de salud.', 100000, 3),
(5, 'Medicina homeopática', 'Terapias naturales que buscan estimular la capacidad de autocuración del cuerpo mediante remedios personalizados.', 120000, 3),
(6, 'Laboratorio clínico', 'Servicios de análisis clínicos confiables para el diagnóstico y monitoreo de condiciones de salud.', 150000, 3),
(7, 'Servicios de enfermeria', 'Atención profesional para cuidados básicos y especializados, incluyendo administración de medicamentos y curaciones.', 100000, 3),
(8, 'Clínica de heridas', 'Atención especializada para la evaluación y tratamiento avanzado de heridas crónicas y agudas.', 80000, 3);



CREATE TABLE Detalles_Servicios_Principales_Servicios_Asociados (
	ID_Servicio_Principal INT FOREIGN KEY REFERENCES Servicios_Principales(ID_Servicio_Principal),
	ID_Servicio_Asociado INT FOREIGN KEY REFERENCES Servicios_Asociados(ID_Servicio_Asociado),
);
INSERT INTO Detalles_Servicios_Principales_Servicios_Asociados (ID_Servicio_Principal, ID_Servicio_Asociado) VALUES
(1, 1),
(1, 2),
(1, 3),

(2, 4),
(2, 5),
(2, 6),
(2, 7),
(2, 8);

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
    1 -- Estado "Disponible"
FROM Servicios_Asociados sa
CROSS JOIN Dias_Semana ds
CROSS JOIN Horarios h;



-- Noticias
CREATE TABLE Tipo_Noticia (
	ID_Tipo_Noticia INT PRIMARY KEY NOT NULL,
	Nombre TEXT NOT NULL,
)

CREATE TABLE Noticias (
	ID_Noticia INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
	Titulo VARCHAR(255) NOT NULL,
	SubTitulo VARCHAR(255) NULL,
	Cuerpo_Noticia NTEXT NULL,
	Imagen VARBINARY(MAX) NULL,
	Fuente TEXT NULL,
	Fecha_Publicacion DATETIME NOT NULL,
	ID_Usuario INT FOREIGN KEY REFERENCES Usuarios(Cedula_Usuario),
	ID_Categoria_Servicios INT FOREIGN KEY REFERENCES Categorias_Servicios(ID_Categoria)
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
    Observaciones TEXT NULL,
    ID_Estado_Cita INT FOREIGN KEY REFERENCES Estado_Cita(ID_Estado_Cita) NOT NULL,
    ID_Servicio_Horario INT FOREIGN KEY REFERENCES Servicios_Horarios(ID_Servicio_Horario),
    ID_Usuario INT FOREIGN KEY REFERENCES Usuarios(Cedula_Usuario),
    ID_Servicio INT FOREIGN KEY REFERENCES Servicios_Asociados(ID_Servicio_Asociado),
    Fecha_Creacion DATETIME DEFAULT GETDATE() NOT NULL,
    Fecha_Modificacion DATETIME NULL
);