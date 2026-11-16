function validarReemplazoReserva(req, res, next) {
  const datos = req.body;
  const permitidos = [
    "estudiante",
    "email",
    "sala",
    "fecha",
    "turno",
    "personas",
    //"estado",
  ];
  for (const campo of Object.keys(datos)) {
    if (!permitidos.includes(campo)) {
      return res
        .status(400)
        .json({ error: "El campo " + campo + " no se puede modificar." });
    }
  }

  const estadosPermitidos = ["Pendiente", "Confirmada"];
  if (!estadosPermitidos.includes(datos.estado)) {
    return res.status(400).json({
      error: "El estado debe ser Pendiente o Confirmada.",
    });
  }
  req.cambiosValidos = {
    ...req.reservaValidada,
    estado: datos.estado,
  };
  next();
}

function validarActualizacionReserva(req, res, next) {
  const datos = req.body;
  if (!datos || typeof datos !== "object" || Array.isArray(datos)) {
    return res.status(400).json({ error: "Enviá un objto JSON." });
  }
  for (const campo of Object.keys(datos)) {
    if (campo !== "personas" && campo !== "estado") {
      return res.status(400).json({
        error: "solo se pueden modificar los campos Personas y Estado",
      });
    }
  }

  if (datos.personas === undefined && datos.estado === undefined) {
    return res
      .status(400)
      .json({ error: "Enviar cantidad de personas o el estado de la reserva" });
  }
  const cambios = {};
  if (datos.personas !== undefined) {
    if (typeof datos.personas !== "number") {
      return res
        .status(400)
        .json({ error: "Personas debe der un numero JSON, sin comillas" });
    }
    if (
      !Number.isFinite(datos.personas) ||
      datos.personas < 1 ||
      datos.personas > 6
    ) {
      return res
        .status(400)
        .json({ error: "Precio debe ser mayor o igual a 1 y menor que 6. " });
    }
    cambios.personas = datos.personas;
  }
  if (datos.estado !== undefined) {
    if (typeof datos.estado !== "string") {
      return res.status(400).json({ error: "Estado debe ser un string" });
    }
    cambios.estado = datos.estado;
  }
  req.cambiosValidos = cambios;
  next();
}

module.exports = { validarReemplazoReserva, validarActualizacionReserva };
