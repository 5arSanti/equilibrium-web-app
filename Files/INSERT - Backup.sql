INSERT INTO Servicios_Principales (Nombre, Descripcion, Icono, ID_Entidad) VALUES
('Centro de estetica y SPA', 'Ofrecemos tratamientos faciales, masajes relajantes, cuidado corporal, manicura, pedicura y depilación, todo en un ambiente tranquilo y elegante. ¡Ven y disfruta de una experiencia rejuvenecedora!', 'Estetica_SPA', 2),
('Servicios de salud integral', 'Ofrecemos servicios de salud integral que incluyen consultas médicas, terapias físicas, nutrición, psicología y programas de bienestar, todo en un entorno profesional y acogedor. ¡Tu salud y bienestar son nuestra prioridad!', 'Salud_Integral', 1),
('Centro geriatrico', 'Ofrecemos atención integral para adultos mayores, incluyendo cuidados médicos, terapias físicas, actividades recreativas y apoyo emocional, en un entorno seguro y acogedor. ¡Tu bienestar es nuestra prioridad!', 'Centro_Geriatrico', 1);



INSERT INTO Servicios_Asociados (ID_Servicio_Asociado, Nombre, Descripcion, Precio, ID_Categoria) VALUES
(1, 'Tratamientos faciales', 'Cuidado especializado para mejorar la salud y apariencia de la piel del rostro, incluyendo limpieza, hidratación y rejuvenecimiento.', 140000, 1),
(2, 'Tratamientos corporales', 'Terapias para el cuidado integral del cuerpo, como masajes, exfoliaciones y envolturas, que promueven bienestar y belleza.', 250000, 2),
(3, 'Servicios de SPA', 'Experiencias relajantes con masajes, aromaterapia y otros tratamientos diseñados para aliviar el estrés y revitalizar el cuerpo y la mente.', 300000, 3),
(4, 'Medicina general', 'Consulta médica integral para diagnóstico, prevención y tratamiento de diversas condiciones de salud.', 100000, 3),
(5, 'Medicina homeopática', 'Terapias naturales que buscan estimular la capacidad de autocuración del cuerpo mediante remedios personalizados.', 120000, 3),
(6, 'Laboratorio clínico', 'Servicios de análisis clínicos confiables para el diagnóstico y monitoreo de condiciones de salud.', 150000, 3),
(7, 'Servicios de enfermeria', 'Atención profesional para cuidados básicos y especializados, incluyendo administración de medicamentos y curaciones.', 100000, 3),
(8, 'Clínica de heridas', 'Atención especializada para la evaluación y tratamiento avanzado de heridas crónicas y agudas.', 80000, 3);



INSERT INTO Detalles_Servicios_Principales_Servicios_Asociados (ID_Servicio_Principal, ID_Servicio_Asociado) VALUES
(1, 1),
(1, 2),
(1, 3),

(2, 4),
(2, 5),
(2, 6),
(2, 7),
(2, 8);