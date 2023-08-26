

exports = {
  // OnTicketCreateHandler
  onTicketCreateHandler: function (args) {
    console.log("Args Object:w", args);

    const CreateFreshDeskPayload = {
      email: args.data.requester.email,
      subject: args.data.ticket.subject,
      status: args.data.ticket.status,
      priority: args.data.ticket.priority,
      description: args.data.ticket.description_text,
    };

    console.log("Payload:", CreateFreshDeskPayload);

    $request
      .invokeTemplate("Create", {
        body: JSON.stringify(CreateFreshDeskPayload),
      })
      .then(
        function (data) {
          console.log("payloadData: ", data);
        },
        function (err) {
          console.log("Err:", err);
        }
      );
  },
};
