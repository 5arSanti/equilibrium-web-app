INSERT INTO Servicios_Principales (Nombre, Descripcion, Icono, ID_Entidad) VALUES
('Centro de estetica y SPA', 'Ofrecemos tratamientos faciales, masajes relajantes, cuidado corporal, manicura, pedicura y depilaci�n, todo en un ambiente tranquilo y elegante. �Ven y disfruta de una experiencia rejuvenecedora!', 'Estetica_SPA', 2),
('Servicios de salud integral', 'Ofrecemos servicios de salud integral que incluyen consultas m�dicas, terapias f�sicas, nutrici�n, psicolog�a y programas de bienestar, todo en un entorno profesional y acogedor. �Tu salud y bienestar son nuestra prioridad!', 'Salud_Integral', 1),
('Centro geriatrico', 'Ofrecemos atenci�n integral para adultos mayores, incluyendo cuidados m�dicos, terapias f�sicas, actividades recreativas y apoyo emocional, en un entorno seguro y acogedor. �Tu bienestar es nuestra prioridad!', 'Centro_Geriatrico', 1);



INSERT INTO Servicios_Asociados (ID_Servicio_Asociado, Nombre, Descripcion, Precio, ID_Categoria) VALUES
(1, 'Tratamientos faciales', 'Cuidado especializado para mejorar la salud y apariencia de la piel del rostro, incluyendo limpieza, hidrataci�n y rejuvenecimiento.', 140000, 1),
(2, 'Tratamientos corporales', 'Terapias para el cuidado integral del cuerpo, como masajes, exfoliaciones y envolturas, que promueven bienestar y belleza.', 250000, 2),
(3, 'Servicios de SPA', 'Experiencias relajantes con masajes, aromaterapia y otros tratamientos dise�ados para aliviar el estr�s y revitalizar el cuerpo y la mente.', 300000, 3),
(4, 'Medicina general', 'Consulta m�dica integral para diagn�stico, prevenci�n y tratamiento de diversas condiciones de salud.', 100000, 3),
(5, 'Medicina homeop�tica', 'Terapias naturales que buscan estimular la capacidad de autocuraci�n del cuerpo mediante remedios personalizados.', 120000, 3),
(6, 'Laboratorio cl�nico', 'Servicios de an�lisis cl�nicos confiables para el diagn�stico y monitoreo de condiciones de salud.', 150000, 3),
(7, 'Servicios de enfermeria', 'Atenci�n profesional para cuidados b�sicos y especializados, incluyendo administraci�n de medicamentos y curaciones.', 100000, 3),
(8, 'Cl�nica de heridas', 'Atenci�n especializada para la evaluaci�n y tratamiento avanzado de heridas cr�nicas y agudas.', 80000, 3);



INSERT INTO Detalles_Servicios_Principales_Servicios_Asociados (ID_Servicio_Principal, ID_Servicio_Asociado) VALUES
(1, 1),
(1, 2),
(1, 3),

(2, 4),
(2, 5),
(2, 6),
(2, 7),
(2, 8);