// exports = {

//   onTicketCreateHandler: function(args) {
    
//     const ticketData = {
//       description:args.data.ticket.description,
//       subject: args.data.ticket.subject,
//       email: args.data.requester.email,
//       priority: args.data.ticket.priority,
//       status: args.data.ticket.status,
      
      
     
//     };
//      console.log(ticketData);
//      $request.post(`https://${args.iparams.domain}.freshdesk.com/api/v2/tickets`, {
//   headers:{
  
//   "Authorization": "Basic <%= encode(iparam.apiKey) %>",
//   "Content-Type": "application/json",
// },body: JSON.stringify(ticketData)
// })
//   .then(
//     function(data) {
//      console.log(data)

//     },
//     function(error) {
//       console.log(error)
//     }
//   );
  
// }     
// };


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
