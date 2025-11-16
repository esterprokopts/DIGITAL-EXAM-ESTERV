export class AppointmentUtils {

  static buildAppointmentUrl(serviceId) {
    // serviceId = "svc_262_412010"
    const [, authorityId, serviceNum] = serviceId.split("_");
    return `https://govisit.gov.il/he/app/appointment/${authorityId}/${serviceNum}/v2`;
  }
}
