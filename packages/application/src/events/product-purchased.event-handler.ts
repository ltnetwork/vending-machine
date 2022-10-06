import type {IEventHandler} from "@nestjs/cqrs";
import {ProductPurchasedDomainEvent} from "@vending-machine/domain";
import {EventsHandler} from "@nestjs/cqrs";
import {ProductPurchasedIntegrationEvent} from "@vending-machine/integration-events";

@EventsHandler(ProductPurchasedDomainEvent)
export class ProductPurchasedEventHandler implements IEventHandler<ProductPurchasedDomainEvent> {
    declare public readonly publishIntegrationEvent: any;

    handle(_event: ProductPurchasedDomainEvent): Promise<void> {
        const integrationEvent = new ProductPurchasedIntegrationEvent();
        this.publishIntegrationEvent.publish(integrationEvent);
    }
}
