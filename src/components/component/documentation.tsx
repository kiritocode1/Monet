
export function MainDocumentation() {
  return (
    <main className="container mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
      <h1 className="text-4xl font-bold mb-8 md:mb-10 lg:mb-12">Building Scalable Web Applications</h1>
      <section className="mb-12 md:mb-16 lg:mb-20">
        <h2 className="text-2xl font-bold mb-4">Architectural Patterns</h2>
        <h3 className="text-xl font-semibold mb-2">Monolithic Architecture</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          A monolithic architecture is a traditional approach where the entire application is built as a single,
          self-contained unit. This means that all the components of the application, such as the user interface,
          business logic, and data access, are tightly coupled and deployed together.
        </p>
        <h3 className="text-xl font-semibold mb-2">Microservices Architecture</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          In a microservices architecture, the application is broken down into smaller, independent services that can be
          developed, deployed, and scaled independently. Each service is responsible for a specific business capability
          and communicates with other services through well-defined APIs.
        </p>
      </section>
      <section className="mb-12 md:mb-16 lg:mb-20">
        <h2 className="text-2xl font-bold mb-4">Scalability Strategies</h2>
        <h3 className="text-xl font-semibold mb-2">Vertical Scaling</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Vertical scaling involves increasing the resources (e.g., CPU, memory, storage) of a single server to handle
          more load. This is a simple and straightforward approach, but it has a limit based on the maximum capacity of
          the server.
        </p>
        <h3 className="text-xl font-semibold mb-2">Horizontal Scaling</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Horizontal scaling involves adding more servers to the system to handle increased load. This allows the
          application to scale out by distributing the workload across multiple servers. This approach is more complex
          to implement but can provide better scalability and fault tolerance.
        </p>
      </section>
      <section className="mb-12 md:mb-16 lg:mb-20">
        <h2 className="text-2xl font-bold mb-4">Caching Strategies</h2>
        <h3 className="text-xl font-semibold mb-2">Client-side Caching</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Client-side caching involves storing data on the user's device, such as in the browser's cache or local
          storage. This can improve performance by reducing the number of requests made to the server, especially for
          frequently accessed data.
        </p>
        <h3 className="text-xl font-semibold mb-2">Server-side Caching</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Server-side caching involves storing data on the server, either in memory (e.g., using a caching service like
          Redis) or on disk (e.g., using a content delivery network). This can help reduce the load on the application
          server and improve response times.
        </p>
      </section>
    </main>
  )
}
